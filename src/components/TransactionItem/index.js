import './index.css'

const TransactionItem = props => {
  const {transactionDetails, onDelete} = props
  const {id, title, amount, type} = transactionDetails
  const deleteTransaction = () => {
    onDelete(id)
  }
  return (
    <li className="header">
      <p className="transaction-item">{title}</p>
      <p className="transaction-item">Rs {amount}</p>
      <p className="transaction-item">{type}</p>
      <button
        type="button"
        className="delete-button"
        onClick={deleteTransaction}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="del-image"
        />
      </button>
    </li>
  )
}

export default TransactionItem
