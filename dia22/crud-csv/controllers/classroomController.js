import { v4 as uuidv4 } from 'uuid';
import { readCSV, writeCSV } from '../utils/csvHelpers.js';

const filePath = './data/classrooms.csv';

export const createClassroom = async (req, res) => {
  const { name, teacher_id, students } = req.body;

  console.log('Body recibido:', req.body); 

  if (!name || !teacher_id || !Array.isArray(students)) {
    return res.status(400).json({ message: 'Datos inválidos' });
  }

  try {
    const classrooms = await readCSV(filePath);

    const newClassroom = {
      id: uuidv4(),
      name,
      teacher_id,
      students: students.join(';')
    };

    classrooms.push(newClassroom);
    writeCSV(filePath, classrooms);

    res.status(201).json({ message: 'Clase creada', classroom: newClassroom });
  } catch (error) {
    console.error('Error al crear classroom:', error);
    res.status(500).json({ message: 'Error al crear classroom', error: error.message || error });
  }
};

// GET /classrooms
export const getAllClassrooms = async (req, res) => {

  try {
    const classrooms = await readCSV(filePath);
    res.status(200).json(classrooms);
  } catch (error) {
    res.status(500).json({ message: 'Error al leer classrooms', error: error.message });
  }
};

// PUT /classrooms/:id

export const updateClassroom = async (req, res) => {
  const { id } = req.params;
  const { name, teacher_id, students } = req.body;

  if (! name || !teacher_id || !Array.isArray(students)) {
    return res.status(400).json({ message: 'Datos inválidos' });
  }

  try {
    const classrooms = await readCSV(filePath);
    const index = classrooms.findIndex(cls => cls.id === id);

    if (index === -1) {
      return res.status(404).json({ message: 'Clase no encontrada' });
    }

    classrooms[index] = {
      ...classrooms[index],
      name,
      teacher_id,
      students: students.join(';')
    };

    writeCSV(filePath, classrooms);
    res.status(200).json({ message: 'Clase actualizada', classroom: classrooms[index] });
  } catch (error) {
    console.error('Error al actualizar classroom:', error);
    res.status(500).json({ message: 'Error al actualizar classroom', error: error.message });
  }
};

// DELETE /classrooms/:id
export const deleteClassroom = async (req, res) => {
  const { id } = req.params;

  try {
    const classrooms = await readCSV(filePath);
    const index = classrooms.findIndex(cls => cls.id === id);

    if (index === -1) {
      return res.status(404).json({ message: 'Clase no encontrada' });
    }

    const deleted = classrooms.splice(index, 1);
    writeCSV(filePath, classrooms);

    res.status(200).json({ message: 'Clase eliminada', deleted: deleted[0] });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar classroom', error: error.message });
  }
};
