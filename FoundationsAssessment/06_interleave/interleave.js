// function interleaveHelper(arrPos, strPos){
// 	var toReturn = "";
// 	if (arrPos < this.length){
// 		var i = strPos;
// 		var j = arrPos;
// 		while (i < this[arrPos].length) {
// 			while (j < this.length) {
// 				if (i < this[j].length){
// 					toReturn += this[j][i];
// 				}
// 				j++;
// 			}
// 			j = arrPos;
// 			i++;
// 		}
// 		toReturn += interleaveHelper(arrPos + 1, i);
// 	}
// 	return toReturn;
// }

// function interleave(){
// 	return interleaveHelper.apply(arguments, [0, 0]);
// }

function interleave(){
	var toReturn = "";
	var i = 0;
	var j = 0;
	while (i < arguments[0].length) {
		while (j < arguments.length) {
			if (i < arguments[j].length){
				toReturn += arguments[j][i];
			}
			j++;
		}
		j = 0;
		i++;
	}
	return toReturn;
}