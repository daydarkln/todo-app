import React from 'react'
import Todo from '../containers/Todo'
import AddForm from '../containers/AddForm'
import Kanban from '../containers/Kanban'
import Header from '../components/Header'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Layout } from 'antd'

const { Content } = Layout

export const history = createBrowserHistory()

function Routes() {
  return (
    <Router history={history}>
      <Layout className="todo-app">
        <Header />
        <Content>
          <Switch>
            <Route path="/add" component={AddForm} />
            <Route path="/list" component={Todo} />
            <Route path="/kanban" component={Kanban} />
            <Redirect to="/list"/>
          </Switch>
        </Content>
      </Layout>
    </Router>
  )
}

export default Routes
