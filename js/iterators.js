

// let arr = [1,2,3,4,5,6,7,8];


// const newarr=arr.map((value,index,array)=>{

//     console.log(array)
//     if(index%2==0){
//         return value*2
//     }
//     return value *100
// })

// const newarr1=arr.map(v=>{return v*2})

// console.log(arr)
// console.log(newarr)


//maping
// col 1    col 2\
// 1            7
// 2              8
// 6               9
// 3               10
// 4               11


// filter

// let marks = [20,30,55,70,90,87,50,44];

// let filtermarks =[];

// for(let i =0; i<marks.length;i++){
//     if(marks[i]>50){
//         filtermarks.push(marks[i]);
//     }
// }


// let filtermarks = marks.filter((value, index, arr)=>{
//     return value<50
// })

// let filtermarks = marks.filter(v=>v%2==0)

// console.log(filtermarks);
// console.log(marks);



let marks = [20,30,55,70,90,87,50,44];


// const totalmarks = marks.reduce((prevValue,currValue)=>{
//     return prevValue+currValue

// },0)
// console.log(totalmarks);

const totalmarks1 = marks.reduce((p,c)=>p+c,0)
console.log(totalmarks1);







// let total=0;

// for (let index = 0; index < marks.length; index++) {
//     console.log(total);
        // total=0;
//     total = total+ marks[index]
// }