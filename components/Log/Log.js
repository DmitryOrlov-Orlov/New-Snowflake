import React from 'react';
import { connect } from 'react-redux';
import { changeLog } from '../../actions';

import css from './Log.module.css';

const Log = ({ changeLog }) => {

  return (
    <div className={css.log}>
      <span>2) Назовите Log-файл</span>
      <input
        onChange={changeLog}
        className={css.log_input}
        type="text"
        placeholder="log-файл"
      />
    </div>
  )
}
const mapDispatchToProps = (dispatch) => ({
  changeLog: (e) => dispatch(changeLog(e.target))
})

export default connect(null, mapDispatchToProps)(Log);
