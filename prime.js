let num = 32;
let count = 0;

    for(i = 1; i <= num; i++) {
        if(num % i == 0) {
            
            count++;
            
        }
    }

    (count == 2) ? console.log("Yes"):console.log("No"); 

