import { filterList, dropFilter } from '../actions/list'
import { connect } from 'react-redux'

const mapDispatchToProps = { filterList, dropFilter }

export default connect(
  undefined,
  mapDispatchToProps,
)
