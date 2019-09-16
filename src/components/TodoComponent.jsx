import React from 'react'
import List from '../containers/List'
import FilterComponent from '../containers/FilterComponent'
import { Link } from 'react-router-dom';
import { Icon } from 'antd'

const TodoComponent = (props) => (
  <>
    <FilterComponent />
    <List />
    <Link to="/add" className="add-todo">
      <Icon
        style={{ color: 'blue', position: 'fixed', right: '20px', bottom: '20px' }}
        type="plus-circle"
        theme="filled"
      />
    </Link>
  </>
)

export default TodoComponent
