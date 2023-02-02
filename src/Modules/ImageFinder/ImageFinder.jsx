import { Component } from 'react';
import axios from 'axios';

import Searchbar from './Searchbar/Searchbar';

import styles from './ImageGallery/image-gallery.module.scss';

const URL_BASE ='https://pixabay.com/api/?';
const KEY = 'key=32187725-9ebb8484d7ffd0cb9d2ef83f1';
const per_page = 12
let page = 1
let parametrs = `&image_type=photo&orientation=horizontal&per_page=${per_page}&page=${page}  `;
let urlForFitch = URL_BASE + KEY + parametrs

class ImageFinder extends Component {
  state = {
    items: [],
    loading: false,
    error: null
  };

  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get(urlForFitch)
      .then(({ data }) => {
        this.setState({ items: data.hits, loading: false });
      })
      .catch(error => {
        this.setState({error: error.message})
        console.log(error.message);
      })
      .finally(this.setState({ loading: false }));
  }

  // componentDidUpdate(prevProps, prevState) {
  //   const { contacts } = this.state;
  //   if (contacts.length !== prevState.contacts.length)
  //     localStorage.setItem('phonebook', JSON.stringify(contacts));
  // }

  componentDidUpdate() {}

  render() {
    const { items, loading, error } = this.state;

    // if (!items ) return
    const elementsLi = items.map(({ id, webformatURL, largeImageURL }) => (
      <li className={styles.item} key={id}>
        <img className={styles.item__image} src={webformatURL} alt="nature" />
      </li>
    ));
    return (
      <>
        <Searchbar />
        {/* <ImageGallery /> */}
        {loading && <p>...LOADING</p>}
        {error && <p>Something goes wrong</p>}
        <ul className={styles.gallery}>{elementsLi}</ul>
      </>
    );
  }
}

export default ImageFinder;
