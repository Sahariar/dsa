// Binary Search or You can Say Divided and Coquer
const arrOfNum = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140 ]

const key = 110;

function binarySearch (arr , key) {
    let start = 0;
    let end = arr.length - 1;
    
 while (start <= end){
    // At each iteration, the function computes the middle index mid using the formula (start + end) / 
    // 2 and checks if the element at mid is equal to the target value key. If so, the function returns mid. If not, the function updates either 
    // the start or end index depending on whether the element at mid is less than or greater than key.
    let mid = Math.floor((start + end ) /2)
    if(arr[mid] === key){
        return `${key} found at ${mid} index In array`;
    }else if(arr[mid] < key ){
        start = mid + 1;
    } else{
        end = mid - 1;
    }
 }
//  The while loop continues until either the key is found 
// or start becomes greater than end. If the key is not found, the function returns 
 return `${key} Not found in Array` ;
}
// `70 found at 6 index In array`
console.log(binarySearch(arrOfNum , key));