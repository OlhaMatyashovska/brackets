module.exports = function check(str, bracketsConfig) {
  let check;
  let substring;
  while(true) {
     check = false;
     bracketsConfig.forEach(element => {
       substring = element.join("");
       if (str.includes(substring)) {
         str = str.replace(substring, "");
         check = true;
       }
     });
    if(!check) {break;}
  }
  return (str.length === 0) ? true : false;
}
