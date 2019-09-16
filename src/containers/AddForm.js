import AddForm from '../components/AddForm'
import withFormik from './withFormik'
import connect from './formConnect'

import { compose } from 'ramda'

export default compose(
  connect,
  withFormik,
)(AddForm)
