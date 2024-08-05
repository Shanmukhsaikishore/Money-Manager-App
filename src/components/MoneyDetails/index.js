import './index.css'

const MoneyDetails = props => {
  const {transactionList} = props
  const incomeList = transactionList.filter(
    eachItem => eachItem.type === 'Income',
  )
  const incomeAmt = incomeList.reduce(
    (acc, cur) => acc + parseInt(cur.amount),
    0,
  )

  const expensesList = transactionList.filter(
    eachItem => eachItem.type === 'Expenses',
  )
  const expensesAmt = expensesList.reduce(
    (acc, cur) => acc + parseInt(cur.amount),
    0,
  )

  return (
    <div className="money-details-container">
      <li className="balance-item">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="icon"
        />
        <div className="text-content">
          <p className="title">Your Balance</p>
          <p className="amount" data-testid="balanceAmount">
            Rs {incomeAmt - expensesAmt}
          </p>
        </div>
      </li>
      <li className="income-item">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="icon"
        />
        <div className="text-content">
          <p className="title">Your Income</p>
          <p className="amount" data-testid="incomeAmount">
            Rs {incomeAmt}
          </p>
        </div>
      </li>
      <li className="expenses-item">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="icon"
        />
        <div className="text-content">
          <p className="title">Your Expenses</p>
          <p className="amount" data-testid="expensesAmount">
            Rs {expensesAmt}
          </p>
        </div>
      </li>
    </div>
  )
}

export default MoneyDetails
