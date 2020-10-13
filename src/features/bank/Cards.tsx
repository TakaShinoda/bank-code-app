import React, { FC } from 'react'
import { Button, Card } from 'semantic-ui-react'

export const Cards: FC = () => {
  return (
    <div>
      <Card.Group>
        <Card>
          <Card.Content>
            <Card.Header>Steve Sanders</Card.Header>
            <Card.Meta>Friends of Elliot</Card.Meta>
            <Card.Description>
              Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button inverted color="blue">
                Approve
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  )
}
