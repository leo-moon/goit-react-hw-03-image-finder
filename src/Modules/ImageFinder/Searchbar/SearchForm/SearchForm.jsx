// import axios from 'axios';
import { Component } from 'react';

import styles from './search-form.module.scss';

class SearchForm extends Component {
  state = {
    search: '',
  };



  render() {
    return (
      <form className={styles.form}>
        <button type="submit" className={styles.button}>
          Search
          <span className={styles.button__label}>Search</span>
        </button>

        <input
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    );
  }
}

export default SearchForm;
