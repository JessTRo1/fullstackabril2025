import { useParams } from "react-router-dom";

function User() {
    const { id } = useParams();

    return (
         <div>
      <h2>Perfil de usuario</h2>
      <p>ID del usuario: {id}</p>
    </div>      
    )
}

export default User;