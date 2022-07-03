import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'

import Plan from '../Plan'
import { PlansStyles } from './Plans.styles'

export default function Plans({ theme, plans }) {
  const classes = PlansStyles()
  return (
    <ThemeProvider theme={theme}>
      <Grid container className={classes.root}>
        {plans.map((plan) => (
          <Plan key={plan.name} plan={plan} />
        ))}
      </Grid>
    </ThemeProvider>
  )
}
