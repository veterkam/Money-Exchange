// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Return an object containing the minimum number of coins needed to make change
    if(currency <= 0) {
        return {};
    }
    if(currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }

    let coins = new Map ([
        ['H', 50],
        ['Q', 25],
        ['D', 10],
        ['N', 5],
        ['P', 1]
    ]);

    let result = {};
    for (let coin of coins.keys()) {
        let nominal = coins.get(coin);
        let count = Math.floor(currency / nominal);        
        
        if(count > 0) {
            result[coin] = count;
            currency -= nominal * count;
        }        
    }

    return result;
}
