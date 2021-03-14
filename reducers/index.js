import {
  CHANGE_SOURCE,
  CHANGE_LOG,
  CHANGE_SINGNATURE,
  GO,
  REPORT
} from '../constants';

const initialState = {
  sourceValue: '',
  logValue: '',
  appSignature: { '1': [1] },
  filesLength: '',
  fullPathLogFile: ''
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SOURCE:
      return { ...state, sourceValue: action.payload }
    case CHANGE_LOG:
      return { ...state, logValue: action.payload }
    case CHANGE_SINGNATURE:
      return { ...state, appSignature: { ...state.appSignature } }
    case REPORT:
      return {
        ...state,
        filesLength: action.filesLength,
        fullPathLogFile: action.fullPathLogFile
      }
    default:
      return state;
  }
}
