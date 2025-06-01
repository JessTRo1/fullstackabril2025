import express from 'express';
import { createClassroom, getAllClassrooms, updateClassroom, deleteClassroom } from '../controllers/classroomController.js';

const router = express.Router();

router.post('/', createClassroom);
router.get('/', getAllClassrooms);
router.put('/:id', updateClassroom);
router.delete('/:id', deleteClassroom);

export default router;
