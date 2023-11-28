import Menu from "./Menu";
import axios from "axios";
import { useEffect, useState } from "react";

function Posts(){

    const [posts, setPosts] = useState([]);

    const data = async () => {
        try 
        {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            // console.log(response);
            const dados = response.data;
            console.log(dados);
            setPosts(dados);
        } 
        catch (error) 
        {
            console.log(error);
        }

    }

    useEffect(() => {
        data();
    }, []);

    return(
        <div>
            <h1 class="font-bold text-3xl underline">Posts</h1>
            <Menu/>
            <br/>
            <br/>
            <br/>
            <ul>
                {posts.map(post =>
                    <li key={post.id}>{post.title}</li>)}
            </ul>
        </div>
    )
}

export default Posts