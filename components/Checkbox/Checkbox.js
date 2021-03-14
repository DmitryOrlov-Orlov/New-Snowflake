import React from 'react';
import { connect } from 'react-redux';
import { changeSignature } from '../../actions';

import css from './Checkbox.module.css';

const Checkbox = ({ nameSig, arrSig, changeSignature }) => {

  return (
    <div className={css.signature_checkbox}>
      <input
        className={css.input}
        onChange={changeSignature}
        type="checkbox"
        id={nameSig}
        data-arrsig={arrSig}
      />
      <label className={css.label} htmlFor={nameSig}>{nameSig}</label>
    </div>
  )
}
const mapDispatchToProps = (dispatch) => ({
  changeSignature: (e) => dispatch(changeSignature(e.currentTarget))
})

export default connect(null, mapDispatchToProps)(Checkbox);
