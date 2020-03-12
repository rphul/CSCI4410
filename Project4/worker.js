addEventListener('message', received);

function received (e){
	var val;
	var val2;
	var i;
	var n;
	var r;
	val = parseInt(e.data[0]);
	val2 = parseInt(e.data[1]);
	var count = 0;
	var j = val;
	var count1 = 0;
	
	for (; j <= val2; j++){
		count1 = 0;
		for (var i = 2; i < j; i++){
			if ((j % i) == 0){
				count1+=1;}}
		if (count1 == 0){
			count+=1;}
	}
	
	postMessage(count);
	close();
}
