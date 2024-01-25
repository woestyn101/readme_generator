import * as fs from'fs';

// writints answers to readme file

// writing title and description answers to file

export function writeFirst(data, callback){
     
    fs.writeFile('./README.md',
    "\n\n" + "# " + data.title + "\n\n" +
    "## Description " + "\n\n" +
     data.motivation + "\n" +   
     data.build + "\n" + 
     data.solve + "\n" + 
     data.learn + "\n\n" +
     "## Table of Contents: " + "\n\n" +
     "[Installation](#Installation)" + "\n" + 
     "[Video Link](#video)" + "\n" + 
     "[Usage](#usage)" + "\n" + 
     "[Credits](#credits)" + "\n" +       
     "[License](#license)" + "\n" +
     "[Questions](#questions)" + "\n\n",  () => {
        //console.log("file was written");
        callback();   
       
       
    });

   
        
}

// append to readme file function
export function appendToFile(contentString){
  
    fs.appendFile('./README.md', contentString, function (err) {
        if (err) throw err;
        // add next function
       
          
      
      });

}

// append usage answer to readme file with callback

export function appendUsagetofile(mystring, callback){
  
    fs.appendFile('./README.md', "\n" + mystring, function (err) {
        if (err) throw err;
        // calling next function
         callback();
      
      });

}