import { useState, useEffect } from "react";
import Article from "../components/article";
import Footer from "../components/footer";
import Header from "../components/header";

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
      <Header />
      <h1 className="text-3xl font-semibold">Simple Blog</h1>
      <div className="mx-4">
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
      <Footer />
    </>
  );
}

export default Home;
