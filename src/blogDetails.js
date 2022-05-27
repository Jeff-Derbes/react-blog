import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { Navigate } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams()
    const {data, error, isPending} = useFetch('http://localhost:8000/blogs/' + id)
    const Navigate = useNavigate()

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + data.id, {
            method: 'DELETE'
        }).then(() => {
            Navigate('/')
        })
    }

    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}            
            {error && <div> { error }</div>}
            {data && (
                <article>
                    <h2>{data.title}</h2>
                    <p>Written by {data.author} </p>
                    <div>{data.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;