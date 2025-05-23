import { useContext } from 'react';
import { UserContext } from './UserContext';
import './user.css';

function UserName() {
  const user = useContext(UserContext);
  return <h2 className="username">Usuario: {user.name}</h2>;
}

export default UserName;
