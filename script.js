//part1
for(let i = 1; i <= 100; i++){

    if(i % 3 === 0 && i % 5 ===0){
        console.log("fizzbuzz")
       
      
    }
    else if(i % 3 ===0 && i % 5 !==0){
        console.log("fizz")
      
    }
    else if(i % 5 ===0 && i % 3 !==0){
        console.log("buzz")

    }else{
        console.log(i)
    }
   
    }

//part2 not right

// let n = 1;

// while(n < 100){
//     if(n % 2 ===0){
//         n++
//         continue
//     }
    
//     else if(n % 3 ===0){
//         n++
//         continue
//     }
//     n++
//     console.log(n)
    
// }


