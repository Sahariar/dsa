// Here is Name of Student In a School
const arrOfStudents = ["Adam", "Alex", "Andrew", "Anthony", "Benjamin", "Bradley", "Brandon", "Brian", "Charles", "Christopher", "Daniel"];

// Setting a target To find our Student is Available in our Array.

const findStudent = "Nomru";

// Write a Function for check all name and
// find out if our Target name is available and Output that in console
// OR if not available then output not found on the  Array.
function linerSearch(arr, target) {
	// we are checking all array name with For Loop
	for (let i = 0; i < arr.length; i++) {
		// checking if target name is on the array or not.
		if (target === arr[i]) {
			// if name found on array then output found with index number.
			return `${target} Found at ${i} Index of Array`;
		}
	}
	// if name not found on array output Not found.
	return `${target} Not Found in Array`;
}
// calling the function with arrOfStudents and findStudent name.
console.log(linerSearch(arrOfStudents, findStudent));
