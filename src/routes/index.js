import React from 'react'
import Todo from '../containers/Todo'
import AddForm from '../containers/AddForm'
import Header from '../components/Header'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Layout } from 'antd'
import Footer from '../components/Footer'

const { Content } = Layout

export const history = createBrowserHistory()

function Routes() {
  return (
    <Router history={history}>
      <Layout>
        <Header />
        <Content>
          <Switch>
            <Route exact path="/" component={Todo} />
            <Route path="/add" component={AddForm} />
          </Switch>
        </Content>
        <Footer />
      </Layout>
    </Router>
  )
}

export default Routes
