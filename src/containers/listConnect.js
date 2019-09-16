import * as actions from '../actions/list'
import { pathOr } from 'ramda'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  list: pathOr([], ['todo', 'list'], state),
})
const mapDispatchToProps = { ...actions }

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)
