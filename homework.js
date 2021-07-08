// 1. Create a function called "remove" that takes an array and a potential
// member of the array, and returns a new array with that member removed.
// For example, `remove(['Cadence', 'Ordel', 'Marion'], 'Marion')` results
// in `['Cadence', 'Ordel']`.
//
// If the potential member is not in the array, return the array unchanged.
// If the potential member is in the array, remove all instances of it from the array.
function remove(list, member) {
    let output = [];
    for(let m of list)
        if(m != member)
            output.push(m);
    return output;
}

// 2. Revisit your "remove" function. Make sure that it does not change the original
// array but instead returns a new array.

// 3. Create a function called "sum" that takes an array of numbers and
// returns the sum of those numbers.
function sum(num) {
    let output = 0;
    for(let n of num)
        output += n;
    return output;
}

// 4. Create a function called "average" that takes an array of numbers
// and returns the average of those numbers.
function average(num) {
    let output = sum(num);
    if(output === 0)
        return;
    return (output / num.length);
}

// 5. Create a function called "minimum" that takes an array of numbers and
// returns the smallest number in that array.
function minimum(num) {
    if(num.length == 0)
        return;
    if(num.length == 1)
        return num[0];
    let output = num[0];
    for(let n of num)
        if(n < output)
            output = n;
    return output;
}

// 6. There are many techniques to sort arrays in programming. Your programming
// language will likely include the ability to do this. We are going to
// implement sorting ourselves, however.
//
// A "selection sort" is one of the most simple sorting algorithms. To implement it,
// you start with an unsorted array of numbers. You search the array and find the
// smallest number in the array. You then insert that into a new array as the first
// element and remove it from the original array. You continue doing this until
// there are no numbers left in the original array.
//
// Create a function called selectionSort that takes an array of numbers and returns
// a sorted array using the above technique.
//
// Note 1: You do not actually want to delete things from the original array. You
// should copy it first. To copy an array, use the following code:
//
// var arrayCopy = array.slice(0);
//
// Think about why this works.
//
// Note 2: Selection sort can be implemented using one array. Read the explanation at
// https://courses.cs.vt.edu/csonline/Algorithms/Lessons/SelectionSort/index.html
// to see how. This may make more sense to you.
function selectionSort(nums) {
    let temp = nums.slice(0);
    let output = [];
    while(temp.length > 0) {
        let n = minimum(temp);
        output.push(n);
        temp.splice(temp.indexOf(n), 1);
    }
    return output;
}

// 7. Create a function called `textList` that takes an array and joins its elements
// into a string separated by commas.
//
// For example, `textList(['Cadence', 'Ordel', 'Marion'])` results in the string
// `"Cadence,Ordel,Marion"`.
function textList(args) {
    if(args.length == 0)
        return "";
    let output = "";
    for(let obj of args)
        output += (obj + " ");
    output = output.trim();
    for(let x = 0; x < args.length; x++)
        output = output.replace(" ",",");
    return output;
}
