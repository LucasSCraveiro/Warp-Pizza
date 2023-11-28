import Menu from "./Menu";
import axios from "axios";
import { useEffect, useState } from "react";

function NovoPost(){

    const [title, setTitle] = useState([]);
    const [body, setBody] = useState([]);

    const createPost = async (e) => {
        e.preventDefault();

        const post = {title, body, userId:1};
        try 
        {
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {body : post,});
            // console.log (title, body);
        }
        catch (error) 
        {
            console.log(error);
        }

    }

    return(
        <div>
            <h1 class="font-bold text-3xl underline">Posts</h1>
            <Menu/>
            <br/>
            <br/>
            <br/>
            <form onSubmit={(e) => createPost(e)}>
                <label htmlFor="title"></label>
                <input type="text" name="title" id="title" placeholder="Digite o título" onChange={(e) => setTitle(e.target.value)}/>
                <label htmlFor="body"></label>
                <textarea name="body" id="body" placeholder="Digite o conteúdo" onChange={(e) => setBody(e.target.value)}></textarea>
                <input type="submit" value="Criar post" />
            </form>
        </div>
    )
}

export default NovoPost