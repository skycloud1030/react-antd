import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
// import badge_list from "../../data/badge.js";
import BadgeList from "../../data/badge.js";

function GithubCard(props) {
  const { name } = props;
  const [data, setData] = useState([]);
 
  useEffect(() => {
    const data = BadgeList(name) || [];
    setData(data);
  }, [name]);

  return data.map(item => {
    return (
      <a href={item.url} className={styles.badge} key={item.alt}>
        <img src={item.img} alt={item.alt} />
      </a>
    );
  });
}

export default React.memo(GithubCard);
