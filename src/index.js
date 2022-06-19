const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is your name?', (name) => {
    rl.question('Where do you live?', (country) => {
        console.log(`${name}, is a citizen of ${country}`);
    })
});

rl.on('close', () => {
    console.log('\nBYE BYE!');
    process.exit(0);
})

