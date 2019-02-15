function LetterChanges(str) { 

  var letters = "abcdefghijklmnopqrstuvwxyz  "
      var newArray = [];
  
  for (var i = 0; i < str.length; i++){
  
    if(letters.indexOf(str[i]) == -1){
         newArray.push(str[i]);
