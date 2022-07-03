import React from 'react'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'

import { Description, Pill, PriceTag, Ticker, TitleTag } from '../../shared'
import { PopularIcon } from '../../icons'

import { PlanStyles } from './Plan.styles'

export default function Plan({ plan }) {
  const classes = PlanStyles(plan)
  return (
    <Grid item md={4} sm={12} className={classes.root}>
      <Card className={classes.card}>
        {plan.name === 'Premium' && (
          <Box className={classes.popularIcon}>
            <PopularIcon />
          </Box>
        )}
        <Box className={classes.header}>
          <TitleTag title={plan.name} />
          <PriceTag price={plan.price} />
          {plan.pillText && <Pill text={plan.pillText} />}
          <Description text={plan.description} />
        </Box>
        <CardContent className={classes.content}>
          <Box className={classes.btnBox}>
            <Button
              className={classes.buttonPrimary}
              variant='contained'
              color='primary'
              fullWidth
            >
              {plan.btnText}
            </Button>
          </Box>
          {plan.tickers.map((ticker) => (
            <Ticker key={ticker.text} ticker={ticker} />
          ))}
        </CardContent>
      </Card>
    </Grid>
  )
}
