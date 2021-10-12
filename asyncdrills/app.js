const logMessage = string => console.log(string);

// setTimeout(() => {
//     logMessage("Its been two seconds")
// }, 2000);

// logMessage("Hello!");

const getWords = () => {
    console.log("This logs right when the function is called");

    setTimeout(() => {
        console.log("Logged three seconds after function is called");

        setTimeout(() => {
            console.log("Logged five seconds after getWords is run");

            setTimeout(() => {
                console.log("The will log last")
            }, 1000);
        }, 2000);
    }, 3000);
}

// getWords();

const done = () => console.log("Job's done!");

const countdown = (num, callback) => {
    if (num == 0) {
        callback();
    } else {
        console.log(num)

        setTimeout(() => {
            countdown(num - 1, callback)
        }, 1000);
    }
}

// countdown(4, done);

let lunchTime = false;

const orderMeSomeFood = lunchTime => {
    return new Promise((resolve, reject) => {
        if (lunchTime) {
            resolve({
                lunch: "Pizza",
                drink: "Pizza"
            });
        } else {
            reject(new Error("It's not lunchtime!"))
        }
    })
}

orderMeSomeFood(true)
    .then(res => orderMeSomeFood(false))
    .then(res => orderMeSomeFood(true))
    .catch(err => console.error(err));