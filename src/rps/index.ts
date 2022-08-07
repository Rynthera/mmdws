// node index <rock, paper, or scissors>
import { basename, relative } from 'node:path';

enum RPS {
    ROCK = "rock",
    PAPER = "paper",
    SCISSORS = "scissors",
    LIZARD = "lizard",
    SPOCK = "spock",
   
}

// computer choosing what to use.
function pickOne(arr: RPS[]): RPS
{
    const choice = Math.floor(Math.random() * arr.length)
    return arr[choice];
}


const beatenBy:  
{
[K in RPS]: Set<RPS>
} = {
    [RPS.ROCK]: new Set([RPS.PAPER, RPS.SPOCK]),
    [RPS.PAPER]: new Set([RPS.SCISSORS, RPS.LIZARD]),
    [RPS.SCISSORS]: new Set([RPS.ROCK, RPS.SPOCK]),
    [RPS.LIZARD]: new Set([RPS.ROCK,RPS.SCISSORS]),
    [RPS.SPOCK]: new Set([RPS.LIZARD,RPS.PAPER])
};



// output
function whoWon(userChoices: RPS, computerChoice: RPS): string
{
    if (userChoices === computerChoice) {
        return "It's a tie!";
    }
    if (beatenBy[userChoices].has(computerChoice)) {
        return "You lose :(";
    }
    if (beatenBy[computerChoice].has(userChoices)) {
        return "You win! :)"
    }
    // theoretically should never get here
    throw new Error("dnkHuh???")
}



function cleanUp(str: string): RPS | null  
{
    if (typeof str !== "string")  {
        return null
    }
    const clean: string = str.trim().toLowerCase();
    if (!Object.hasOwnProperty.call(beatenBy, clean)) {
        return null;
    }
    return clean as RPS
}



function main() 
{
    const choices = Object.keys(beatenBy) as RPS[];

    
    const userChoices = cleanUp(process.argv[2]);
    
    if (Object.hasOwnProperty.call(beatenBy, userChoices)) 
    {
    const computerChoice = pickOne(choices);
    const result = whoWon(userChoices, computerChoice);
    console.log(`User Chose "${userChoices}"`);
    console.log(`Computer Chose "${computerChoice}"`);
    console.log("Result: ", result);
    
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