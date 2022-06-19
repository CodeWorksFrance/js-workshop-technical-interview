const appDialog = (rl) => {

    rl.question('What is your name?\n', (name) => {
        rl.question('Where do you live?\n', (country) => {
            rl.write(`${name}, is a citizen of ${country}\n`);
        })
    });

}

module.exports = appDialog;
