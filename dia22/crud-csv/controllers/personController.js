import { readCSV, writeCSV } from '../utils/csvHelpers.js';
import { v4 as uuidv4 } from 'uuid';
const filePath = './data/persons.csv';


//Create a new person
export const createPerson = async (req, res) => {
    const { name, surname, isTeacher, birthdate } = req.body;

    if (!name || !surname || !birthdate || typeof isTeacher !== 'boolean') {
        return res.status(400).json({ error: 'Invalid input data' });
    }

    try {
        const persons = await readCSV(filePath);

        const newPerson = {
            id: uuidv4(),
            name,
            surname,
            isTeacher: isTeacher.toString(),
            birthdate
        };

        persons.push(newPerson);
        writeCSV(filePath, persons);

        res.status(201).json({ message: 'Person created successfully', person: newPerson });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create person', details: error.message });
    }
};

// Get all persons
export const getAllPersons = async (req, res) => {
    try {
        const persons = await readCSV(filePath);
        res.status(200).json(persons);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve persons', details: error.message });
    }
};      

// Update person by ID
export const updatePerson = async (req, res) => {

    const { id } = req.params;
    const { name, surname, isTeacher, birthdate } = req.body;

    if (!name || !surname || typeof isTeacher !== 'boolean' || !birthdate) {
    return res.status(400).json({ message: 'Datos inválidos o incompletos' });
  }

  try {
    const persons = await readCSV(filePath);
    const index = persons.findIndex(p => p.id === id);

    if (index === -1) {
      return res.status(404).json({ message: 'Persona no encontrada' });
    }

    persons[index] = {
      id,
      name,
      surname,
      isTeacher: isTeacher.toString(),
      birthdate
    };

    writeCSV(filePath, persons);
    res.status(200).json({ message: 'Persona actualizada', person: persons[index] });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar persona', error });
  }
};

// Delete person by ID

export const deletePerson = async (req, res) => {
  const { id } = req.params;

  try {
    const persons = await readCSV(filePath);
    const index = persons.findIndex(p => p.id === id);

    if (index === -1) {
      return res.status(404).json({ message: 'Persona no encontrada' });
    }

    const deleted = persons.splice(index, 1); 
    writeCSV(filePath, persons);                                                 // reescribe CSV

    res.status(200).json({ message: 'Persona eliminada', deleted: deleted[0] });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar persona', error });
  }
};

