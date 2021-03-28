import { Flex, Grid, Text } from '@theme-ui/components'
import Image from 'next/image'
import React from 'react'
import { Box } from 'theme-ui'
import { Desktop } from './Desktop'
import { Mobile } from './Mobile'

const rowOne = [
  { investor: 'a16z.png', width: 375, height: 210 },
  { investor: 'placeholder.svg', width: 1317, height: 267 },
  { investor: 'a-capital.svg', width: 168, height: 31 },
  { investor: 'scalar-capital.svg', width: 238, height: 60 },
  { investor: 'sv-angel.png', width: 800, height: 480 },
  { investor: 'robot-ventures.png', width: 3200, height: 800 },
  { investor: 'consensys.svg', width: 512, height: 256 },
  { investor: 'balancer.svg', width: 512, height: 256 },
  { investor: 'aave.svg', width: 512, height: 256 },
]

export function Investors() {
  return (
    <Grid sx={{ alignContent: 'center' }}>
      <Box>
        <Flex sx={{ justifyContent: 'center' }}>
          <Text variant="heading" sx={{ fontSize: [5, 6] }}>
            Backed by
          </Text>
        </Flex>
        <Grid mt={['80px', '120px']} gap={5}>
          <Mobile>
            <Flex sx={{ flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-evenly' }}>
              {rowOne.map(({ investor, ...rest }, idx) => (
                <Grid key={idx} sx={{ maxWidth: '250px', minWidth: '90px' }} m={4}>
                  <Image {...{ src: `/investors/${investor}`, ...rest }} />
                </Grid>
              ))}
            </Flex>
          </Mobile>
          <Desktop>
            <Grid
              columns={3}
              sx={{ flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-evenly' }}
            >
              {rowOne.map(({ investor, ...rest }, idx) => (
                <Grid key={idx} sx={{ maxWidth: '250px', minWidth: '90px' }} m={4}>
                  <Image {...{ src: `/investors/${investor}`, ...rest }} />
                </Grid>
              ))}
            </Grid>
          </Desktop>
        </Grid>
      </Box>
    </Grid>
  )
}
