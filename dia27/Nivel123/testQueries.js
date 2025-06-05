const mongoose = require('mongoose');
const Alumno = require('./models/Alumno');

mongoose.connect('mongodb://localhost:27017/colegio')
    .then(() => {
        console.log('Conectado a MongoDB');
        ejecutarConsultas();
    })
    .catch(err => console.error('Error de conexión', err));

async function ejecutarConsultas() {
    try {
        // Edad entre 18 y 25
        const edad18a25 = await Alumno.find({ edad: { $gte: 18, $lte: 25 } });
        console.log('Edad entre 18 y 25:', edad18a25);

        // Apellido empieza por G
        const apellidoG = await Alumno.find({ surname: { $regex: '^G', $options: 'i' } });
        console.log('Apellido empieza por G:', apellidoG);

        // Sin _id, solo nombre y apellido
        const proyeccion = await Alumno.find({}, { _id: 0, name: 1, surname: 1 });
        console.log('Proyección nombre y apellido:', proyeccion);

        // Primeros 10 registros
        const pagina1 = await Alumno.find().limit(10);
        console.log('\n---- Primeros 10 registros --\n');
        console.log(pagina1);

        const pagina2 = await Alumno.find().skip(10).limit(10);
        console.log('\n---- Registros 11 a 20 --\n');
        console.log(pagina2)

        // Por fecha de nacimiento descendente
        const ordenPorFecha = await Alumno.find().sort({ birthdate: -1 });
        console.log('\n---- Ordenados por fecha de nacimiento (descendente) --\n');
        console.log(ordenPorFecha);

        // Por apellido ascendente
        const ordenPorApellido = await Alumno.find().sort({ surname: 1 });
        console.log('\n---- Ordenados por apellido (A-Z)) --\n');
        console.log(ordenPorApellido);

        // Alumnos que sean profesores y nacieron después del año 2000
        const profsPost2000 = await Alumno.find({
            $and: [
                { esProfesor: true },
                { birthdate: { $gte: new Date('2000-01-01') } }
            ]
        });
        console.log('\n---- Profesores nacidos después de 2000 --\n');
        console.log(profsPost2000);

        // Alumnos con nombre "Juan" o apellido "Gomez"
        const juanOGomez = await Alumno.find({
            $or: [
                { name: 'Juan' },
                { surname: 'Gomez' }
            ]
        });
        console.log('\n---- Alumnos con nombre "Juan" o apellido "Gomez" --\n');
        console.log(juanOGomez);

        // Crear un índice en el campo "email"
        await Alumno.collection.createIndex({ email: 1 });
        console.log('\n--- Índice creado en "email" ---');;

        // Hacer una consulta y ver si el índice se utiliza
        const resultado = await Alumno.find({ email: 'juan@example.com' }).explain('executionStats');
        console.log('\n--- Resultado con explain ---');
        console.dir(resultado.executionStats, { depth: null });

        // Cerrar conexión:
        mongoose.connection.close();
    } catch (err) {
        console.error('Error en consultas:', err);
    }
}
