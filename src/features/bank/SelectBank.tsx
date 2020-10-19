import React, { FC } from 'react'
import { Button } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { fetchAsyncGetBankCode } from './bankSlice'

export const SelectBank: FC = () => {
  const dispatch = useDispatch()
  const megaBank = [
    // '三菱',
    // 'みずほ',
    // '三井住友',
    // 'りそな',
    // '新生',
    'あおぞら',
    'ゆうちょ',
  ]
  return (
    <div>
      {megaBank.map((bank, i) => (
        <Button inverted color="blue" key={i} onClick={() => dispatch(fetchAsyncGetBankCode(bank))}>
          {bank}
        </Button>
      ))}
    </div>
  )
}
