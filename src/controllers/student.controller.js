const database = require('../../database');
const bcrypt = require('bcrypt');

module.exports.find_students = (req, res) => {
    const students = database.students

    if (!students) return res.status(404).json('No students were found')

    return res.json({ message: 'Students found', students: students });
}

module.exports.find_one_student = (req, res) => {
    const id = req.params;
    const _id = parseInt(id.id);
    console.log(id)
    const student = database.students.find((student) => student.id === _id);

    if (!student) return res.status(404).json('Student not found');

    return res.json({ message: 'Student found', student: student });
}

module.exports.create_student = (req, res) => {
    const { name, password, career } = req.body;

    const salt = bcrypt.genSaltSync(12);
    const hash = bcrypt.hashSync(password, salt);

    try {
        const counter = database.students.length + 1
        const newStudent = {
            id: counter,
            name: name,
            password: hash,
            career: career
        }

        database.students.push(newStudent);
        return res.json({ message: 'Student created', new_student: newStudent })

    } catch (error) {
        return res.json(error);
    }

}

module.exports.update_student = (req, res) => {
    const id = req.params;
    const _id = parseInt(id.id);
    const { name, password, career } = req.body;

    const salt = bcrypt.genSaltSync(12);
    const hash = bcrypt.hashSync(password, salt);

    const body = {
        name: name,
        password: hash,
        career: career
    }
    const student = database.students.find((student) => student.id === _id);



    const index = database.students.findIndex((item) => { item.id === id });
    database.students[index] = {
        ...student,
        ...body
    }

    return res.json({ message: 'Student updated', actual: database.students[index], anterior: student });

}

module.exports.delete_student = (req, res) => {
    const id = req.param;
    const index = database.students.findIndex((student) => student.id === id);
    database.students.splice(index, 1)

    return res.json('Student deleted');
}