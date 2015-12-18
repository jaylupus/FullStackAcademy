var arr = process.argv;
var sum = 0;
for (var i = arr.length - 1; i > 1; i--) {
	sum += parseInt(arr[i]);
};
console.log(sum);