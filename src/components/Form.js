import React from "react";
import {
  Form as BTForm,
  FormGroup,
  Input,
  Label,
  Col,
  Button,
} from "reactstrap";

const Form = ({
  name,
  category,
  amount,
  handleName,
  handleAmount,
  handleCategory,
  handleSubmitForm,
  handleClearExpenses,
}) => (
  <BTForm style={{ margin: 10 }} onSubmit={handleSubmitForm}>
    <FormGroup className="row">
      <Label for="exampleEmail" sm={2}>
        Title
      </Label>
      <Col sm={4}>
        <Input
          type="text"
          name="name"
          id="expenseName"
          placeholder="Name of expense"
          value={name}
          onChange={handleName}
        />
      </Col>
    </FormGroup>
    <FormGroup className="row">
      <Label for="exampleEmail" sm={2}>
        Category
      </Label>
      <Col sm={4}>
        <Input
          type="select"
          name="name"
          id="expenseName"
          placeholder="Category"
          value={category}
          onChange={handleCategory}
        >
          <option>Groceries</option>
          <option>Accommodation</option>
          <option>Uncategorised</option>
        </Input>
      </Col>
    </FormGroup>
    <FormGroup className="row">
      <Label for="exampleEmail" sm={2}>
        Date
      </Label>
      <Col sm={4}>
        <Input
          id="exampleDatetime"
          name="datetime"
          placeholder=""
          type="date"
        />
      </Col>
    </FormGroup>
    <FormGroup className="row">
      <Label for="exampleEmail" sm={2}>
        ₹ Amount
      </Label>
      <Col sm={4}>
        <Input
          type="number"
          name="amount"
          id="expenseAmount"
          placeholder="0.00"
          value={amount}
          onChange={handleAmount}
        />
      </Col>
    </FormGroup>
    <Button type="submit" color="primary">
      Add
    </Button>{" "}
    <Button type="submit" color="danger" onClick={handleClearExpenses}>
      Delete
    </Button>
  </BTForm>
);

export default Form;
