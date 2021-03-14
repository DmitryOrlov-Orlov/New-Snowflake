import React from 'react';
import { connect } from 'react-redux';
import { changeGo } from '../../actions';

import css from './ButtonGo.module.css';

const ButtonGo = ({ changeGo }) => {

  return (
    <div>
      <button onClick={changeGo} className={css.button}>Начать поиск</button>
    </div>
  )
}
const mapDispatchToProps = (dispatch) => ({
  changeGo: (e) => dispatch(changeGo(e.currentTarget))
})

export default connect(null, mapDispatchToProps)(ButtonGo);
