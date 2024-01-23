import React from 'react'
import styles from '../Footer/Footer.module.css'
import Dogs from '../../Assets/dogs-footer.svg?react';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Dogs />
      <p>Dogs. Alguns direitos revervados. </p>
    </footer>
  )
}

export default Footer