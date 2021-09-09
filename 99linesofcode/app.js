let friend = ["Dillan", "Shelby", "Matt", "Alexis", "Jerry"];

function singLinesOfCode() {

   
    let friend = ["Dillan", "Shelby", "Matt", "Alexis", "Jerry"]
    for (let i = 0; i < friend.length; i++) {
        console.log(friend[i]);
    }
    let i;
    for (i = 99; i > 0; i -= 1) {

        if (i == 1) {

            console.log(i + " line of code in the file, " + i + " line of code; John strikes one out, clears it all out, " + (i - 1) + " lines of code in the file")

        } else if (i == 2) {

            console.log(i + " lines of code in the file, " + i + " lines of code; John strikes one out, clears it all out, " + (i - 1) + " line of code in the file")

        } else {

            console.log(i + " lines of code in the file, " + i + " lines of code; John strikes one out, clears it all out, " + (i - 1) + " lines of code in the file")

        }

    }

}

function singLinesOfCode()