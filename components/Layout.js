/* next.js head */
import Head from 'next/head';
import React, { useContext, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import NextLink from 'next/link';
import { ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { theme } from '../utils/styles';
import { Badge, CircularProgress } from '@material-ui/core';
import { useStyles } from '../utils/styles';
import { Store } from './Store';

import getCommerce from '../utils/commerce';

export default function Layout({
  children,
  commercePublicKey,
  title = 'Coolshop',
}) {
  const classes = useStyles();

 

  

  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8" />
        <title>{`${title}`}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <AppBar
          position="static"
          color="default"
          elevation={0}
          className={classes.appBar}
        >
          <Toolbar className={classes.toolbar}>
            <NextLink href="/">
              <Link
                variant="h6"
                color="inherit"
                noWrap
                href="/"
                className={classes.toolbarTitle}
              >
                {title}
              </Link>
            </NextLink>

            <nav>
              <NextLink href="/cart">
                <Link
                  variant="button"
                  color="textPrimary"
                  href="/cart"
                  className={classes.link}
                >
                    Cart
                </Link>
              </NextLink>
            </nav>
          </Toolbar>
        </AppBar>
        {/* Hero unit */}
        <Container component="main" className={classes.main}>
          {children}
        </Container>
        {/* End hero unit */}
        <Container maxWidth="md" component="footer">
          <Box mt={5}>
            <Typography variant="body2" color="textSecondary" align="center">
              {'© '}
              Stevia 2021
              {'.'}
            </Typography>
          </Box>
        </Container>
        {/* End footer */}
      </ThemeProvider>
    </React.Fragment>
  );
}
