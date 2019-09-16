import { postItem } from '../actions/list'
import { connect } from 'react-redux'

const mapDispatchToProps = { postItem }

export default connect(
  undefined,
  mapDispatchToProps,
)
