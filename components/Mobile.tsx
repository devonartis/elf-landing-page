import React, { PropsWithChildren } from 'react'
import { Box } from 'theme-ui'

export function Mobile({ children }: PropsWithChildren<any>) {
  return <Box sx={{ display: ['block', 'none'] }}>{children}</Box>
}
