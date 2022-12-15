import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
  let title = props.obj.title;
  let date = props.obj.date;
  let amount = props.obj.amount;

  const clickHandler = () => {
    title = 'Updated!';
  };

  return (
    <div className="expense-item">
      <ExpenseDate date={date}></ExpenseDate>
      <div className="expense-item__description">
        <h1>{title}</h1>
        <div className="expense-item__price">{amount}</div>
      </div>
      <button onClick={clickHandler}> Change Title </button>
    </div>
  );
};

export default ExpenseItem;
