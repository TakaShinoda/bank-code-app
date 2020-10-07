import React, { FC } from 'react'
import { Button } from 'semantic-ui-react'

export const SelectBank: FC = () => {
  const megaBank = [
    '三菱',
    'みずほ',
    '三井住友',
    'りそな',
    '新生',
    'あおぞら',
    'ゆうちょ',
  ]
  return (
    <div>
      {megaBank.map((bank, i) => (
        <Button inverted color="blue" key={i}>
          {bank}
        </Button>
      ))}

      {/* <Button inverted color='blue'>
        Blue
      </Button> */}
    </div>
  )
}
