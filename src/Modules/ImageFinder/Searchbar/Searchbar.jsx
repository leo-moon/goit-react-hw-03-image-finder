import styles from './searchbar.module.scss';

const Searchbar = () => {
  return (
    <>
      <header className={styles.searchbar}>
        <form className={styles.form}>
          <button type="submit" className={styles.button}>
            <span >Search</span>
          {/* className={styles.button-label} */}
          </button>

          <input
            className={styles.input}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </>
  );
};

export default Searchbar;
