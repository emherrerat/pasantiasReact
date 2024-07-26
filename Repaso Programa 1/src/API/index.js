import React from 'react'
import {useState, useEffect, useContext} from 'react'

const API = () =>{
       const [posts, setPosts] = useState([])
// GET with fetch API
   useEffect(() => {
      const fetchPost = async () => {
         const response = await fetch(
            'https://jsonplaceholder.typicode.com/users'
         );
         const data = await response.json();
         console.log(data);
         setPosts(data);
      };
      fetchPost();
   }, []);

    // Delete with fetchAPI
   const deletePost = async (id) => {
      let response = await fetch(
         `https://jsonplaceholder.typicode.com/users/${id}`,
         {
            method: 'DELETE',
         }
      );
      if (response.status === 200) {
         setPosts(
            posts.filter((post) => {
               return post.id !== id;
            })
         );
      } else {
         return;
      }
   };
    
    return(
       <form>
       <h2>Datos</h2>
           <br></br>
    <div className="posts-container">
                    <table className="post-card">
                        <tr>
<th>ID</th>
            <th>Name</th>
            <th>Usernme</th>
             <th>email</th>
             <th>Address</th>
        </tr>
       {posts.map((post) => {
         return (
               <tr>
                   <td>{post.id}</td>
            <td>{post.name}</td>
              <td>{post.username}</td>
            <td>{post.email}</td>
              <td>{post.address.street} - {post.address.suite} ({post.address.city}) </td>
                   <td>
                               <div className="post-card" key={post.id}>             
               <div className="button">
                  <div className="delete-btn" onClick={() => deletePost(post.id)}>
                     DELETE
                  </div>
               </div>    
            </div>
                   </td>
        </tr>      
         );
      })}       
            </table>
   </div>
       </form> 
    )
}
export default API