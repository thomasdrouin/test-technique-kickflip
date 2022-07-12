import { sleep } from '@monorepo/common/src/utils/sleep'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import React, { FC, useEffect, useState } from 'react'

export const UserDisplayer: FC = () => {
  type User = {
    id: number
    name: string
  }

  console.log('Rendering')

  const [user, setUser] = useState<User | undefined>()
  const [count, setCount] = useState(0)

  useEffect(() => {
    const fetchUser = async () => {
      console.log('Fetching user')
      await sleep(2000)
      setUser({ id: 1, name: 'The user name' })
    }

    fetchUser().then()
  }, [])

  return (
    <Box
      width="100vw"
      height="100vh"
      alignItems="center"
      justifyContent={'center'}
      display="flex"
      flexDirection="column"
    >
      {!user && <CircularProgress />}
      {user && (
        <>
          {user.name}
          <Button variant={'outlined'} onClick={() => setCount(count + 1)}>
            Rerender me
          </Button>
        </>
      )}
    </Box>
  )
}
