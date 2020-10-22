import React, { FC } from 'react'
import { Header, Icon } from 'semantic-ui-react'

export const Head: FC = () => {
  return (
    <div>
      <Header as="h2">
        <Icon name="plug" />
        <Header.Content>Uptime Guarantee</Header.Content>
      </Header>
    </div>
  )
}
