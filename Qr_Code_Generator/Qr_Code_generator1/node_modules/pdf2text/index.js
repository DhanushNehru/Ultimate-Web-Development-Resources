var _ = require('lodash');
var Promise = require('bluebird');
var PDFParser = require('pdf3json');

//clear the pdf logger
require('util')._logN = function() { };

//given a path to a pdf
//turn it into a json structure
var PDF2Text = function(path, cb) {
    var parser = new PDFParser();

    parser.on('pdfParser_dataReady', function(result) {
        var pages = [];

        //get text on a particular page
        result.data.Pages.forEach(function(page) {
            var textArray = _(page.Texts).map('R').flatten().map('T').map(decodeURIComponent).value();
            pages.push(textArray);
        });

        parser.destroy();

        setImmediate(function() {
            cb(null, pages);
        })
    });

    parser.on('pdfParser_dataError', function(err) {
        parser.destroy();
        cb(err);
    });

    if (path instanceof Buffer) {
        return parser.parseBuffer(path);
    }

    parser.loadPDF(path);
};

module.exports = Promise.promisify(PDF2Text);