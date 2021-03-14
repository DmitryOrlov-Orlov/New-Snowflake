import React from 'react';

import css from './Footer.module.css';

const Footer = () => {

  return (
    <footer className={css.footer}>
      <a className={css.a}>Полезно знать</a>
      <a className={css.a}>About Snowflake</a>
      <a className={css.a}>FAQ</a>
    </footer>
  )
}

export default Footer;
