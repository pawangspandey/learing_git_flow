module.exports = function(){
    var result = 1;
    var args = arguments;
    for(var i = 0 ;i < args.length ;i++){
        result = result * args[i];
    }
    return result;
}