import { makeStyles } from '@material-ui/core/styles'

export const PlanStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 270,
    margin: theme.spacing(1),
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      minWidth: 270
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: 270
    }
  },
  popularIcon: {
    position: 'absolute',
    top: -4,
    right: -5
  },
  card: {
    height: '100%',
    borderRadius: 12,
    border: ({ name }) =>
      name === 'Premium' ? '2px dashed #00D7A5' : '1px solid #E5E7EB',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.05)'
  },
  header: {
    height: 130,
    padding: theme.spacing(3.5, 2.5),
    background: ({ name }) =>
      name === 'Premium' ? 'rgba(0, 215, 165, 0.1)' : 'transparent'
  },
  content: {
    padding: theme.spacing(2.5),
    position: 'relative'
  },
  btnBox: {
    textAlign: 'center',
    position: 'absolute',
    top: theme.spacing(-2.5),
    width: 'calc(100% - 40px)'
  },
  buttonPrimary: {
    height: 32,
    paddingTop: 8,
    borderRadius: 6,
    textTransform: 'inherit'
  }
}))
