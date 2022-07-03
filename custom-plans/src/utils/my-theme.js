import { createTheme } from '@material-ui/core'
import { RHColors } from './RHColors'

export const myTheme = createTheme({
  typography: {
    fontFamily: ['BaronSans', 'serif'].join(','),
    body1: {
      fontSize: 16,
      letterSpacing: '3%',
    },
    body2: {
      fontSize: 12,
      letterSpacing: '0.03em',
      fontWeight: 500,
    },
    h2: {
      fontSize: 18,
      letterSpacing: '0.02em',
    },
    h3: {
      fontSize: 16,
      fontWeight: 500,
      lineHeight: '19px',
      letterSpacing: '0.02em',
    },
    caption: {
      fontSize: 9,
      lineHeight: '11px',
      fontWeight: 500,
      letterSpacing: '0.02em',
    },
    subtitle2: {
      fontSize: 10,
      fontWeight: 500,
      lineHeight: '12px',
    },
  },
  palette: {
    primary: {
      main: '#25282A',
    },
    error: {
      dark: '#A21C1C',
      main: `#f44336`,
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*::-webkit-scrollbar': {
          // makes default scroll bars invisible on screens under 1280px wide
          '@media (max-width: 1280px)': {
            width: '0',
          },
        },
      },
    },

    MuiPickersCalendar: {
      week: {
        '&:hover': {
          backgroundColor: RHColors.darkGray,
        },
      },
    },

    //@ts-ignore
    MuiPickersBasePicker: {
      container: {
        backgroundColor: RHColors.black,
        alignItems: 'center',
      },
      pickerView: {
        color: RHColors.white,
        minHeight: 311,
      },
    },
    MuiPickersCalendarHeader: {
      dayLabel: {
        color: RHColors.white,
      },
      iconButton: {
        backgroundColor: RHColors.black,
        color: RHColors.white,
        width: '23%',
      },
    },
    MuiPickersDay: {
      day: {
        color: RHColors.white,
        '&:hover': {
          backgroundColor: RHColors.black,
          border: '1px solid #979797',
          borderRadius: 20,
        },
      },
      current: {
        color: RHColors.white,
        backgroundColor: RHColors.charcoal,
      },
      daySelected: {
        color: RHColors.black,
        backgroundColor: RHColors.white,
        '&:hover': {
          backgroundColor: RHColors.ellipseGray,
          borderRadius: 20,
          color: RHColors.black,
        },
      },
    },
    MuiTableCell: {
      root: {
        padding: 0,
      },
    },
    MuiFormLabel: {
      asterisk: {
        color: RHColors.darkRed,
        '&$error': {
          color: RHColors.darkRed,
        },
      },
    },
    MuiPopover: {
      paper: {
        maxHeight: '100%',
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
      desktop: 800,
    },
  },
})

theme.typography.body1 = {
  ...theme.typography.body1,
  [theme.breakpoints.up('desktop')]: {
    fontWeight: 'normal',
  },
}
