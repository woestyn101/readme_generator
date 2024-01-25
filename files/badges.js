import * as fs from'fs';

// function to set badge variables

export function getLicense(mydata, callback) {

    // setting badge variables

    var apacheBadge = "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";

    var gnuPublicBadge = "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";

    var mitBadge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"

    var mozillaBadge = "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)";

    var boostBadge = "![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)";

    //check which license has been selected

    if (mydata.license === "Apache License 2.0"){
           addBadge(apacheBadge, function() {
           callback();
           });
    }else if (mydata.license === "GNU General Public License v3.0"){
   
           addBadge(gnuPublicBadge, function() {
            callback();
           });
    }
    else if (mydata.license === "MIT License"){
           addBadge(mitBadge, function() {
            callback();
           });
        }
    else if (mydata.license === "Mozilla Public License 2.0"){
            addBadge(mozillaBadge, function() {
                callback();
               });
            }
    else{
            addBadge(boostBadge, function() {
                callback();
               });
    }

      
     
  }

  // adding a badge to the top of the page  

  function addBadge(badge1, callback){
    fs.readFile('./README.md', 'utf8', (err, data1) => {
        if (err) {
          throw err;
        }
      
        // Combine the new text with the existing content
        const badgeAdded = badge1 + data1;
      
        // Write the updated content back to the file
        fs.writeFile('./README.md', badgeAdded, 'utf8', (err) => {
          if (err) {
            throw err;
          }
         // console.log('Badge added to the beginning of the file.');
        });
      });

      callback();
}


