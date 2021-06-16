let myString = `hi hi hi hello hello hello ram ram ram shyam ram shyam ram ram ram shyam`;

let stringArray = myString.split(' ');

console.log(stringArray);

let myObj = {}

for (let i=0; i<stringArray.length; i++){
    if (!myObj[stringArray[i]]){
        
        myObj[stringArray[i]] = 0; 
    }
    
    
    myObj[stringArray[i]]++;
}

console.log(myObj);