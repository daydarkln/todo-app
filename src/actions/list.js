import { get, patch, post } from 'axios'
import types from '../constants/actionTypes'

export const addItem = (obj) => ({
  type: types.ADD_ITEM,
  obj,
})

export const setList = (arr) => ({
  type: types.SET_LIST,
  arr,
})

export const changeStatus = (id, value) => ({
  type: types.CHANGE_STATUS,
  id,
  value,
})

export const changeTitle = (id, value) => ({
  type: types.CHANGE_TITLE,
  id,
  value,
})

export const changeDescription = (id, value) => ({
  type: types.CHANGE_DESCRIPTION,
  id,
  value,
})

export const changePriority = (id, value) => ({
  type: types.CHANGE_PRIORITY,
  id,
  value,
})

export const changeStartDate = (id, value) => ({
  type: types.CHANGE_START_DATE,
  id,
  value,
})

export const changeEndDate = (id, value) => ({
  type: types.CHANGE_END_DATE,
  id,
  value,
})

export const filterList = (key, value) => ({
  type: types.FILTER_LIST,
  key,
  value,
})

export const dropFilter = () => ({
  type: types.DROP_FILTER,
})

export const getList = () => async (dispatch) => {
  const res = await get('/todos')
  const { data } = res
  dispatch(setList(data))
}

export const updateStatus = (id, status) => async (dispatch) => {
  const res = await patch(`/todos/${id}`, {
    status,
  })
  dispatch(changeStatus(id, status))
}

export const updateTitle = (id, title) => async (dispatch) => {
  const res = await patch(`/todos/${id}`, {
    title,
  })
  dispatch(changeTitle(id, title))
}

export const updateDescription = (id, description) => async (dispatch) => {
  const res = await patch(`/todos/${id}`, {
    description,
  })
  dispatch(changeDescription(id, description))
}

export const updatePriority = (id, priority) => async (dispatch) => {
  const res = await patch(`/todos/${id}`, {
    priority,
  })
  dispatch(changePriority(id, priority))
}

export const updateStartDate = (id, startTime) => async (dispatch) => {
  const res = await patch(`/todos/${id}`, {
    startTime,
  })
  dispatch(changeStartDate(id, startTime))
}

export const updateEndDate = (id, endTime) => async (dispatch) => {
  const res = await patch(`/todos/${id}`, {
    endTime,
  })
  dispatch(changeEndDate(id, endTime))
}

export const postItem = (obj) => async (dispatch) => {
  const res = await post('/todos', obj)
  const { data } = res
  dispatch(addItem(data))
}
