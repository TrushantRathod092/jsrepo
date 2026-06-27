// Immediately Invoked Function Expressions (IIFE)

(function chai(){ //named IIFE
    console.log(`DB Connected`);
})(); // semo-colon ';' is essential here or gives error for below operations
((name) => {
    console.log(`DB Connected Two, ${name}`);
})("Trushant"); // semo-colon ';' is essential here or gives error for below operations


(function aurCode() {
    console.log(`DB Connected Three`);
})(); // semo-colon ';' is essential here or gives error for below operations