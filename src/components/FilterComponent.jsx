import React from 'react'
import { Button, Menu, Dropdown, Icon, Form } from 'antd'

const Field = Form.Item

const FilterComponent = (props) => {
  const priorityMenu = (
    <Menu
      onClick={(e) => {
        if (e.key === '5') {
          props.dropFilter()
        } else {
          props.filterList('priority', parseInt(e.key))
        }
      }}
    >
      <Menu.Item key="1">low</Menu.Item>
      <Menu.Item key="2">mid</Menu.Item>
      <Menu.Item key="3">hight</Menu.Item>
      <Menu.Item key="4">max</Menu.Item>
      <Menu.Item key="5">сбросить</Menu.Item>
    </Menu>
  )
  const statusMenu = (
    <Menu
      onClick={(e) => {
        if (e.key === '4') {
          props.dropFilter()
        } else {
          props.filterList('status', parseInt(e.key))
        }
      }}
    >
      <Menu.Item key="1">бэклог</Menu.Item>
      <Menu.Item key="2">в процессе</Menu.Item>
      <Menu.Item key="3">выполнено</Menu.Item>
      <Menu.Item key="4">сбросить</Menu.Item>
    </Menu>
  )
  return (
    <Form className="df jcsb">
      <Field label="Приоритет">
        <Dropdown overlay={priorityMenu}>
          <Button>
            Фильтр <Icon type="down" />
          </Button>
        </Dropdown>
      </Field>
      <Field label="Статус">
        <Dropdown overlay={statusMenu}>
          <Button>
            Фильтр <Icon type="down" />
          </Button>
        </Dropdown>
      </Field>
    </Form>
  )
}

export default FilterComponent
