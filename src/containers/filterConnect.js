import { filterList } from '../actions/list'
import { connect } from 'react-redux'

const mapDispatchToProps = { filterList }

export default connect(
  undefined,
  mapDispatchToProps,
)
