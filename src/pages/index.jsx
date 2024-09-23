import { useState, useEffect } from "react";
import Article from "../components/article";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/posts.json")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);
  
  return (
    <>
      <h1 className="text-2xl md:text-3xl font-semibold">Simple Blog</h1>
      <div className="md:mx-4">
        {posts.length > 0 ? (
          posts.map((post) => (
            <Article
              key={post.key}
              img={post.img}
              imgAlt={post.imgAlt}
              title={post.title}
              desc={post.desc}
              tags={post.tags}
              date={post.date}
            />
          ))
        ) : (
          <p>Loading articles...</p>
        )}
      </div>
    </>
  );
}

export default Home;
