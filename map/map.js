module.exports = {
    map : function(array,callback){
        var empty = [];
        array.forEach(function(x) {empty.push(callback(x))});
        return empty;
    }
}
