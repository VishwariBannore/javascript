//console.log("Welcome");
console.log("Methods of String....");
        // define a string
        let name = "Vishwari";

        // str.length() - Can find the length of the string
        console.log("Length of the string is : "+name.length);

        // indexof() - returns the index of (position of) the first occurance on specific text. If not found retuns -1
        console.log("Index of h in name string is :: " +name.indexOf("h"));
        console.log("Index of b in name string is :: " +name.indexOf("b"));
        console.log("Index of i in name string is :: " +name.indexOf("i"));
        // if second parameter is specified then will search text form that position
        console.log("Index of i in name string is :: " +name.indexOf("i",3));
        
        // lastIndexOf() - returns the index of (position of) the Last occurance on specific text. If not found retuns -1
        console.log("Last index of i in "+name+" is "+name.lastIndexOf("i"));

        let welcomeMsg = "Welcome to javascript tutorials";
        console.log(welcomeMsg);
        // search() - searches a string for a specified value and returns the position of the match and it cannot take a second start position argument
        console.log("position of java in welcomeMsg :: " +welcomeMsg.search("java"));

        // String extraction methods - slice, substring, substr
        // slice(start, end) - extracts a part of a string and returns the extracted part in a new string.
        console.log("Extracted string from 8-15 position :: "+welcomeMsg.slice(8,15));
        //If a parameter is negative, the position is counted from the end of the string.
        console.log("Extracted string from -15-8 position :: "+welcomeMsg.slice(-15,-8));
        //If you omit the second parameter, the method will slice out the rest of the string
        console.log("Extracted string from 15 position :: "+welcomeMsg.slice(15));

        //substring(start, end) - similar to slice but cannot accept negative parameter
        console.log("Extracted string from 15-18 position :: "+welcomeMsg.substring(15,18));

        //substr() - the second parameter specifies the length of the extracted part
        console.log("Extracted string from 15 position :: "+welcomeMsg.substr(15,6));
        //If the first parameter is negative, the position counts from the end of the string
        console.log("Extracted string from -5 position :: "+welcomeMsg.substr(-5));

        //replace() method replaces a specified value with another value in a string
        //By default, the replace() method replaces only the first match and is case sensative
        console.log("Replace tutorials as batch :: "+welcomeMsg.replace("tutorials","batch"));

        // toUpperCase() - A string is converted to upper case
        console.log(welcomeMsg.toUpperCase());

        //toLowerCase() - A string is converted to lower case
        console.log(welcomeMsg.toLowerCase());

        //concat() -  joins two or more strings
        console.log(welcomeMsg.concat(name));

        //The trim() method removes whitespace from both sides of a string
        let batch = "  batch  ";
        console.log(batch.trim());

        //split() - will return an array seperated by seperator
        console.log(welcomeMsg.split(" "));
        // If the separator is "", the returned array will be an array of single characters
        console.log(name.split(""));


        


