import { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './searchbar.module.scss';

class Searchbar extends Component {
  state = {
    search: 'us navy',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    console.log(value)
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    console.log('handleSubmit', { ...this.state });
    const result = onSubmit({ ...this.state });
    if (result) {
      this.reset();
    }
  };

  reset() {
    // this.setState({ ...initState });
    this.setState({ search: '' });
  }

  render() {
    const { search } = this.state;
    // console.log(search)
    const { handleChange, handleSubmit } = this;
    return (
      <header className={styles.searchbar}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <button type="submit" className={styles.button}>
            Search
            {/* <span className={styles.button__label}>Search</span> */}
          </button>

          <input
            onChange={handleChange}
            name="search"
            value={search}
            className={styles.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            required
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
