import React from 'react'
import { Card, Empty, Button, Select } from 'antd'
import { __, pathOr } from 'ramda'
import Title from 'antd/lib/typography/Title'
import ButtonGroup from 'antd/lib/button/button-group'
import Paragraph from 'antd/lib/typography/Paragraph'

const { Option } = Select

const List = (props) => {
  const list = pathOr([], ['list'], props)
  if (list.length) {
    return list.map((item) => {
      const pathOrEmpty = pathOr('', __, item)
      const priority = props.getPriority(pathOrEmpty(['priority']))
      const statusTitle = props.getStatus(pathOrEmpty(['status']))
      const status = pathOrEmpty(['status'])
      const id = pathOrEmpty(['id'])
      return (
        <Card
          key={id}
          title={
            <Title level={2}>
              <Paragraph editable={{ onChange: (e) => props.updateTitle(id, e) }}>{pathOrEmpty(['title'])}</Paragraph>
            </Title>
          }
        >
          <div className="df fdc">
            <div className="df fdc">
              <div>Описание:</div>
              <Title level={4}>
                <Paragraph editable={{ onChange: (e) => props.updateDescription(id, e) }}>
                  {pathOrEmpty(['description'])}
                </Paragraph>
              </Title>
            </div>
            <div className="df fdc">
              <div>Приоритет:</div>
              <Select defaultValue={priority} onChange={(e) => props.updatePriority(id, e)}>
                <Option value={1}>low</Option>
                <Option value={2}>mid</Option>
                <Option value={3}>hight</Option>
                <Option value={4}>max</Option>
              </Select>
            </div>
            <div className="df fdc">
              <div>Статус:</div>
              <Title level={4}>{statusTitle}</Title>
            </div>
            <div className="df fdc">
              <div>Дедлайн:</div>
              <Title level={4}>
                <Paragraph editable={{ onChange: (e) => props.updateStartDate(id, e) }}>
                  {pathOrEmpty(['startDate'])}
                </Paragraph>
              </Title>
            </div>
            <div className="df fdc">
              <div>Выполнено:</div>
              <Title level={4}>
                <Paragraph editable={{ onChange: (e) => props.updateEndDate(id, e) }}>
                  {pathOrEmpty(['endDate'])}
                </Paragraph>
              </Title>
            </div>
            {status === 1 ? (
              <ButtonGroup>
                <Button onClick={() => props.updateStatus(id, 2)}>В процессе</Button>
                <Button onClick={() => props.updateStatus(id, 3)}>Выполнено</Button>
              </ButtonGroup>
            ) : null}
            {status === 2 ? (
              <ButtonGroup>
                <Button onClick={() => props.updateStatus(id, 1)}>Бэклог</Button>
                <Button onClick={() => props.updateStatus(id, 3)}>Выполнено</Button>
              </ButtonGroup>
            ) : null}
            {status === 3 ? (
              <ButtonGroup>
                <Button onClick={() => props.updateStatus(id, 1)}>Беклог</Button>
                <Button onClick={() => props.updateStatus(id, 2)}>В процессе</Button>
              </ButtonGroup>
            ) : null}
          </div>
        </Card>
      )
    })
  }
  return <Empty description="Нет задач" />
}

export default List
