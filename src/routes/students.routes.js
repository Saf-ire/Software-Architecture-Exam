const express = require('express');
const router = express.Router();

const studentController = require('../controllers/student.controller');
const authController = require('../controllers/auth.controller');

router.get('/students', studentController.find_students);
router.get('/student/:id', studentController.find_one_student);
router.post('/student', studentController.create_student);
router.put('/student/:id', studentController.update_student);
router.delete('/student/:id', studentController.delete_student);

router.post('/login', authController.login_post);

module.exports = router;