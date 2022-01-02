const f1 = (cb) => {cb(1)};
const f2 = (a, cb) => {cb(a)};
const f3 = (a, b, cb) => {setTimeout(() => cb([a, b]), 1000)};

async function bulkRun(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push( await new Promise( (resolve, reject) => arr[i][0](...arr[i][1], resolve) ) );
    }

    return result;
}

bulkRun(
    [
        [f1, []],
        [f2, [2]],
        [f3, [3, 4]]
    ]
).then(console.log);