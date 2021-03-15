module.exports = function check(str, bracketsConfig) {
  var merged = [].concat.apply([], bracketsConfig);
  var str_1 = merged.join('');
  var str_all = str + str_1;
  var openBrackets = ['(','{','['];
  var closeBrackets = [')','}',']'];
  var stack = [];
  var n = str_all.length;
  var count = 0;

  for (i=0;i<n;i++) {
      debugger;
      if (str_all[i]=='|') {
          count=count+1;
          if (count%2==1) {stack.push(str_all[i])}
          else {if (stack.length==0 || stack[stack.length-1]!='|') {return false}
              else {stack.pop();}
          }
      }
   if (openBrackets.indexOf(str_all[i])>-1) {
       
     stack.push(str_all[i])
   }
   else if (closeBrackets.indexOf(str_all[i])>-1) {
     if (stack.length==0 || stack[stack.length-1]!=openBrackets[closeBrackets.indexOf(str_all[i])]) {
       return false;
     }
     else {stack.pop();}
   }
    }
    return (stack.length==0)? true:false;
}
