function LetterChanges(str) { 

  var letters = "abcdefghijklmnopqrstuvwxyz  "
      var newArray = [];
  
  for (var i = 0; i < str.length; i++){
  
    if(letters.indexOf(str[i]) == -1){
         newArray.push(str[i]);
      
      } else {
         
    var letr = letters[letters.indexOf(str[i])+1];
         
    if (letr == "a" | letr == "e" | letr == "i" | letr == "o"| letr == "u"){

       newArray.push(letr.toUpperCase());
      
        } else {
          
          
       newArray.push(letr);
        }
        
      } 
