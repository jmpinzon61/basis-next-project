import Posts from "../page"
import { Suspense } from "react";

async function loadPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = await res.json()
  return data;
  // console.log(data)
}

async function Page({params}) {
  const { postId } =  await params; 
  const post = await loadPost(postId)
  
  return (
    <div>
       <h1>{post.id} {post.title}</h1>
       <p>{post.body}</p>

       <hr />
       <h3>Otras Publicaciones</h3>
       <Suspense>
          <Posts/>
       </Suspense> 
    </div>
  )
}

export default Page