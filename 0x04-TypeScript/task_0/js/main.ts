interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

let student1: Student = {
	firstName: "Prime",
	lastName: "Nwaka",
	age: 21,
	location: "Abuja"
};
let student2: Student = {
	firstName: "Precious",
	lastName: "Nduka",
	age: 22,
	location: "Zaria"
};
const studentList: Student[] = [student1, student2];
const table = document.createElement('table');
studentList.forEach(student => {
	const row = document.createElement('tr');
});
console.log(table);

