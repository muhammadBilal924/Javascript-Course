let z = 10;
function f(){
     let b = 13;
    if(true){
        // it prints 9
        console.log(b);
    }
    // it gives error as it
   // defines in if block 
    console.log(b);
}
f()

// it prints 10
console.log(z)