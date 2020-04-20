const studentList = ['Tim', 'Ben', 'Justin'];
for (let i = 0; i < 3; i++){
    const name = prompt('Please enter a name');
    studentList.push(name);
}

for (let i = 0; i < studentList.length; i++){
    console.log(studentList[i]);
}