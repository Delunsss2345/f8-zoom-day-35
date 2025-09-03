import Loading from "@/components/Loading";
import { useEffect, useState } from "react";
import styles from "./Products.module.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=12")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  function truncate(text, max = 100) {
    return text.length > max ? text.slice(0, max) + "..." : text;
  }

  if (loading) {
    return (
      <div className={styles.grid}>
        <Loading />
      </div>
    );
  }

  return (
    <>
      <div className={styles.grid}>
        {posts.map((post) => (
          <div key={post.id} className={styles.card}>
            <h2>
              {post.id}.{" "}
              {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
            </h2>
            <p>{truncate(post.body, 100)}</p>
            <button
              className={styles["view-btn"]}
              onClick={() => setSelected(post)}
            >
              Xem chi tiết
            </button>
          </div>
        ))}
      </div>

      {selected && (
        <div className={styles.modal} onClick={() => setSelected(null)}>
          <div
            className={styles["modal-content"]}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>
              {selected.title.charAt(0).toUpperCase() + selected.title.slice(1)}
            </h2>
            <p>{selected.body}</p>
            <button className={styles.close} onClick={() => setSelected(null)}>
              Đóng
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
