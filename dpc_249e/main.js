var challenge1 = [19.35, 19.30, 18.88, 18.93, 18.95, 19.03, 19.00, 18.97, 18.97, 18.98];
var challenge2 = [9.20, 8.03, 10.02, 8.08, 8.14, 8.10, 8.31, 8.28, 8.35, 8.34, 8.39, 8.45, 8.38, 8.38, 8.32, 8.36, 8.28, 8.28, 8.38, 8.48, 8.49, 8.54, 8.73, 8.72, 8.76, 8.74, 8.87, 8.82, 8.81, 8.82, 8.85, 8.85, 8.86, 8.63, 8.70, 8.68, 8.72, 8.77, 8.69, 8.65, 8.70, 8.98, 8.98, 8.87, 8.71, 9.17, 9.34, 9.28, 8.98, 9.02, 9.16, 9.15, 9.07, 9.14, 9.13, 9.10, 9.16, 9.06, 9.10, 9.15, 9.11, 8.72, 8.86, 8.83, 8.70, 8.69, 8.73, 8.73, 8.67, 8.70, 8.69, 8.81, 8.82, 8.83, 8.91, 8.80, 8.97, 8.86, 8.81, 8.87, 8.82, 8.78, 8.82, 8.77, 8.54, 8.32, 8.33, 8.32, 8.51, 8.53, 8.52, 8.41, 8.55, 8.31, 8.38, 8.34, 8.34, 8.19, 8.17, 8.16];

function solve(input) {
    var highPrice = 0.0;
    var lowPrice = 0.0;
    
    var buyPrice = 0.0;
    
    var ticks = [];
    
    for(var i = 0; i < input.length; i++) {
        if (!lowPrice || input[i] < lowPrice) {
            lowPrice = input[i];
        }
        if (!highPrice || input[i] < highPrice) {
            highPrice = input[i];
        }
        
        ticks.push({price: input[i], index: i});
    }
    
    ticks.sort(function (a, b) {
        if (a.price < b.price) {
            return -1;
        }
        if (a.price > b.price) {
            return 1;
        }
        return 0;
    });
    
    var sale;
    var highestSale = 0.0;
    
    for(var j = 0; j < ticks.length; j++) {
        buyPrice = ticks[j].price;
        for(var k = ticks[j].index + 2; k < input.length; k++) {
            var price = input[k] - ticks[j].price;
            if (price > highestSale) {
                sale = {buyIndex: ticks[j].index, sellIndex: k, price: price};
                highestSale = sale.price;
                console.log(ticks[j].index + ', ' + k + ', ' + highestSale);
            }
        }
    }
    
    return [input[sale.buyIndex], input[sale.sellIndex]];
}