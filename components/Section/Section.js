import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Source from '../Source/Source';
import Log from '../Log/log';
import Signature from '../Signature/Signature';

const Section = () => {

  return (
    <section>
      <Source />
      <Log />
      <Signature />
    </section>
  )
}

export default Section;
