import React from 'react'
import { Droppable, Draggable, DragDropContext } from 'react-beautiful-dnd'
import { Card } from 'antd';

const Kanban = (props) => (
  <DragDropContext
    onDragEnd={(result) => {
      props.updateStatus(parseInt(result.draggableId), parseInt(result.destination.droppableId))
    }}
  >
    <div className="df jcsb">
      <div>
        <Droppable droppableId="1">
          {(provided, snapshot) => {
            return (
              <div
                ref={provided.innerRef}
                style={{ backgroundColor: snapshot.isDraggingOver ? 'rgba(0,0,0,.1)' : 'transparent' }}
                {...provided.droppableProps}
              >
                <h2>Backlog</h2>
                {props.list
                  .filter((item) => item.status === 1)
                  .map((item) => (
                    <Draggable draggableId={item.id} index={0}>
                      {(provided, snapshot) => (
                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <Card>
                            <h4>{item.title}</h4>
                          </Card>
                        </div>
                      )}
                    </Draggable>
                  ))}
              </div>
            )
          }}
        </Droppable>
      </div>
      <div>
        <Droppable droppableId="2">
          {(provided, snapshot) => {
            return (
              <div
                ref={provided.innerRef}
                style={{ backgroundColor: snapshot.isDraggingOver ? 'rgba(0,0,0,.1)' : 'transparent' }}
                {...provided.droppableProps}
              >
                <h2>In progress</h2>
                {props.list
                  .filter((item) => item.status === 2)
                  .map((item) => (
                    <Draggable draggableId={item.id} index={0}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <Card>
                            <h4>{item.title}</h4>
                          </Card>
                        </div>
                      )}
                    </Draggable>
                  ))}
              </div>
            )
          }}
        </Droppable>
      </div>
      <div>
        <Droppable droppableId="3">
          {(provided, snapshot) => {
            return (
              <div
                ref={provided.innerRef}
                style={{ backgroundColor: snapshot.isDraggingOver ? 'rgba(0,0,0,.1)' : 'transparent' }}
                {...provided.droppableProps}
              >
                <h2>Done</h2>
                {props.list
                  .filter((item) => item.status === 3)
                  .map((item) => (
                    <Draggable draggableId={item.id} index={0}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <Card>
                            <h4>{item.title}</h4>
                          </Card>
                        </div>
                      )}
                    </Draggable>
                  ))}
              </div>
            )
          }}
        </Droppable>
      </div>
    </div>
  </DragDropContext>
)

export default Kanban
