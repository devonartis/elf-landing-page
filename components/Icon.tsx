import React from 'react'
import { Box, Theme, useThemeUI } from 'theme-ui'

export const Icon = ({
  name,
  height = 3,
  width = 3,
  color = 'currentColor',
  role = 'presentation',
  focusable = 'false',
  sx,
  ...rest
}: any) => {
  const { theme } = useThemeUI()
  const icons = { ...(theme as Theme & { icons: any }).icons }

  if (!icons[name]) {
    console.error(`No icon found with name ${name}`)
    return null
  }

  return (
    <Box
      as="svg"
      sx={{ ...sx, height, width }}
      viewBox={icons[name].viewBox || '0 0 24 24'}
      color={color}
      display="inline-block"
      verticalAlign="middle"
      focusable={focusable}
      role={role}
      {...rest}
    >
      {icons[name].path}
    </Box>
  )
}
