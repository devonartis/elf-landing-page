import { PropsWithChildren } from 'react'
import { Box } from 'theme-ui'

export function Desktop({ children }: PropsWithChildren<any>) {
  return <Box sx={{ display: ['none', 'block'] }}>{children}</Box>
}
