var missingNumber = function (nums) {
	let totalArrSum = 0;
	let arrTotalValueSum = 0;

	for (let i = 0; i <= nums.length; i++) {
		totalArrSum = totalArrSum + i;
	}
	for (let i = 0; i < nums.length; i++) {
		arrTotalValueSum = arrTotalValueSum + nums[i];
	}

	return totalArrSum - arrTotalValueSum;
};

console.log(missingNumber([4, 5, 3, 1, 0]));
