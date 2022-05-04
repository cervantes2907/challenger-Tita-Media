import React, { useState } from "react";
import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";

export const Search = () => {
  const [searchText, setSearText] = useState("");

  const handleSubmir = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmir}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="text"
          value={searchText}
          onChange={(e) => setSearText(e.target.value)}
        />
        <button className={styles.searchButton} type="submit">
          <FaSearch size={20} />
        </button>
      </div>
    </form>
  );
};
