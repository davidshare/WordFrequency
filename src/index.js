/*
  the words function takes in a string and returns an object of the words and the frequency of the occurence of the words
*/
const words = (sentence)=>{
  
  //check if the supplied argument is actually a string
   if(typeof(sentence)!=='string' || sentence.trim()==='' ){
    return 'Please enter a String';
  }
  
  //initialize an object to hold the words and their frequency
  let wordsFrequency = {}
  
  //convert convert the string to lowerCase and split the string into an array of words
  let wordsArray = sentence.toLowerCase().split(" ");
  
  //loop through every word in the array and check if it is contained in the wordsFrequency object
  for(let i = 0; i<wordsArray.length; i++){
    
    //if the word is contained in the wordsFrequency object get the value and increment by 1
    if(wordsArray[i] in wordsFrequency){
      wordsFrequency[wordsArray[i]] +=1;
    }else{
      
      //if the word is not contained in the wordsFrequency object, 
      //push an item into the object where the key is the word and the value is 1
      wordsFrequency[wordsArray[i]] = 1;
    }
  }
  
  //return the object of words and their frequencies
  return wordsFrequency;
}

module.exports = words;