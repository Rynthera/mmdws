// node index <rock, paper, or scissors>
const {basename, relative} = require('node:path');


function pickOne(arr)
{
    const choice = Math.floor(Math.random() * arr.length)
    return arr[choice];
}


const beatenBy = 
{
    "rock":"paper",
    "paper":"scissors",
    "scissors":"rock",
};



// output
function whoWon(userChoices, computerChoice)
{
    if (userChoices === computerChoice) {
        return "It's a tie!";
    }
    if (beatenBy[userChoices] === computerChoice) {
        return "You lose :(";
    }
    if (beatenBy[computerChoice] === userChoices) {
        return "You win! :)"
    }
    // theoretically should never get here
    throw new Error("dnkHuh???")
}



function cleanUp(str) 
{
    if (typeof str === "string" && str.length > 0) {
        return str.trim().toLowerCase();
    }
    return null;
}



function main() 
{
    const choices = Object.keys(beatenBy)

    
    const userChoices = cleanUp(process.argv[2]);
    if (Object.hasOwnProperty.call(beatenBy,userChoices)) 
    {
    console.log(`User Chose "${userChoices}"`);
    console.log(`Computer Chose "${computerChoice}"`);
    console.log(whoWon(userChoices,computerChoice));
    const computerChoice = pickOne(Object.keys(beatenBy))
    } else {
        console.log(`Error: "${
            process.argv[2]
        }" is not a valid choice. Usage: ${
            basename(process.argv[0])
        } ${
            relative(process.cwd(), process.argv[1])
        } {${
            choices.join("|")
        }}`);
    }
}

    


    


main()