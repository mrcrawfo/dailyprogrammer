var luckyNumberApp = angular.module('luckyNumberApp', ['ui.bootstrap']);

luckyNumberApp.controller('luckyNumberController', ['$scope', function ($scope) {
    var self = this;
    
    self.luckyNumbers = [];
    self.luckyNumbersMax = 100000;
    self.luckyNumbersOffset = 1;
    self.luckyNumbersCurrent = 1;

    self.startTime = new Date().getTime();
    
    // create array of integers 1...luckyNumbersMax
    for (var i = 1; i <= self.luckyNumbersMax; i += 2) {
        self.luckyNumbers.push(i);
    }
    
    // precalculate luckyNumbers
    while(self.luckyNumbers.length > self.luckyNumbersCurrent) {
        self.luckyNumbersCurrent = self.luckyNumbers[self.luckyNumbersOffset];
        self.temp = [self.luckyNumbers[0]];
        for (var i = 1; i < self.luckyNumbers.length; i++) {
            if (!((i + 1) % self.luckyNumbersCurrent == 0)) self.temp.push(self.luckyNumbers[i]);
        }
        self.luckyNumbers = self.temp.concat();
        self.luckyNumbersOffset++;
    }
    
    self.endTime = new Date().getTime();
    console.log('found lucky numbers for the set [1...' + self.luckyNumbersMax + '] in ' + (self.endTime - self.startTime) + 'ms');
    console.log(self.luckyNumbers);
    
    self.getOutput = function (n) {
        var output = '';
        var prevNumber = 0;
        var nextNumber = 0;
        var match = false;
        for (var i = 0; i < self.luckyNumbers.length; i++) {
            if (self.luckyNumbers[i] < n) prevNumber = self.luckyNumbers[i];
            else if (self.luckyNumbers[i] == n) {
                match = true;
                break;
            }
            else {
                nextNumber = self.luckyNumbers[i];
                break;
            }
        }
        if (match) {
            output = n + ' is a lucky number';
        } else {
            output = prevNumber + ' < ' + n + ' < ' + nextNumber;
        }
        return output;
    };
}]);