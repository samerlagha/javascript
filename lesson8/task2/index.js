const concatProps = obj =>{

    let arr =[];

    for(let i in obj){
        arr.push(obj[i]);
    }
    return arr;
}