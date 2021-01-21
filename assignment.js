// Kilometer To Meter

function kilometerToMeter(kilo) {
    return kilo * 1000;
}
console.log(kilometerToMeter(12)); //delete

//Budget Calculator

function budgetCalculator(watch, phone, laptop) {
    var watchPrice = 50;
    var phonePrice = 100;
    var laptopPrice = 500;

    var total = (watch * watchPrice) + (phone * phonePrice) + (laptop * laptopPrice);
    return total;
}
var result = budgetCalculator(2, 1, 1)
console.log(result); //delete

//Hotel room cost function

function hotelCost(day) {
    var cost = "";

    if (day <= 10) {
        cost = day * 100;
    } else if (day <= 20) {
        var firstPart = 10 * 100;
        var remain = day - 10;
        var secondPart = remain * 80;
        cost = firstPart + secondPart;
    } else {
        var firstPart = 10 * 100;
        var secondPart = 20 * 80;
        var remain = day - 20;
        var thirdPart = remain * 50;
        cost = firstPart + secondPart + thirdPart;
    }
    return cost;
}
var result = hotelCost(30);
console.log(result);