// https://github.com/Mahadi92/assignment-3-js-problem-solving


// Kilometer To Meter

function kilometerToMeter(kilo) {
    if (valitation(kilo)) { //valitation
        var meter = kilo * 1000; //logic
    } else {
        var meter = "Enter youer valid number !!! ";
    }
    return meter;
}


//Budget Calculator

function budgetCalculator(watch, phone, laptop) {
    var watchPrice = 50;
    var phonePrice = 100;
    var laptopPrice = 500;

    if (valitation(watch) && valitation(phone) && valitation(laptop)) { //valitation

        var total = (watch * watchPrice) + (phone * phonePrice) + (laptop * laptopPrice); //logic

    } else {
        total = "Enter your valid Price !!! ";
    }
    return total;
}


//Hotel room cost function

function hotelCost(day) {
    var cost = "";

    if (valitation(day)) { //valitation

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

    for (var i = 0; i < friends.length; i++) { //loop

        var nameChar = friends[i];

        if (friends[i].length > maxName.length) { //logic
            maxName = nameChar;
        }
    }
    return maxName;
}

//Valitation  function

function valitation(condition) {
    if (condition > 0 && typeof (condition) == 'number') {
        return true;
    } else {
        return false;
    }
}