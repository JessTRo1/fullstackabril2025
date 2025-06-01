import express from 'express';
import personRoutes from './routes/personRoutes.js';
import classroomRoutes from './routes/classroomRoutes.js';

const app = express();
app.use(express.json());

app.use('/persons', personRoutes);
app.use('/classrooms', classroomRoutes); 

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
