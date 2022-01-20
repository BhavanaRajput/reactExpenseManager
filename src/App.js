import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import List from "./components/List";
import Form from "./components/Form";

function App() {
  const ALL_EXPENSES = localStorage.getItem("expenses")
    ? JSON.parse(localStorage.getItem("expenses"))
    : [];

  const [expenses, setExpenses] = useState(ALL_EXPENSES);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Uncategorised");

  const handleName = (event) => {
    console.log("Name ", event.target.value);
    setName(event.target.value);
  };

  const handleAmount = (event) => {
    console.log("Amount ", event.target.value);
    setAmount(event.target.value);
  };

  const handleCategory = (event) => {
    console.log("Category ", event.target.value);
    setCategory(event.target.value);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    if (name !== "" && amount > 0) {
      const expense = { name, amount };
      setExpenses([...expenses, expense]);

      setName("");
      setAmount("");
      setCategory("Uncategorised");
    } else {
      console.log("Invalid expense name or the amount");
    }
  };

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const handleClearExpenses = () => {
    setExpenses([]);
  };
  return (
    <Container>
      <h3 className="display-6" className="text-center">
        Expense Tracker React App
      </h3>
      <div className="text-center">
        <p>
          Total Expense:
          <span className="text-success">
            ₹{" "}
            {expenses.reduce((accumulator, currentValue) => {
              return (accumulator += parseInt(currentValue.amount));
            }, 0)}
          </span>
        </p>
      </div>
      <Form
        name={name}
        amount={amount}
        category={category}
        handleName={handleName}
        handleAmount={handleAmount}
        handleCategory={handleCategory}
        handleSubmitForm={handleSubmitForm}
        handleClearExpenses={handleClearExpenses}
      />
      <List expenses={expenses} />
    </Container>
  );
}

export default App;
