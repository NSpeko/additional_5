module.exports = function check(str, bracketsConfig) {
  // your solution
    let conf='([{|';
    let configArr=[];
    for(let i=0;i<bracketsConfig.length;i++){
        if(conf.includes(bracketsConfig[i][0])){
            configArr.push(new RegExp('\\'+bracketsConfig[i][0]+'\\'+bracketsConfig[i][1]));//bracketsConfig[i][0]+bracketsConfig[i][1]);
        }
        else{
            configArr.push(new RegExp(bracketsConfig[i][0]+bracketsConfig[i][1]));
        }
    }
    while(str!==''){
        let tempStrChecker=str;
        for(let i=0;i<configArr.length;i++){
            str=str.replace(configArr[i],'');
        }
        if(tempStrChecker===str)break;
    }
    return str === '';
}
