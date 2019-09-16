import FilterComponent from '../components/FilterComponent'
import connect from './filterConnect'

import { compose } from 'ramda'

export default compose(connect)(FilterComponent)
