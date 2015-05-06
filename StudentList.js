var students = [
	{
		name: 'George',
		age: 26,
		arms: 2
	},
	{
		name: 'Mike',
		age: 36,
		arms: 9000,
		hobbies: 'genocide'
	},
	{
		name: 'Andrew',
		age: 30,
		hobbies: 'Stuff'
	},
	{
		name: 'Honkey',
		age: 'Timeless',
		arms: 'Very long'
	}
]

students.forEach(function(students) {
	if (students.hobbies === undefined) {
		return console.log("You need some damn hobbies!", students.name, students.age)
	} else {
	console.log(students.name, students.age);
	}
});
