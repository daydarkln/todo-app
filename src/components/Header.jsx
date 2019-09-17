import React from 'react'
import { Layout, Icon } from 'antd'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <Layout.Header>
      <NavLink to="/list">
        <Icon style={{ color: 'white', width: 20, height: 40 }} type="unordered-list" />
      </NavLink>
      <NavLink to="/kanban">
        <Icon style={{ color: 'white', width: 20, height: 40 }} type="appstore" />
      </NavLink>
    </Layout.Header>
  )
}

export default Header
