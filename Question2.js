function solution(N, users) {
	var Max 	= users.length;
	var answer 	= []; 
	var H 		= 0; 
	var PH 		= 0; 
	
	for(K = 0; K < N; K++) { 
		answer[K] = 0;
	}
			
	for(K = 0; K < Max; K++) { 
		if (users[K] !== N + 1) { 

			answer[users[K] - 1]++; 

			if (H < answer[users[K] - 1]){
				H = answer[users[K] - 1];        
				continue;
			} 
		}
		if (H === PH) {
			continue;
		}
			
		for(J = 0; J < N; J++) {
			answer[J] = PH = H;
		}
	}
	
	return answer;
}

var N = 5;
var users = [2,1,2,6,2,4,3,3];
console.log(solution(N, users));