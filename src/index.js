module.exports = function check(str, bracketsConfig) {
  // your solution
    
    console.log(str);
    str=str.replace(/\(\)/,'').replace(/\(\)/,'').replace(/\(\)/,'').replace(/\(\)/,'');
    if(str===''){
        return true;
    }
    else return false;
}
