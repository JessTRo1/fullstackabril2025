import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

function AdminPanel() {
  const [users, setUsers] = useState([]);
  const [editUserId, setEditUserId] = useState(null);

  const [editFormData, setEditFormData] = useState({
    email: '',
    password: '',
    isAdmin: false
  });

  const [newUserData, setNewUserData] = useState({
    email: '',
    password: '',
    isAdmin: false
  });

  const navigate = useNavigate();

  // Cargar usuarios solo si es admin
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return navigate('/login');

    try {
      const decoded = jwtDecode(token);
      if (!decoded.isAdmin) return navigate('/dashboard');

      fetch('http://localhost:3000/api/users', {
        headers: { Authorization: 'Bearer ' + token }
      })
        .then(res => {
          if (!res.ok) throw new Error('No autorizado');
          return res.json();
        })
        .then(data => setUsers(data))
        .catch(err => {
          console.error('Error al cargar usuarios:', err);
          navigate('/login');
        });
    } catch (err) {
      console.error('Token inválido:', err);
      navigate('/login');
    }
  }, [navigate]);

  // Borrar usuario
  const handleDelete = async (id) => {
    const confirmacion = window.confirm('¿Seguro que quieres eliminar este usuario?');
    if (!confirmacion) return;

    const token = localStorage.getItem('token');

    try {
      const res = await fetch(`http://localhost:3000/api/users/${id}`, {
        method: 'DELETE',
        headers: { Authorization: 'Bearer ' + token }
      });

      if (res.ok) {
        setUsers(prev => prev.filter(u => u.id !== id));
      } else {
        alert('Error al eliminar usuario');
      }
    } catch (err) {
      console.error('Error al eliminar:', err);
    }
  };

  // Editar usuario
  const startEdit = (user) => {
    setEditUserId(user.id);
    setEditFormData({
      email: user.email,
      password: '',
      isAdmin: user.isAdmin
    });
  };

  const handleEditChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleEditSave = async () => {
    const token = localStorage.getItem('token');

    try {
      const res = await fetch(`http://localhost:3000/api/users/${editUserId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(editFormData)
      });

      if (res.ok) {
        const updated = await res.json();
        setUsers(prev => prev.map(u => (u.id === editUserId ? updated : u)));
        setEditUserId(null);
      } else {
        alert('Error al guardar cambios');
      }
    } catch (err) {
      console.error('Error al editar:', err);
    }
  };

  // Crear nuevo usuario
  const handleNewUserChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewUserData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      const res = await fetch('http://localhost:3000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(newUserData)
      });

      if (res.ok) {
        const newUser = await res.json();
        setUsers(prev => [...prev, newUser]);
        setNewUserData({ email: '', password: '', isAdmin: false });
      } else {
        alert('Error al crear usuario');
      }
    } catch (err) {
      console.error('Error al crear usuario:', err);
    }
  };

  return (
    <div>
      <h1>Panel de Administración</h1>

      <h2>Crear nuevo usuario</h2>
      <form onSubmit={handleCreateUser}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newUserData.email}
          onChange={handleNewUserChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={newUserData.password}
          onChange={handleNewUserChange}
          required
        />
        <label>
          <input
            type="checkbox"
            name="isAdmin"
            checked={newUserData.isAdmin}
            onChange={handleNewUserChange}
          />
          Admin
        </label>
        <button type="submit">Crear</button>
      </form>

      <h2>Usuarios</h2>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Email</th>
            <th>Admin</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              {editUserId === u.id ? (
                <>
                  <td>
                    <input
                      type="email"
                      name="email"
                      value={editFormData.email}
                      onChange={handleEditChange}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="isAdmin"
                      checked={editFormData.isAdmin}
                      onChange={handleEditChange}
                    />
                  </td>
                  <td>
                    <button onClick={handleEditSave}>Guardar</button>
                    <button onClick={() => setEditUserId(null)}>Cancelar</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{u.email}</td>
                  <td>{u.isAdmin ? '✅' : '❌'}</td>
                  <td>
                    <button onClick={() => startEdit(u)}>Editar</button>
                    <button onClick={() => handleDelete(u.id)}>Borrar</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminPanel;
