const readChunk = require('read-chunk');
const fs = require("fs");
const path = require('path');
const { error } = require('console');
const { type } = require('os');
import state from '../store';
import {
  CHANGE_SOURCE,
  CHANGE_LOG,
  CHANGE_SINGNATURE,
  GO,
  REPORT
} from '../constants';

export const changeSource = ({ value }) => {

  return {
    type: CHANGE_SOURCE,
    payload: value,
  }
}
export const changeLog = ({ value }) => {

  return {
    type: CHANGE_LOG,
    payload: value,
  }
}
export const changeSignature = (e) => {
  let appSignature = state.getState().appSignature;
  const id = e.id;
  const arrsig = e.dataset.arrsig;
  let newArrSig = arrsig.split(',').map(Number);
  for (const key in appSignature) {
    if (key === id) {
      delete appSignature[id];
      return {
        type: CHANGE_SINGNATURE,
        payload: appSignature,
      }
    }
    else {
      appSignature[id] = newArrSig;
    }
  }

  return {
    type: CHANGE_SINGNATURE,
    payload: appSignature,
  }
}

export const changeGo = () => dispatch => {
  const sourceValue = state.getState().sourceValue;
  const logValue = state.getState().logValue;
  const appSignature = state.getState().appSignature;
  const desktop = require('path').join(require('os').homedir(), 'Desktop');
  new Promise(function (resolve) {
    resolve(getFilesHandler(sourceValue));
  }).then(function (files) {
    return compareHandler(files, appSignature);
  }).then(function (files) {
    createLogHandler(files, logValue);
    return files;
  }).then(function (files) {
    const fullPathLogFile = `${desktop}\\Snowflake_Log\\${logValue}.txt`;
    const filesLength = files.length;
    dispatch({
      type: REPORT,
      filesLength: filesLength,
      fullPathLogFile: fullPathLogFile
    });
  }).catch((error) => {
    console.log(error);
  })
}
//получаем полные пути к файлам
const getFilesHandler = (dir, files_) => {
  files_ = files_ || [];
  let files = fs.readdirSync(dir);
  for (let i in files) {
    let name = dir + '\\' + files[i];
    try {
      if (fs.statSync(name).isDirectory()) {
        getFilesHandler(name, files_);
      } else {
        files_.push(name);
      }
    }
    catch (e) {
      console.log('e', e);
      console.log('name', e.name);
      console.log('stack', e.stack);
      console.log('message', e.message);
    }
  }
  return files_;
}
//сравниваем файлы с базой данных
const compareHandler = (files, dbT) => {
  let flag = 0;
  let newArr = [];
  files.map((itemF, indexF) => {
    for (let itemD in dbT) {
      flag = 0;
      dbT[itemD].map((item, index) => {
        console.log(dbT[itemD].length);
        if (item === readChunk.sync(itemF, 0, dbT[itemD].length)[index]) {
          flag++;
        }
        if (flag === dbT[itemD].length) {
          newArr.push(itemF);
        }
      })
    }
  });
  return newArr;
}
//запись в файл
const createLogHandler = (res) => {
  const desktop = require('path').join(require('os').homedir(), 'Desktop');
  const logValue = state.getState().logValue;
  fs.mkdir(path.join(desktop, 'Snowflake_Log'),
    { recursive: true }, (err) => {
      if (err) {
        return console.error(err);
      }
      console.log('Directory created successfully!');
    });
  if (fs.existsSync(`${desktop}/Snowflake_Log/${logValue}.txt`)) {
    fs.unlinkSync(`${desktop}/Snowflake_Log/${logValue}.txt`)
  }
  res.map(item => {
    fs.appendFileSync(`${desktop}/Snowflake_Log/${logValue}.txt`, `${item}\r\n`, function (error) {
      console.log('Запись файла завершена.');
    })
  });
}
