import React from 'react';
import styles from './Bar.module.css';
import searchicon2 from '../../img/searchicon2.svg'
function SearchBar() {
  return (
    <div className={styles['bar-container']}>
      <div className={styles['bar']} >
      <input type="text" placeholder="what are you looking for..." />
      <button type="submit">
      <img src={searchicon2} alt="searchicon2" />
      </button>
      </div>
    </div>
  );
}

export default SearchBar;
