const inquirer = require("inquirer");
const Trainer = require('./lib/Trainer');
const Pokemon = require('./lib/Pokemon');
const { prompt } = require("inquirer");



const start = () => {
    inquirer.prompt([
        {
            type: 'list',
            choices: ['yes', 'no'],
            message: 'Would you like to go on a journey?',
            name: 'journey',
        },
        // {
        //     type: 'input',
        //     message: 'Great! What is your name, trainer?',
        //     name: 'name',
        // },
        // {
        //     type:'list',
        //     choices: ['add pokemon', 'get random pokemon'],
        //     message: 'Which would you like to do?',
        //     name: 'pokemon',
        // },
        // {
        //     type:'list',
        //     choices: ['keep going', 'quit'],
        //     message: 'do you want to keep going?',
        //     name: 'selection',
        // }
    // 
    ]).then(ans => {
        if(ans.journey === 'yes') {
            startJourney();
        } else {
            console.log('Sorry to hear that! Come back if you change your mind!');
        }
    //     if(ans.selection==='keep going'){
    //         keepGoing();
    //     }else {
    //         console.log("goodbye")
    //     }
    })
}

const startJourney = ()=> {
    console.log("Let's start your journey to become a Pokemon Master!");
    console.log('\n-------------\n')

    inquirer.prompt ([
        {
            type: 'input',
            message: 'Great! What is your name, trainer?',
            name: 'name',
        }
    ]).then((ans => {
        if(ans.name) {
            console.log(`Very good to meet you, ${ans.name}! I'm Professor Lewis! During your journey, you and I will be able to communicate through your Pokedex!`);
            console.log('\n-------------\n')
            
            // come back to this for edgecasing!
        // }else(ans.name === ''); {
        //     console.log("I didn't catch that, trainer. What is your name?");
        //     console.log('\n-------------\n');
        //     startJourney(prompt);
        }
    }))
    
}

// const yourTrainer = () => {
//     console.log("What a splendid name, ${ans.name}")
// }

// const keepGoing=()=>{
//     console.log("okay, let's keep going!")
//     start()
// }



start();