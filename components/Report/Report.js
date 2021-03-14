import React from 'react';
import { connect } from 'react-redux';

import css from './Report.module.css';

const Report = ({ filesLength, fullPathLogFile, appSignature }) => {

  return (
    <div className={css.report}>
      {filesLength ? <div>Количество совпадений: {filesLength}</div> : null}
      {fullPathLogFile ? <div>Ваш отсчет лежит в: {fullPathLogFile}</div> : null}
    </div>
  )
}
const mapStateToProps = (state) => ({
  filesLength: state.filesLength,
  fullPathLogFile: state.fullPathLogFile,
  appSignature: state.appSignature
})

export default connect(mapStateToProps)(Report);
