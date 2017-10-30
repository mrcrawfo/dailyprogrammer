var challenge1 = [2017,10,30];
var challenge2 = [2016,2,29];
var challenge3 = [2015,2,28];
var challenge4 = [29,4,12];
var challenge5 = [570,11,30];
var challenge6 = [1066,9,25];
var challenge7 = [1776,7,4];
var challenge8 = [1933,1,30];
var challenge9 = [1953,3,6];
var challenge10 = [2100,1,9];
var challenge11 = [2202,12,15];
var challenge12 = [7032,3,26];

var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function solve(input) {
    var dateYear = input[0];
    var dateMonth = input[1];
    var dateDay = input[2];
    
    var count = countDaysFrom20171029(dateYear, dateMonth, dateDay);
    var offset = count % 7;
    
    if (offset >= 0) {
        return dayNames[offset];
    } else {
        return dayNames[7 + offset];
    }
}

function countDaysFrom20171029(year, month, day) {
    // 20171029 chosen as baseline date because it is closest Sunday (0-based index) to the current date / first test input
    var difference = 0;
    if (year > 2017 || (year == 2017 && month > 10) || (year == 2017 && month == 10 && day > 29)) {
        if (year > 2017) {
            for(var i = 2018; i < year; i++) {
                var d1 = isLeapYear(i) ? 366 : 365;
                difference += d1;
            }
            difference = countDaysSinceYearStart(year, month, day) + difference + countDaysTilYearEnd(2017, 10, 30) + 1;
        } else {
            if (month > 10) {
                if (month > 11) {
                    difference = (daysInMonth[9] - 30) + daysInMonth[10] + day;
                } else {
                    difference = (daysInMonth[9] - 30) + day;
                }
            } else {
                difference = day - 30;
            }
        }
    } else if (year < 2017 || (year == 2017 && month < 10) || (year == 2017 && month == 10 && day < 29)) {
        if (year < 2017) {
            for(var j = 2016; j > year; j--) {
                var d2 = isLeapYear(j) ? 366 : 365;
                difference += d2;
            }
            difference = countDaysTilYearEnd(year, month, day) + difference + countDaysSinceYearStart(2017, 10, 28) + 1;
        } else {
            if (month < 10) {
                if (month < 9) {
                    for(var h = 9; h > month; h++) {
                        difference += daysInMonth[h - 1];
                    }
                    diference = 30 + difference + (daysInMonth[8] - day);
                } else {
                    diference = 30 + (daysInMonth[8] - day);
                }
            } else {
                difference = 30 - day;
            }
        }
        difference = -1 * difference;
    }
    
    return difference;
}

function isLeapYear(year) {
    return (year % 4 == 0) && ((year % 100 != 0) || (year % 400 == 0));
}

function countDaysSinceYearStart(year, month, day) {
    var days = day;
    for(var i = 1; i < month; i++) {
        days += daysInMonth[i - 1];
    }
    if (month > 2 && isLeapYear(year)) {
        days++;
    }
    return days;
}

function countDaysTilYearEnd(year, month, day) {
    var days = daysInMonth[month - 1] - day;
    for(var i = 12; i > month; i--) {
        days += daysInMonth[i - 1];
    }
    if (month > 2 && isLeapYear(year)) {
        days++;
    }
    return days;
}