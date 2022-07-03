import { makeStyles, ThemeProvider } from '@material-ui/core/styles'

export const SharedStyles = makeStyles((theme) => ({
  title: {
    // fontFamily: 'Inter',
    fontSize: 24,
    fontWeight: 600,
    lineHeight: '29px',
    letterSpacing: 0,
    textAlign: 'left'
  },
  priceBox: {
    display: 'flex',
    alignItems: 'baseline'
  },
  currency: {
    // font-family: Inter;
    fontSize: 20,
    fontWeight: 600,
    lineHeight: '24px',
    letterSpacing: 0,
    textAlign: 'center'
  },
  price: {
    // fontFamily: 'Inter',
    fontSize: 40,
    fontWeight: 700,
    lineHeight: '48px',
    letterSpacing: 0
  },
  pill: {
    // font-family: Inter;
    color: '#00B256',
    padding: theme.spacing(0.25, 1),
    background: '#DCFCE7',
    borderRadius: '9.1px 0px',
    fontSize: theme.spacing(1.5),
    fontWeight: 500,
    lineHeight: '18px',
    letterSpacing: 0
  },
  description: {
    // fontFamily: Inter
    fontSize: 13,
    fontWeight: 50,
    lineHeight: '20px',
    letterSpacing: 0
  },
  tickerBox: {
    display: 'flex',
    alignItems: 'center'
  },
  check: {
    paddingBottom: theme.spacing(0.25)
  },
  tickerText: {
    // fontFamily: Inter;
    padding: theme.spacing(0.5),
    fontSize: 14,
    fontWeight: 500,
    lineHeight: '20px',
    letterSpacing: 0
  }
}))
