import React from 'react';
import Checkbox from '../Checkbox/Checkbox';
import ButtonGo from '../ButtonGo/ButtonGo';
import Report from '../Report/Report';
import archive from '../../db/archive.json';
import video from '../../db/video.json';
import audio from '../../db/audio.json';
import images from '../../db/images.json';
import oneC from '../../db/1c.json';
import docs from '../../db/docs.json';

import css from './Signature.module.css';

const Signature = () => {

  return (
    <div>
      <div className={css.signature}>
        <div>
          <span>3) Выбирете сигнатуру</span>
        </div>
        <div className={css.signature_title}>
          <span>Архивы</span>
        </div>
        <div className={css.signature_block}>
          {Object.keys(archive).map(item => (
            <Checkbox key={item + 1} arrSig={archive[item]} nameSig={item} />
          ))}
        </div>
        <div className={css.signature_title}>
          <span>Документы</span>
        </div>
        <div className={css.signature_block}>
          {Object.keys(docs).map(item => (
            <Checkbox key={item + 1} arrSig={docs[item]} nameSig={item} />
          ))}
        </div>
        <div className={css.signature_title}>
          <span>Графика</span>
        </div>
        <div className={css.signature_block}>
          {Object.keys(images).map(item => (
            <Checkbox key={item + 1} arrSig={images[item]} nameSig={item} />
          ))}
        </div>
        <div className={css.signature_title}>
          <span>Видео</span>
        </div>
        <div className={css.signature_block}>
          {Object.keys(video).map(item => (
            <Checkbox key={item + 1} arrSig={video[item]} nameSig={item} />
          ))}
        </div>
        <div className={css.signature_title}>
          <span>Аудио</span>
        </div>
        <div className={css.signature_block}>
          {Object.keys(audio).map(item => (
            <Checkbox key={item + 1} arrSig={audio[item]} nameSig={item} />
          ))}
        </div>
        <div className={css.signature_title}>
          <span>Базы 1С</span>
        </div>
        <div className={css.signature_block}>
          {Object.keys(oneC).map(item => (
            <Checkbox key={item + 1} arrSig={oneC[item]} nameSig={item} />
          ))}
        </div>
      </div>
      <ButtonGo />
      <Report />
    </div>
  )
}

export default Signature;
