function truthTable(n){
    var m=n
    var n=Math.pow(2,n)
    for(var i=0;i<n;i++){
        console.log(i.toString(2).padStart(m, "0"));
    }
}
console.log(truthTable(4));