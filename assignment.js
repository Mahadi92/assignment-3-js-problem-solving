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
console.log(result);