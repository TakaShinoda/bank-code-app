import React, { FC } from 'react'
import { Header, Icon } from 'semantic-ui-react'

export const Head: FC = () => {
  return (
    <div>
      <Header as="h2">
        <Icon name="money" />
        <Header.Content>金融機関コード</Header.Content>
      </Header>
    </div>
  )
}
