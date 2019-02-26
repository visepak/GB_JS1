// Домашнее задание №5

var $table = document.createElement("table");
$table.id = 'table1';
document.body.insertBefore($table, document.body.firstChild);
var leters = ' ABCDEFGH ';
var table = document.getElementById('table1');

for( var i = 0; i < 10; i++) {
	let $tr = document.createElement("tr");
		$tr.id = i;
		table.insertBefore($tr, table.firstChild);
	if (i === 0 || i === 9) {
		for( var k = 0; k < 10; k++) {
			let $td = document.createElement("td");
			$td.textContent = leters[k];
			let tr = document.getElementById(i);
			tr.appendChild($td);
		}
	}
	if (i === 1 || i === 3 || i === 5 || i === 7) {
		let $td1 = document.createElement("td");
		let $td2 = document.createElement("td");
			$td1.textContent = i;
			$td2.textContent = i;
			let tr = document.getElementById(i);
			tr.appendChild($td1);
			tr.appendChild($td2);				
		for( var k = 0; k < 4; k++) {
			let $td1 = document.createElement("td");
			$td1.className = 'white';
			tr.insertBefore($td1, tr.children[1]);
			let $td2 = document.createElement("td");
			$td2.className = 'black';
			tr.insertBefore($td2, tr.children[1]);
		}
		
	}	
	if (i === 2 || i === 4 || i === 6 || i === 8) {
		let $td1 = document.createElement("td");
		let $td2 = document.createElement("td");
			$td1.textContent = i;
			$td2.textContent = i;
			let tr = document.getElementById(i);
			tr.appendChild($td1);
			tr.appendChild($td2);
		for( var k = 0; k < 4; k++) {
			let $td1 = document.createElement("td");
			$td1.className = 'black';
			tr.insertBefore($td1, tr.children[1]);
			let $td2 = document.createElement("td");
			$td2.className = 'white';
			tr.insertBefore($td2, tr.children[1]);
		}
	}
}	