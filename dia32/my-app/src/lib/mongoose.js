import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Falta la variable MONGODB_URI en .env.local');
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  if (cached.conn) {
    console.log(' Usando conexión desde caché:', mongoose.connection.name);
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: 'nextjs_catalogo',
      bufferCommands: false,
    }).then((mongoose) => {
      console.log(' Conectado a base de datos:', mongoose.connection.name);
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

