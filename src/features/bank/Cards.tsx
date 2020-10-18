import React, { FC } from 'react'
import { Button, Card } from 'semantic-ui-react'
import { useSelector } from 'react-redux'
import { selectBank } from './bankSlice'

export const Cards: FC = () => {
  const bank = useSelector(selectBank)
  return (
    <div>
      <Card.Group>
        <Card>
          <Card.Content>
            <Card.Header>{bank[0].hira}</Card.Header>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button inverted color="blue">
              {bank[0].code}
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  )
}
