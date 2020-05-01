function solution(record) {
	var answer 	= [];
	var dict1 	= [];

	var i;
	for (i = 0; i < record.length; ++i) {
		var r_split = record[i].split(" ");
		if(r_split[0] == 'Enter' || r_split[0] == 'Change'){
			dict1[r_split[1]] = r_split[2];
		}
		
	}

	for (i = 0; i < record.length; ++i) {
		var r_split = record[i].split(" ");

		if(r_split[0] == 'Enter'){
			answer[i] = dict1[r_split[1]] + ' come in.';
		}
		if(r_split[0] == 'Leave'){
			answer[i] = dict1[r_split[1]] + ' has left.';
		}
		
	}

	return answer;
}

var record 	= ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"];
console.log(solution(record));
