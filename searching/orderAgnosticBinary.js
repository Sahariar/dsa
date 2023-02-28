const ascArr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140];
const dsecArr = [140, 130, 120, 110, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10];

const target = 90;

function orderAgnosticBinary(arr, target) {
	let start = 0;
	let end = arr.length - 1;

	const isAsc = arr[start] < arr[end];

	while (start <= end) {
		let mid = Math.floor((start + end) / 2);
		if (isAsc) {
			if (arr[mid] === target) {
				return `${target} found at ${mid} index In array`;
			} else if (arr[mid] < target) {
				start = mid + 1;
			}else{
                end = mid -1
            }
		} else{
            if (arr[mid] === target) {
				return `${target} found at ${mid} index In array`;
			} else if (arr[mid] < target) {
                end = mid -1
			}else{
                start = mid + 1; 
            } 
        }
	}
}

console.log(orderAgnosticBinary(dsecArr , target));
