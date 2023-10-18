import { Navigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useState } from "react";

const BlogDetail = () => {
    const { id } = useParams();
    const {data: blog, isPending} = useFetch("http://localhost:8000/blogs/" + id);
    const [isRedirect, setIsRedirect] = useState(false);

    const handleDelete = ()=>{
        fetch("http://localhost:8000/blogs/"+ id, {
            method: "DELETE"
        }).then(()=>{
            setIsRedirect(true);
        })
    }
    return ( 
        <div className="blog-detail">
            {isPending && <div>Loading ...</div>}
            {blog && (
            <article>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <div>{blog.body}</div>
                <button onClick={handleDelete}>Delete</button>
                {isRedirect && <Navigate to="/"/>}
            </article>)}
        </div>
     );
}
 
export default BlogDetail;