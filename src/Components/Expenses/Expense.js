import './Expense.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';

const Expense = (props) => {
  console.log(props.expense);
  return (
    <Card className="expenses">
      {props.expense.map((exp) => {
        console.log(exp);
        return <ExpenseItem key={exp.id} obj={exp} />;
      })}
    </Card>
  );
};
export default Expense;
