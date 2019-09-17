import { connect } from 'react-redux'
import { getList, updateStatus } from '../actions/list'

const mapStateToProps = (state) => {
  return {
    list: state.todo.list,
  }
}

const mapDispatchToProps = { getList, updateStatus }

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)
