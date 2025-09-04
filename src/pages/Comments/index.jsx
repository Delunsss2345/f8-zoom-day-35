import { useEffect, useState } from "react";
import styles from "./CommentSystem.module.css";

const RANDOM_RECENT_COMMENTS = [
  "2 ngày trước",
  "1 ngày trước",
  "3 giờ trước",
  "1 phút trước",
  "Vừa xong",
];

const CommentSystem = () => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newComment = {
      id: comments.length + 1,
      avatar:
        "https://pbs.twimg.com/profile_images/1960728114130247682/cTj-U_5f_normal.jpg",
      name: "Thanh Huy",
      email: "huydarealest@gmail.com",
      body: formData.get("body"),
      recent: "Vừa xong",
    };
    setComments([newComment, ...comments]);
    e.target.reset();
  };

  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <div className={styles["post__header"]}>
          <figure className={styles["post__avatar"]}>
            <img
              src="https://pbs.twimg.com/profile_images/1268086791443230737/BRGz4AiW_normal.jpg"
              alt=""
            />
          </figure>
          <div>
            <div className={styles["post__name"]}>
              <span>PopBase</span>
              <svg
                className={styles["post__badge"]}
                viewBox="0 0 24 24"
                aria-label="Verified"
                role="img"
              >
                <circle cx="12" cy="12" r="12" fill="#1d9bf0"></circle>
                <path
                  d="M10.6 14.6l-2.2-2.2-1.4 1.4 3.6 3.6 6.8-6.8-1.4-1.4z"
                  fill="#fff"
                ></path>
              </svg>
            </div>
            <div className={styles["post__handle"]}>@PopBase</div>
          </div>
        </div>

        <div className={styles["post__body"]}>
          🚨 Taylor Swift and Travis Kelce announce they are engaged:
          <br />
          <br />
          “Your English teacher and your gym teacher are getting married 🧨”
        </div>

        <div className={styles["post__meta"]}>
          12:03 AM · Aug 27, 2025 · <strong>61.2M</strong> Views
        </div>

        <div className={styles["post__actions"]}>
          <div className={styles.action}>
            <svg viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M1.75 12c0-5.66 4.59-10.25 10.25-10.25s10.25 4.59 10.25 10.25S17.66 22.25 12 22.25c-1.38 0-2.7-.27-3.91-.8l-5.09 1.64 1.64-5.09c-.53-1.21-.8-2.53-.8-3.91z"
              />
            </svg>
            18.2K
          </div>
          <div className={styles.action}>
            <svg viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M4.75 17.25h10.5v-3l4 4-4 4v-3H4.75a3 3 0 0 1-3-3v-5.5h2v5.5a1 1 0 0 0 1 1zM19.25 6.75h-10.5v3l-4-4 4-4v3h10.5a3 3 0 0 1 3 3v5.5h-2v-5.5a1 1 0 0 0-1-1z"
              />
            </svg>
            42.7K
          </div>
          <div className={styles.action}>
            <svg viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 4 4 6.5 4c1.74 0 3.41 1 4.13 2.44h.74C13.09 5 14.76 4 16.5 4 19 4 21 6 21 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              />
            </svg>
            510K
          </div>
          <div className={styles.action}>
            <svg viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M6 4c-1.1 0-2 .9-2 2v16l8-3.2L20 22V6c0-1.1-.9-2-2-2H6z"
              />
            </svg>
            9.3K
          </div>
        </div>
      </div>

      <div className={styles["comment-form"]}>
        <p className={styles.replying}>
          Replying to <span>@PopBase</span>
        </p>
        <form onSubmit={handleSubmit}>
          <div className={styles["reply-box"]}>
            <img
              src="https://pbs.twimg.com/profile_images/1960728114130247682/cTj-U_5f_normal.jpg"
              alt="avatar"
              className={styles["reply-avatar"]}
            />
            <input
              name="body"
              type="text"
              placeholder="Post your reply"
              required
            />
            <button type="submit" className={styles["reply-btn"]}>
              Reply
            </button>
          </div>
        </form>
      </div>

      <div className={styles["comments-section"]}>
        {comments.length === 0 && (
          <div className={styles.loading}>Đang tải…</div>
        )}
        {comments.map((comment, idx) => (
          <div className={styles.comment} key={comment.id || idx}>
            <img
              className={styles["comment-avatar"]}
              src={
                comment.avatar ||
                `https://ui-avatars.com/api/?name=${comment.name}&background=random`
              }
              alt="avatar"
            />
            <div className={styles["comment-body"]}>
              <div className={styles["comment-header"]}>
                <span className={styles["comment-name"]}>{comment.name}</span>
                <span className={styles["comment-email"]}>{comment.email}</span>
                <span className={styles["comment-time"]}>
                  ·{" "}
                  {comment.recent ||
                    RANDOM_RECENT_COMMENTS[
                      Math.floor(Math.random() * RANDOM_RECENT_COMMENTS.length)
                    ]}
                </span>
              </div>
              <div className={styles["comment-text"]}>{comment.body}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSystem;
