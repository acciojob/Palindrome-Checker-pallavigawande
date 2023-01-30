// complete the given function
function palindrome(str){
 var removeChar = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();

  /* reverse removeChar for comparison*/
  var checkPalindrome = removeChar.split('').reverse().join('');

  /* Check to see if str is a Palindrome*/
   if(removeChar === checkPalindrome){
     return true;
   }else{
     return false;
   }
}


module.exports = palindrome