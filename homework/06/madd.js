function madd(a,b){
    
    var v=[[],[]]
    for(var i=0;i<a.length;i++){
        for(var j=0;j<b.length;j++){
            v[i][j]=a[i][j]+b[i][j];
        }
    }
    return v
}

var a=[[1,2], [3,4]]
var b=[[7,8], [1,2]]
console.log(madd(a,b));