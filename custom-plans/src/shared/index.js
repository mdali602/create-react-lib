import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { SharedStyles } from './shared.styles'
import { CheckedIcon, InfoIcon, UncheckedIcon } from '../icons'

export const TitleTag = ({ title }) => {
  const classes = SharedStyles()
  return (
    <Typography className={classes.title} color='primary' gutterBottom>
      {title}
    </Typography>
  )
}

export const PriceTag = ({ price, oldPrice, discount }) => {
  const classes = SharedStyles()
  return (
    <Box className={classes.inline}>
      <Box className={classes.priceBox}>
        {price !== 'Custom' && (
          <Typography className={classes.currency}>&#x24;</Typography>
        )}
        <Typography className={classes.price}>{price}</Typography>
      </Box>
      <Box className={classes.discountBox}>
        {oldPrice && (
          <Typography className={classes.oldPrice}>&#x24;{oldPrice}</Typography>
        )}
        {discount && (
          <Typography className={classes.discount} color='primary'>
            {discount}
          </Typography>
        )}
      </Box>
    </Box>
  )
}

export const Pill = ({ text }) => {
  const classes = SharedStyles()
  return (
    <Typography component='span' className={classes.pill}>
      {text}
    </Typography>
  )
}

export const Description = ({ text }) => {
  const classes = SharedStyles()
  return <Typography className={classes.description}>{text}</Typography>
}

export const Ticker = ({ ticker }) => {
  const classes = SharedStyles()
  return (
    <Box className={classes.tickerBox}>
      <Box className={classes.check}>
        {ticker.checked ? (
          <CheckedIcon width='16' height='16' />
        ) : (
          <UncheckedIcon width='16' height='16' />
        )}
      </Box>
      <Typography className={classes.tickerText}>{ticker.text}</Typography>
      <InfoIcon />
    </Box>
  )
}
