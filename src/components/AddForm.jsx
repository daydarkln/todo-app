import React from 'react'
import { Form, Input, Select, DatePicker, Button } from 'antd'
import { pathOr } from 'ramda'
import moment from 'moment'

const Field = Form.Item
const { Option } = Select

const AddForm = (props) => {
  const values = pathOr({}, ['values'], props)
  return (
    <Form onSubmit={props.handleSubmit}>
      <Field label="Заголовок">
        <Input value={values.title} onChange={(e) => props.setFieldValue('title', e.target.value)} />
      </Field>
      <Field label="Описание">
        <Input value={values.description} onChange={(e) => props.setFieldValue('description', e.target.value)} />
      </Field>
      <Field label="Приоритет">
        <Select defaultValue={1} onChange={(val) => props.setFieldValue('priority', val)}>
          <Option value={1}>low</Option>
          <Option value={2}>mid</Option>
          <Option value={3}>hight</Option>
          <Option value={4}>max</Option>
        </Select>
      </Field>
      <Field label="Статус">
        <Select defaultValue={1} onChange={(val) => props.setFieldValue('status', val)}>
          <Option value={1}>бэклог</Option>
          <Option value={2}>в процессе</Option>
          <Option value={3}>выполнено</Option>
        </Select>
      </Field>
      <Field label="Крайний срок">
        <DatePicker
          onChange={(e) => {
            debugger
            props.setFieldValue('startDate', moment(e._d).format('DD-MM-YYYY'))
          }}
        />
      </Field>
      <Button htmlType="submit">Добавить</Button>
    </Form>
  )
}

export default AddForm
