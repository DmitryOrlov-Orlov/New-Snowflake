import React from 'react';
import { connect } from 'react-redux';
import { changeSource } from '../../actions';

import css from './Source.module.css'

const Source = ({ changeSource }) => {

  return (
    <div className={css.source}>
      <span>1) Где искать?</span>
      <input
        onChange={changeSource}
        className={css.source_input}
        id='archive__inp1'
        type="text"
        placeholder="C:\Users\Admin1\Desktop\foto" />
    </div>
  )
}
const mapDispatchToProps = (dispatch) => ({
  changeSource: (e) => dispatch(changeSource(e.target))
})

export default connect(null, mapDispatchToProps)(Source);
