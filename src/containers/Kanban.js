import Kanban from '../components/Kanban'
import connect from './kanbanConnect'
import lifecycle from './listLifecycle'

import { compose } from 'ramda'

export default compose(
  connect,
  lifecycle,
)(Kanban)
