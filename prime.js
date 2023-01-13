let num = 43;
let flag = false;

    for(i = 2; i <= num/2; i++) {
        if(num % i == 0) {
            
            flag = true;
            break;
            
        }
    }
    (!flag) ?console.log("Yes"):console.log("No");
    