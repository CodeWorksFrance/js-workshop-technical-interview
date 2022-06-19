const readline = require('readline');
const fs = require('fs');
const appDialog = require('../src/app_dialog');

describe('dialog', () => {
    it('should be findable', () => {
        expect(appDialog).not.toBe(undefined);
    });

    it('should be able to read from a source file and print to a target file', () => {
        var inputStream = fs.createReadStream('./test/data/sample_input.txt');
        var outputStream = fs.createWriteStream('./test/data/sample_output.txt');
        const rl = readline.createInterface({
            input: inputStream,
            output: outputStream
        });
        appDialog(rl);
        fs.readFile('./test/data/sample_output.txt', 'utf8', (err, data) => {
            if(err) {
                throw Error(err);
            }
            expect(data).toEqual('What is your name?\nWhere do you live?\n');
            // this expect here shows that readline can't write to output when output is not a tty
        });

    });

});
