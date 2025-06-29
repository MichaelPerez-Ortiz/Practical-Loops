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

//part2

function prime(num) {

    if (num <= 1) return false;
    if (num <= 3) return true;
    
    if (num % 2 === 0 || num % 3 === 0) return false;
    
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    
    return true;
}

function nextPrime(n) {

    let candidate = n + 1;

    while (true) {

        if (prime(candidate)) {
            console.log(candidate);
            break;
        }

        candidate++;

    }

}


nextPrime(4);  
nextPrime(5);  
nextPrime(9);  
nextPrime(11);

//part3
function parse(csv) {

    let rows = csv.split("\n");
    
    for (let row of rows) {
        let cells = row.split(",");
        
        console.log(cells[0], cells[1], cells[2], cells[3]);
    }
}


let data1 = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";
parse(data1);

let data2 = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";
parse(data2);
