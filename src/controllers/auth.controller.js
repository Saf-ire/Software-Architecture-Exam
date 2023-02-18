const database = require('../../database');
const bcrypt = require('bcrypt');

module.exports.login_post = (req, res) => {
    const { name, password } = req.body;
    const student = database.students.find((student) => student.name === name);

    if (!student) return res.status(403).json('Student does not exist');

    const storedPass = student.password;

    const login = bcrypt.compareSync(password, storedPass);

    if (!login) return res.json('Wrong Password');

    return res.json({ message: "You're logged in", student: student });
}