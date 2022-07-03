import React from 'react'

import { Plans, TestComponent, blueTheme, greenTheme } from 'custom-plans'

import 'custom-plans/dist/index.css'

const dataPlans = [
  {
    name: 'Basic',
    price: '19.50',
    pillText: 'Month Billed Quarterly',
    description: 'Standard plan for One Region',
    btnText: 'Buy Basic',
    tickers: [
      { text: 'Unlimited Keyword Searches', checked: true },
      { text: 'Daily Tender Alerts', checked: true },
      { text: 'Tender Data in Excel', checked: false },
      { text: 'Tender Results', checked: false }
    ]
  },
  {
    name: 'Premium',
    price: '29.50',
    pillText: 'Month Billed Quarterly',
    description: 'Standard plan for All Regions',
    btnText: 'Buy Premium',
    tickers: [
      { text: 'Unlimited Keyword Searches', checked: true },
      { text: 'Daily Tender Alerts', checked: true },
      { text: 'Tender Data in Excel', checked: false },
      { text: 'Tender Results', checked: false }
    ]
  },
  {
    name: 'Pro',
    price: 'Custom',
    description: 'A plan customized as per your requirements',
    btnText: 'Chat With Us',
    tickers: [
      { text: 'Unlimited Keyword Searches', checked: true },
      { text: 'Daily Tender Alerts', checked: true },
      { text: 'Tender Data in Excel', checked: true },
      { text: 'Tender Results', checked: true },
      { text: 'Unlimited Logins', checked: true },
      { text: 'Unlimited Users', checked: true }
    ]
  }
]
const App = () => {
  return (
    <>
      <TestComponent text='Create React Library Example' />
      {/* <PlanComponent name='Custom' /> */}
      <Plans theme={blueTheme} plans={dataPlans} />
      {/* <Plans theme={orangeTheme} btnText='Hello' /> */}
    </>
  )
}

export default App
