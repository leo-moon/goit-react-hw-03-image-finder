import SearchForm from './SearchForm/SearchForm';
import styles from './searchbar.module.scss';

const Searchbar = () => {
  return (
    <header className={styles.searchbar}>
      <SearchForm />
    </header>
  );
};

export default Searchbar;
