let myString = `hi hi hi hello hello hello ram ram ram shyam ram shyam ram ram ram shyam`;

let stringArray = myString.split(' ');

console.log(stringArray);

let myObj = {}

for (let i=0; i<stringArray.length; i++){
    if (stringArray[i] === 'hi'){
        myObj['hi'] = 3;
        
    } else if (stringArray[i] === 'hello'){
        myObj['hello'] = 3;
        
    } else if (stringArray[i] === 'ram'){
        myObj['ram'] = 7;
       
    } else if (stringArray[i] === 'shyam'){
        myObj['shyam'] = 3;
       
    }
}

console.log(myObj);