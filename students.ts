const student1: Student = {name: "Florian", id: "1"}
const student2: Student = {name: "Matthias", id: "2"}

const students: Student[] = [student1, student2]

console.log(students)

function update(students: Student[], id: string, name: string): Student[] {
    for (let i = 0; i < students.length; i++) {
        if (students[i].id == id) {
            students[i].name = name
        }
    }

    return students
}

console.log(update(students, "1", "Max"))
console.log(students)
console.log(student1)


function checkStudent(student: Student): Student {
    if (student.id == "1") {
        return {id: "1", name: "Fritz"}
    }
    return student
}

function replace(students: Student[], id: string, name: string): Student[] {
    return students.map(checkStudent)
}


console.log(replace(students, "1", "Fritz"))
console.log(students)
console.log(student1)

//funktions-name Parameter:(variabel-name : type,      variabel-name: type,variabel-name: type): RückgabeType            { Body }
function replaceArrow(students: Student[], id: string, name: string): Student[] {
    return students.map((student) => {
        if (student.id == id) {
            return {id: id, name: name}
        }
        return student
    })
}

type Student = {id: string, name: string}
type University = {students: Student[]}
