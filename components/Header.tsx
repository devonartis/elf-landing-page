import React, { useState } from 'react'
import { Card, Container, Flex, Grid, IconButton, Link, Text } from 'theme-ui'
import { MenuButton } from 'theme-ui'

import { Desktop } from './Desktop'
import { Icon } from './Icon'
import { Mobile } from './Mobile'

function HamburgerDropdown() {
  const [dropdownActive, setDropdownActive] = useState<boolean>(false)
  function toggleDropdown() {
    setDropdownActive(!dropdownActive)
  }

  function closeDropdown() {
    setDropdownActive(false)
  }
  return (
    <Flex>
      <Card
        sx={{
          bg: 'background',
          position: 'absolute',
          right: '16px',
          display: dropdownActive ? 'inline-block' : 'none',
          boxShadow: 'light',
          borderRadius: 'roundish',
          p: 3,
          mx: 4,
        }}
      >
        <Grid>
          <Link href="#investors" onClick={closeDropdown}>
            <Text variant="subHeading" sx={{ fontWeight: 'semiBold' }}>
              Investors
            </Text>
          </Link>
          <Link href="#team" onClick={closeDropdown}>
            <Text variant="subHeading" sx={{ fontWeight: 'semiBold', cursor: 'pointer' }}>
              Team
            </Text>
          </Link>
          <Link href="#advisors" onClick={closeDropdown}>
            <Text variant="subHeading" sx={{ fontWeight: 'semiBold' }}>
              Advisors
            </Text>
          </Link>
        </Grid>
      </Card>
      <Grid sx={{ alignContent: 'center' }}>
        <IconButton
          sx={{ display: dropdownActive ? 'block' : 'none', outline: 'none' }}
          onClick={toggleDropdown}
        >
          <Icon name="close" sx={{ alignSelf: 'end', color: 'primary' }} height={24} width={24} />
        </IconButton>
        <MenuButton
          sx={{
            outline: 'none',
            display: dropdownActive ? 'none' : 'block',
            color: 'primary',
            p: 0,
          }}
          onClick={toggleDropdown}
        />
      </Grid>
    </Flex>
  )
}

export function Header() {
  return (
    <Container variant="header">
      <Flex sx={{ justifyContent: 'space-between', alignItems: 'center' }} py={[2, 3]} px={[3, 4]}>
        <Icon name="logo" height="69px" width="209px" />
        <>
          <Desktop>
            <Grid gap={4} columns="auto auto auto" sx={{ alignItems: 'center' }}>
              <Link href="#investors">
                <Text variant="subHeading" sx={{ fontWeight: 'semiBold' }}>
                  Investors
                </Text>
              </Link>
              <Link href="#team">
                <Text variant="subHeading" sx={{ fontWeight: 'semiBold', cursor: 'pointer' }}>
                  Team
                </Text>
              </Link>
              <Link href="#advisors">
                <Text variant="subHeading" sx={{ fontWeight: 'semiBold' }}>
                  Advisors
                </Text>
              </Link>
            </Grid>
          </Desktop>
          <Mobile sx={{ display: ['block', 'none'] }}>
            <HamburgerDropdown />
          </Mobile>
        </>
      </Flex>
    </Container>
  )
}
