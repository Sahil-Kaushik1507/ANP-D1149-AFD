const promise = new Promise(function (resolve,reject){

let err= false;

if(err){

    reject("some err")

}else{
    setTimeout(()=>{
        console.log("hiii")
        resolve(5)
    },10000)

}
})


promise
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))