// callback --> callback hell -> promise (fetch)--> promise chaining --> asyn await

// add(a,b){
//     return 3+5
// }

// add(3,5)


// order place
// cooking
// order serve


function OrderPlace(){
    new Promise((resolve)=>{
        console.log("placing new order...")
        setTimeout(()=>{
            console.log("order placed...")
            resolve()
        },3000)

    })
  
}

function cooking(){
    new Promise((resolve)=>{
           console.log("Cooking Started...")
    setTimeout(()=>{
        console.log("Cooking completed...")
        resolve();
    },4000)
    })
  

}

function orderServe(){
      console.log("Serving...")
    setTimeout(()=>{
        console.log("Order Served...")

    },2000)
}



// OrderPlace(
//     ()=>{
//     cooking(()=>{
//         orderServe(()=>{
//             console.log("custmer happy")
//         });
//     })
// }
// )


// OrderPlace(cooking(orderServe))

const final = ()=>{
        console.log("customer happy...")
    }


OrderPlace()
    .then(cooking)
    .then(orderServe)
    .then(final)
    .catch(()=>{})