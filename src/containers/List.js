import List from '../components/List'
import connect from './listConnect'
import lifecycle from './listLifecycle'
import withHandlers from './listHandlers';

import { compose } from 'ramda'

export default compose(
  connect,
  withHandlers,
  lifecycle,
)(List)
