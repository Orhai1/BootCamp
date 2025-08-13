import { useEffect, useState } from "react";
import Post from "./Post.jsx";
import './Page.css'

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
const CHANGE_POINT=600


const Page= () => {
  const [posts, setPosts] = useState([]);
  const [isSmall, setIsSmall] = useState(false);


  //ex2
  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch(POSTS_URL);
        if (!res.ok) throw new Error("Failed to fetch posts");
        const data = await res.json();
        //display 10 posts
        setPosts(data.slice(0, 10)); 
      } catch (err) {
        console.error("error:", err)
      }
    }
    fetchPosts();
  }, []);

  //ex3
  useEffect(() => {
    function updateLayout() {
      setIsSmall(window.innerWidth < CHANGE_POINT);
    }
    updateLayout(); 
    window.addEventListener("resize", updateLayout, { passive: true });

    //clean up
    return () => {
        window.removeEventListener("resize", updateLayout);
    }
  }, []);

  return (
    <div className="posts-container">
      <h1 className="header">Top Posts</h1>
      <div className={isSmall?"postGrid" : "posts"}>
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
        </div>
    </div>
  );
}
export default Page;
