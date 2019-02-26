function nonUniqueElements(data) {
    var data1 = [];
    for(var i = 0; i < data.length; i++) {
       var count = 0;
       for( var j = 0; j < data.length; j++) {
        if (data[i] === data[j]) {
         count++;   
        }
       }
       if (count > 1) {
        data1.push(data[i]);   
       }
    }
    return data1;
}
console.log(nonUniqueElements([1, 2, 3, 1, 3]));    
