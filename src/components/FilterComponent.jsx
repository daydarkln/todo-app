import React from 'react'
import { Button, Menu, Dropdown, Icon, Form } from 'antd'

const Field = Form.Item

const FilterComponent = (props) => {
  const priorityMenu = (
    <Menu onClick={(e) => props.filterList(parseInt('priority', parseInt(e.key)))}>
      <Menu.Item key="1">low</Menu.Item>
      <Menu.Item key="2">mid</Menu.Item>
      <Menu.Item key="3">hight</Menu.Item>
      <Menu.Item key="3">max</Menu.Item>
    </Menu>
  )
  const statusMenu = (
    <Menu onClick={(e) => parseInt('status', parseInt(e.key))}>
      <Menu.Item key="1">бэклог</Menu.Item>
      <Menu.Item key="2">в процессе</Menu.Item>
      <Menu.Item key="3">выполнено</Menu.Item>
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
