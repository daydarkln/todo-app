import { curry, map, when, propEq, assoc } from 'ramda'

export const updateObjInArray = curry((id, key, value, list) => {
  return map(when(propEq('id', id), assoc(key, value)), list)
})
