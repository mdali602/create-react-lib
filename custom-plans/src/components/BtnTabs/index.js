import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  btnGroup: {
    padding: theme.spacing(1, 0),
    borderRadius: theme.spacing(4.5)
  },
  btnTab: {
    width: theme.spacing(11.5),
    margin: theme.spacing(0, 1),
    borderRadius: '40px !important',
    textTransform: 'capitalize'
  }
}))

export default function BtnTabs() {
  const [active, setActive] = useState('second')
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <ButtonGroup
        variant='contained'
        // color='primary'
        aria-label='contained primary button group'
        className={classes.btnGroup}
      >
        <Button
          className={classes.btnTab}
          color='primary'
          variant={active === 'first' ? 'contained' : 'link'}
          onClick={() => setActive('first')}
        >
          1 Year
        </Button>
        <Button
          className={classes.btnTab}
          color='primary'
          variant={active === 'second' ? 'contained' : 'link'}
          onClick={() => setActive('second')}
        >
          2 Year
        </Button>
      </ButtonGroup>
    </div>
  )
}
