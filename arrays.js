//this is loop create array with 20,1,19,2,18,3,….,11,10 values
var index = 20, arr = [], sub = 0;
for (var i=0; i < index; ++i){
	if(i%2){
		arr[i] = sub
	} else {
		arr[i] = index - sub++;;
	}
}


//find the value with maximum appiriance
var show = [], c = 10, r = 10, mat = [], maxNumber, maxShow = -1;
for(var j = 0; j < r ; ++j){
	mat[j] = [];
	for(var k = 0; k < c; ++k){
		mat[j][k] = Math.floor(Math.random()*100);
		if(show[mat[j][k]]){
			show[mat[j][k]]++;
		} else {
			show[mat[j][k]] = 1;
		}
	}
}
for(var x in show){
	if (show[x] > maxShow){
		maxNumber = x;
		maxShow = show[x];
	}
}