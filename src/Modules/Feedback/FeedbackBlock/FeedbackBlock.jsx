// import { Children } from 'react';
import styles from './feedback-block.module.scss';

const FeedbackBlock = ({ children, title }) => {
  return (
    <>
      <h3 className={styles.title}> {title} </h3>
      {children}
    </>
  );
};

export default FeedbackBlock;
