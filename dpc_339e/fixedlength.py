# python fixedlength.py EmployeeRecords.txt

import locale
locale.setlocale(locale.LC_ALL, '')

import os
import sys

employees = []

class Employee:
    name = None
    age = None
    birthdate = None
    
    def __init__(self, name, age, birthdate):
        self.name = name
        self.age = age
        self.birthdate = birthdate

# seemed more correct to allow filename to be passed in as a command line argument instead of hard-coding it
fn = sys.argv[1]
if os.path.exists(fn):
    with open(fn) as f:
        e = None
        for line in f:
            if line.startswith('::EXT::'):
                k = line[7:10].lower()
                v = line[11:28]
                setattr(employees[len(employees) - 1], k, v)
            else:
                name = line[0:19]
                age = line[20:21]
                birthdate = line[22:28]
                employees.append(Employee(name, age, birthdate))

highestpaid = None

# could be optimized by doing this on the first pass while assembling employees list
# but it's simpler to do this in a second pass given my limited knowledge of how Python stores objects/pointers
for employee in employees:
    if hasattr(employee, "sal"):
        if highestpaid is None:
            highestpaid = employee
        elif int(employee.sal) > int(highestpaid.sal):
            highestpaid = employee

# basic text substring to remove additional spaces built into names by the fixed length column format
# also use locale to format currency for printing, even though it's not an exact match to the challenge output
print(highestpaid.name[0:highestpaid.name.index("  ")] + ", $" + locale.currency(int(highestpaid.sal), symbol=False, grouping=True))