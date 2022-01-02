function findNumber(arr) {
    let numbers = arr.reduce( (prevValue, item) => [...prevValue, ...item], []);

    let min_number = Math.min(...numbers);

    return arr.map( item => item.map( item => item % 2 ? item * min_number : item));
}

console.log(findNumber([
    [5, 3, 6],
    [7, 11, 2],
    [15, 9, 4]
]));