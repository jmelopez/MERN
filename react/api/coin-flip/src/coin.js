function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
};

function fiveHeads() {
return new Promise ( (resolve, reject ) => {
    let headsCount = 0
    let attempts = 0;
    while(headsCount < 5) {
    attempts++;
    let result = tossCoin();
    console.log(`${result} was flipped.`);
    if(result === "heads") {
        headsCount++
    } else {
        headsCount = 0;
    }
    }
    if(headsCount === 5) {
    resolve(`It took ${attempts} attempts to flip heads 5 times.`);
    } else if(attempts > 100) {
    reject("This took too many attempts. Game Over")
    }
});
}

fiveHeads()
    .then( res => console.log(res))
    .catch( err => console.log(err));
    console.log('When does this run?')

console.log( fiveHeads())