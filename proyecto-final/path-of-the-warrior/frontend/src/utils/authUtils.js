// Extrae el nombre del email (antes de @) como fallback a pesar que ya tenemos el name del usuario.
export const parseNameFromEmail = (email) => {
  if (!email.includes('@')) return email;
  return email.split('@')[0];
};

// Verifica si el usuario tiene el rol de administrador.
// Devuelve true si el rol es exactamente 'admin'.
export const isAdmin = (user) => {
  return user?.role === 'admin';
};
