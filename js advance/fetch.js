
async function fetchData(){

try {
    let res= await fetch('https://jsonplaceholder.typicode.com/todos/1')

let res2 = await res.json()
console.log(res2);
    
} catch (error) {
    
}  



    //   .then(response => response.json())
    //   .then(json => console.log(json))
    //     .catch()

}


fetchData();
