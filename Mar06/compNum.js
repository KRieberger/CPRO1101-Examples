// A compare function to be used with numeric arrays.
// Sample
// let arr = [3, 15, 1];
// arr.sort(); // [1, 15, 3]
// arr.sort(compNum); // [1, 3, 15]

function compNum(a, b) {
    if (a > b) {
        return 1;
    } else if (a == b) {
        return 0;
    } else if (a < b) {
        return -1;
    }

}
