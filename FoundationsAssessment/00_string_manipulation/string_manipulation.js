function vowelsCount(str){
	str = str.toUpperCase();
	var vowels = ["A","E","I","O","U"];
	var count = 0;
	for (var i = 0; i < str.length; i++) {
		if (vowels.includes(str[i])){
			count++;
		}
	};
	return count;
}