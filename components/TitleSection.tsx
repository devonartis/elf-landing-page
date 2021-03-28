import React, { ChangeEvent, useState } from 'react'
import { Box, Button, Grid, Heading, Input, Text } from 'theme-ui'

import { Desktop } from './Desktop'
import { Mobile } from './Mobile'

// eslint-disable-next-line
const EMAIL_REGEX = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

function Email() {
  const [email, setEmail] = useState<string | undefined>()

  const emailError = !!email && !EMAIL_REGEX.test(email)

  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    setEmail(value)
  }

  return (
    <>
      <Desktop>
        <Grid
          sx={{
            maxWidth: '547px',
            borderRadius: 'round',
            boxShadow: 'light',
            bg: 'background',
          }}
          p={1}
          pl={4}
          mt="96px"
          columns="auto 140px"
          gap="10px"
        >
          <Input placeholder="Enter your email" type="email" onChange={handleEmailChange} />
          <Button disabled={emailError} variant="email" sx={{ minWidth: '140px' }}>
            Sign Up
          </Button>
        </Grid>
      </Desktop>
      <Mobile>
        <Grid gap={3} mt="80px">
          <Box
            p={1}
            pl={4}
            sx={{
              borderRadius: 'round',
              boxShadow: 'light',
              bg: 'background',
            }}
          >
            <Input placeholder="Enter your email" type="email" onChange={handleEmailChange} />
          </Box>
          <Button disabled={emailError} variant="email" sx={{ minWidth: '140px' }}>
            Sign Up
          </Button>
        </Grid>
      </Mobile>
    </>
  )
}

export function TitleSection(): JSX.Element {
  return (
    <Grid sx={{ alignContent: 'center' }}>
      <Box>
        <Heading
          as="h1"
          sx={{
            maxWidth: '491px',
            lineHeight: '108%',
            mb: 5,
            fontSize: [6, 7],
          }}
        >
          Not locked yield, fixed yield.
        </Heading>
        <Text
          variant="subHeading"
          sx={{
            lineHeight: 1.5,
            maxWidth: '479px',
            width: '100%',
            py: 2,
            px: 3,
            ml: -3,
            my: -3,
            borderRadius: 'roundish',
            backgroundImage: () =>
              `radial-gradient(rgba(255, 255, 255, 1) 60%, rgba(255, 255, 255, 0))`,
          }}
        >
          Element finance offers BTC, ETH and USDC at a discount, introducing high fixed yield
          income to the DeFi market.
        </Text>
        <Email />
      </Box>
    </Grid>
  )
}
