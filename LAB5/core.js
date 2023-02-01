const asyncAdd = async (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return Promise.reject('Argumenty muszą mieć typ number!')
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 100)
    })
}

function numberGenerator(number) {
    let results = [];
    for (let i = 0; i < number; i++) {
        results.push(Math.round(Math.random() * (100)));
    }
    return results;
}

async function countSum(numbers) {
    let result = 0;
    let asyncOperations = 0;
    for (let num of numbers) {
        result = await asyncAdd(result, num);
        asyncOperations += 1;
    }
    console.log(`Sum: ${result}`);
    console.log(`Number of operations: ${asyncOperations}`);
    return result;
}

async function countSumFaster(numbers) {
    let lists = [];
    let promises = [];
    for (let i = 0; i < numbers.length; i += 10) {
        lists.push(numbers.slice(i, i + 10));
    }
    for (let i = 0; i < lists.length; i++) {
        promises.push(countSum(lists[i]));
    }
    return countSum(await Promise.all(promises));
}

async function getCountSumPerformanceTime(numbers) {
    const t0 = performance.now();
    await countSum(numbers);
    const t1 = performance.now();
    console.log(`Time 1: ${t1 - t0}`);
}

async function getCountSumFasterPerformanceTime(numbers) {
    const t0 = performance.now();
    await countSumFaster(numbers);
    const t1 = performance.now();
    console.log(`Time 2: ${t1 - t0}`);
}

//================================================
numbers = numberGenerator(100);

getCountSumPerformanceTime(numbers);
getCountSumFasterPerformanceTime(numbers);

