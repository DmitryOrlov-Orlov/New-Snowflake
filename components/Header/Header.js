import React from 'react';

import css from './Header.module.css';

const Header = () => {

  return (
    <header className={css.header}>
      <h1>Программа "Snowflake"</h1>
      <p>Поиск файлов по сигнатурам</p>
    </header>
  )
}

export default Header;
