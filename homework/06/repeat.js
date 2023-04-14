function repeat(f, n){
    var v=[]
    for(let i=0 ; i<10 ; i++){
        v.push(f());
    }
    return v;
}

console.log(repeat(Math.random, 10));