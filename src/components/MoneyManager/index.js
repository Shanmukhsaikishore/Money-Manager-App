import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    transactionList: [],
    titleInput: '',
    amountInput: '',
    type: 'INCOME',
  }

  onChangeTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeType = event => {
    this.setState({type: event.target.value})
  }

  onDelete = uid => {
    this.setState(prevState => ({
      transactionList: prevState.transactionList.filter(
        eachItem => eachItem.id !== uid,
      ),
    }))
  }

  addTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, type} = this.state
    if (titleInput === '' || amountInput === '' || type === '') return
    const newTransaction = {
      id: uuidv4(),
      title: titleInput,
      amount: amountInput,
      type: type === 'INCOME' ? 'Income' : 'Expenses',
    }

    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      titleInput: '',
      amountInput: '',
      type: 'Income',
    }))
  }

  render() {
    const {transactionList, titleInput, amountInput, type} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="main-heading">Hi, User</h1>
          <p className="para">
            Welcome back to your <span className="span-ele">Money Manager</span>
          </p>
        </div>
        <MoneyDetails transactionList={transactionList} />
        <div className="bottom-container">
          <form className="form-container" onSubmit={this.addTransaction}>
            <h1 className="form-heading">Add Transaction</h1>
            <label htmlFor="Title" className="title">
              TITLE
            </label>
            <input
              className="input-ele"
              type="text"
              value={titleInput}
              id="Title"
              placeholder="TITLE"
              onChange={this.onChangeTitle}
            />
            <label htmlFor="Amount" className="title">
              AMOUNT
            </label>
            <input
              className="input-ele"
              type="text"
              value={amountInput}
              onChange={this.onChangeAmount}
              id="Amount"
              placeholder="AMOUNT"
            />
            <label htmlFor="Type" className="title">
              TYPE
            </label>
            <select
              id="Type"
              value={type}
              className="input-ele"
              onChange={this.onChangeType}
            >
              <option value={transactionTypeOptions[0].optionId}>
                {transactionTypeOptions[0].displayText}
              </option>
              <option value={transactionTypeOptions[1].optionId}>
                {transactionTypeOptions[1].displayText}
              </option>
            </select>
            <button type="submit" className="submit-button">
              Add
            </button>
          </form>
          <div className="history-container">
            <h1 className="form-heading">History</h1>
            <div className="table-header">
              <p className="table-title">Title</p>
              <p className="table-title">Amount</p>
              <p className="table-title">Type</p>
              <p className="null">{null}</p>
            </div>
            <ul className="list-container">
              {transactionList.map(eachItem => (
                <TransactionItem
                  key={eachItem.id}
                  transactionDetails={eachItem}
                  onDelete={this.onDelete}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
