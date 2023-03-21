var student1 = { name: "Florian", id: "1" };
var student2 = { name: "Matthias", id: "2" };
var students = [student1, student2];
console.log(students);
function update(students, id, name) {
    for (var i = 0; i < students.length; i++) {
        if (students[i].id == id) {
            students[i].name = name;
        }
    }
    return students;
}
console.log(update(students, "1", "Max"));
console.log(students);
console.log(student1);
function checkStudent(student) {
    if (student.id == "1") {
        return { id: "1", name: "Fritz" };
    }
    return student;
}
function replace(students, id, name) {
    return students.map(checkStudent);
}
console.log(replace(students, "1", "Fritz"));
console.log(students);
console.log(student1);
