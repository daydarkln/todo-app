import types from '../constants/actionTypes'
import { __ } from 'ramda'
import { updateObjInArray } from '../utils/heplers'

export const initialState = {
  list: [],
  defaultList: []
}

export default (state = initialState, action) => {
  const updateWithArray = updateObjInArray(action.id, __, action.value, state.list)
  switch (action.type) {
    case types.ADD_ITEM:
      return {
        ...state,
        list: [...state.list, action.obj],
        defaultList: [...state.defaultList, action.obj]
      }
    case types.SET_LIST:
      return {
        ...state,
        list: action.arr,
        defaultList: action.arr
      }
    case types.FILTER_LIST:
      return {
        ...state,
        list: state.defaultList.filter(item => item[action.key] === action.value),
      }
    case types.DROP_FILTER:
      return {
        ...state,
        list: state.defaultList,
      }
    case types.CHANGE_STATUS:
      return {
        ...state,
        list: updateWithArray('status'),
        defaultList: updateWithArray('status'),
      }
    case types.CHANGE_TITLE:
      return {
        ...state,
        list: updateWithArray('title'),
        defaultList: updateWithArray('title'),
      }
    case types.CHANGE_DESCRIPTION:
      return {
        ...state,
        list: updateWithArray('description'),
        defaultList: updateWithArray('description'),
      }
    case types.CHANGE_PRIORITY:
      return {
        ...state,
        list: updateWithArray('priority'),
        defaultList: updateWithArray('priority'),
      }
    case types.CHANGE_START_DATE:
      return {
        ...state,
        list: updateWithArray('startDate'),
        defaultList: updateWithArray('startDate'),
      }
    case types.CHANGE_END_DATE:
      return {
        ...state,
        list: updateWithArray('endDate'),
        defaultList: updateWithArray('endDate'),
      }

    default:
      return state
  }
}
