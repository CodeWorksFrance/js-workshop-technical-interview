const appDialog = require('./app_dialog');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('close', () => {
    rl.write('\nBYE BYE!');
    process.exit(0);
});

const main = (rl) => {
    appDialog(rl);
}

main(rl);

const onErr = (err) => {
    console.log(err);
    return 1;
}
