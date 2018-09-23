// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // return statements according to specification
    if (currency <= 0){
        return {};
    }
    if (currency > 10000){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    let newCurr = currency;
    let change = {};
    let counter;
    let cents = ["H", "Q", "D", "N", "P"];
    let coin;
    let value;
    // iterate over possible coin values
    for (let i = 0; i < cents.length; i++){
        coin = cents[i];
        // assign corresponding coin value
        switch(coin){
            case "H":
                value = 50;
                break;
            case "Q":
                value = 25;
                break;
            case "D":
                value = 10;
                break;
            case "N":
                value = 5;
                break;
            case "P":
                value = 1;
        }
        counter = 0;
        // count maximum amount of coins in currency
        while (newCurr >= value){
            newCurr -= value;
            counter++;
        }
        // add current number of coins to change object
        if (counter > 0){
            change[coin] = counter;
        }
    }
    return change;
}