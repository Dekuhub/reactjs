import React, { useState } from 'react';
import classes from './form.module.css';
import { Input } from './input'; 
import { Button } from './Button';

export const Form = () => {
  const [date, setDate] = useState('');
  const [comment, setComment] = useState('');
  const [sum, setSum] = useState('');
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = () => {
    if (date && comment && sum) {
      const newExpense = { date, comment, sum };
      setExpenses([...expenses, newExpense]);
      setDate('');
      setComment('');
      setSum('');
    }
  };

  return (
    <div className={classes.form}>
      <div>
        <h2>Расходы</h2>
        <table className={classes.table}>
          <thead>
            <tr>
              <th>Дата</th>
              <th>Комментарий</th>
              <th>Сумма</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => (
              <tr key={index}>
                <td>{expense.date}</td>
                <td>{expense.comment}</td>
                <td>{expense.sum}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div>
          <label>Дата:</label>
          <Input type="date" className={classes.input} value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div>
          <label>Комментарий:</label>
          <Input type="text" className={classes.input} value={comment} onChange={(e) => setComment(e.target.value)} />
        </div>
        <div>
          <label>Сумма:</label>
          <Input type="text" className={classes.input} value={sum} onChange={(e) => setSum(e.target.value)} />
        </div>

        <Button className={classes.button} onClick={handleAddExpense}>Добавить</Button>
      </div>
    </div>
  );
};