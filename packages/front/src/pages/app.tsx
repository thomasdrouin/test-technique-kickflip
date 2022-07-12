import Box from '@mui/material/Box'
import React, { FC } from 'react'

import { UserDisplayer } from '../components/userDisplayer'

export const App: FC = () => {
  return (
    <Box
      width="100vw"
      height="100vh"
      alignItems="center"
      justifyContent={'center'}
      display="flex"
      flexDirection="column"
    >
      <UserDisplayer />
    </Box>
  )
}
