//Laboration 4 - Webbutveckling III
//Av: Björn Olsson, credit: Mikael Hasselmalm som gjort grundkoden som sedan lagts in i en klass.

declare function require(name:string); // Make it possible to use require in TypeScript
var fs = require('fs');

class FilePublisher {

    filename :string;

    constructor(name: string) {
        this.filename = name;
    }

    showFile(): void {

        fs.readFile(this.filename, 'utf8', function(err, data) { // Read all of the file content 
            if (err) throw err;

            let reg:RegExp = /\n| /; // Strip of all new lines and blanks
            let clean = data.split(reg);

            let count = {};
                for(let i of clean){
                    count[i] = (count[i]||0) + 1;
                    var sorted = []; // Declare a new array
                    for (let key in count) sorted.push([key, count[key]]); // Create a new array for use - sorted[word] = count;
                    sorted.sort(function (a, b) { return a[1] - b[1] }); // Sort the array based on the second element (count)
                    sorted.reverse(); // Reverse the result array}
                }
            console.log(sorted.slice(0, 11)); // Print all data to the console
            });
    }
}

let obj = new FilePublisher("hitch.txt");
obj.showFile();