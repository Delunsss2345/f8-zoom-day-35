import Loading from "@/components/Loading";
import { useEffect, useState } from "react";
import styles from "./Profile.module.css";

function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className={styles.container}>
        <Loading />
      </div>
    );
  }


  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles["card-header"]}>
          <figure className={styles["avatar-placeholder"]}>
            <img src="avatar.jpg" alt="" />
          </figure>

          <div className={styles["profile-header"]}>
            <div className={styles["profile-name"]}>
              <h2>{user.name}</h2>
              <div className={styles["verified-badge"]}>✓</div>
            </div>

            <div className={styles["profile-title"]}>
              Product Designer who focuses on simplicity & usability.
            </div>
            <div className={styles["profile-stats"]}>
              <div className={styles["stat-item"]}>
                <span className={styles.value}>@{user.username}</span>
              </div>
              <div className={styles["stat-item"]}>
                <svg
                  style={{
                    width: "1em",
                    height: "1em",
                    marginRight: "-2px",
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                >
                  <path d="M305 151.1L320 171.8L335 151.1C360 116.5 400.2 96 442.9 96C516.4 96 576 155.6 576 229.1L576 231.7C576 343.9 436.1 474.2 363.1 529.9C350.7 539.3 335.5 544 320 544C304.5 544 289.2 539.4 276.9 529.9C203.9 474.2 64 343.9 64 231.7L64 229.1C64 155.6 123.6 96 197.1 96C239.8 96 280 116.5 305 151.1z" />
                </svg>
                <span className={styles.value}>{user.email}</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles["profile-info"]}>
          <div className={styles["info-section"]}>
            <div className={styles.info}>
              <span className={styles.label}>Phone:</span>
              <span className={styles.value}>{user.phone}</span>
            </div>
            <div className={styles.info}>
              <span className={styles.label}>Website:</span>
              <span className={styles.value}>{user.website}</span>
            </div>
            <div className={styles.info}>
              <span className={styles.label}>Address:</span>
              <span className={styles["address-value"]}>
                {user.address.street}, {user.address.suite}
                <br />
                {user.address.city}, {user.address.zipcode}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
