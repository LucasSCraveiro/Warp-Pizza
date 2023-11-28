import Menu from "./Menu";
import { useEffect, useState } from "react";

function UsuariosAula(){

    const [users, setUser] = useState([]);

    function data() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((json) => setUser(json))
    }

    useEffect(() => {
        data();
    }, []);

    return(
        <div>
            <h1 class="font-bold text-3xl underline">Usuarios</h1>
            <Menu/>
            <br/>
            <br/>
            <br/>
            <ul>
                {users.map(user =>
                    <li key={user.id}>{user.name}</li>)}
            </ul>
        </div>
    )
}

export default UsuariosAula