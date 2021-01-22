// Kilometer To Meter

function kilometerToMeter(kilo) {
    if (valitation(kilo)) {
        var meter = kilo * 1000;
    } else {
        var meter = "Enter youer valid number !!! ";
    }
    return meter;
}
console.log(kilometerToMeter(3))


//Budget Calculator

function budgetCalculator(watch, phone, laptop) {
    var watchPrice = 50;
    var phonePrice = 100;
    var laptopPrice = 500;

    if (valitation(watch) && valitation(phone) && valitation(laptop)) {
        var total = (watch * watchPrice) + (phone * phonePrice) + (laptop * laptopPrice);
    } else {
        total = "Enter your valid Price !!! ";
    }
    return total;
}
console.log(budgetCalculator(5, 'd', 2));

//Hotel room cost function

function hotelCost(day) {
    var cost = "";

    if (valitation(day)) {

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
    } else {
        cost = "Enter your valid cost";
    }
    return cost;
}



// Mega Friend function

function megaFriend(friends) {
    var maxName = friends[0];
    for (var i = 0; i < friends.length; i++) {
        var nameChar = friends[i];

        if (friends[i].length > maxName.length) {
            maxName = nameChar;
        }
    }
    return maxName;
}
// var result = megaFriend(['madi', 'aminulIslam', 'nam', 'mahin', 'zahidCowd'])
// console.log(result);

//Valitation  function

function valitation(condition) {
    if (condition > 0 && typeof (condition) == 'number') {
        return true;
    } else {
        return false;
    }
}