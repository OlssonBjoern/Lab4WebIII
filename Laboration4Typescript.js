var fs = require('fs');
var FilePublisher = /** @class */ (function () {
    function FilePublisher(name) {
        this.filename = name;
    }
    FilePublisher.prototype.showFile = function () {
        fs.readFile(this.filename, 'utf8', function (err, data) {
            if (err)
                throw err;
            var reg = /\n| /; // Strip of all new lines and blanks
            var clean = data.split(reg);
            var count = {};
            for (var _i = 0, clean_1 = clean; _i < clean_1.length; _i++) {
                var i = clean_1[_i];
                count[i] = (count[i] || 0) + 1;
                var sorted = []; // Declare a new array
                for (var key in count)
                    sorted.push([key, count[key]]); // Create a new array for use - sorted[word] = count;
                sorted.sort(function (a, b) { return a[1] - b[1]; }); // Sort the array based on the second element (count)
                sorted.reverse(); // Reverse the result array}
            }
            console.log(sorted.slice(0, 11)); // Print all data to the console
        });
    };
    return FilePublisher;
}());
var obj = new FilePublisher("hitch.txt");
obj.showFile();
