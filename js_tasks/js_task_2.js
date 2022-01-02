function* chunkArray(arr, quantity) {
    for(let i = 0; i < arr.length;) {
        i += quantity;
        yield arr.slice(i - quantity, i);
    }
}

let generator = chunkArray([1,2,3,4,5,6,7,8], 3);

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());