function solution(relation) {
	var uniqueCount = [];
	var i 			= 0;

	for( i; i < relation.length; i++ ){
		uniqueCount[i] = relation[i][1];
	}

	var count 		= [];
	uniqueCount.forEach(
		function(index,val) { 
			count[index] = (count[index]||0) + 1;
		
		},
	);

	var total = 0; 
	Object.keys(count).map(
		function(item,val) {
			if(count[item] > 1){
				total +=count[item];

			}
		}
	);

	return total;
}

var relation = [["100","ryan","music","2"],["200","apeach","math","2"],["300","tube","computer","3"],["400","con","computer","4"],["500","muzi","music","3"],["600","apeach","music","2"]];
console.log(solution(relation));
