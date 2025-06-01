import express from 'express';
import { createPerson, getAllPersons, updatePerson, deletePerson } from '../controllers/personController.js';

const router = express.Router();

router.post('/', createPerson);
router.get('/', getAllPersons); 
router.put('/:id', updatePerson);
router.delete('/:id', deletePerson);

export default router;