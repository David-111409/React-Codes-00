import "./style.css";
import { useContext, useState } from "react";
import { createContext } from "react";
import MyComponent from "./MyComponent";
export const LoanContext = createContext({
  type: "",
  id: "",
  value: "",
  handleChange: null,
  value: "",
  labelText: "",
});
const globalContext = createContext({
  name: "",
  age: "",
  phone: "",
});
function Modal({ content, error = true }) {
  return (
    <div className="overlay">
      <div className="modal">
        <h1
          style={{
            color: error ? "red" : "white",
            padding: "10px",
            background: "green",
          }}
        >
          {content}
        </h1>
      </div>
    </div>
  );
}

function Loan({ title }) {
  const [showModal, setShowModal] = useState(false);
  const useGlobalContext = useContext(globalContext);

  const [form, setForm] = useState({
    name: useGlobalContext.name,
    age: useGlobalContext.age,
    phone: useGlobalContext.phone,
    isEmployee: false,
    salary: "",
  });

  function handleName(e) {
    setForm({ ...form, name: e.target.value });
  }
  function handlePhone(e) {
    setForm({ ...form, phone: e.target.value });
  }
  function handleAge(e) {
    setForm({ ...form, age: e.target.value });
  }
  function handleIsEmployee(e) {
    setForm({ ...form, isEmployee: e.target.checked });
  }
  function handleSalarySelect(e) {
    setForm({ ...form, salary: e.target.value });
  }
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <h1>{title}</h1>

      <form
        style={{ opacity: showModal ? ".2" : "1" }}
        className="App"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(form);
          setShowModal(true);
          setTimeout(() => {
            setShowModal(false);
          }, 2000);
        }}
      >
        <h1 className="title">Requesting A Loan</h1>
        <LoanContext.Provider
          value={{
            type: "text",
            id: "name",
            value: form.name,
            handleChange: handleName,
            value: form.name,
            labelText: "Name:",
          }}
        >
          <MyComponent />
        </LoanContext.Provider>

        <LoanContext.Provider
          value={{
            type: "text",
            id: "phone",
            handleChange: handlePhone,
            value: form.phone,
            labelText: "Phone Number:",
          }}
        >
          <MyComponent />
        </LoanContext.Provider>
        <LoanContext.Provider
          value={{
            type: "text",
            id: "age",
            handleChange: handleAge,
            value: form.age,
            labelText: "Age:",
          }}
        >
          <MyComponent />
        </LoanContext.Provider>
        <LoanContext.Provider
          value={{
            type: "checkbox",
            id: "checkbox",
            handleChange: handleIsEmployee,
            value: form.isEmployee,
            labelText: "Are you an employee?",
          }}
        >
          <MyComponent />
        </LoanContext.Provider>

        <label id="select">Salary:</label>
        <select name="salary" value={form.salary} onChange={handleSalarySelect}>
          <option value="">-- Choose your salary range --</option>
          <option>Less than 500$</option>
          <option>Between 500$ and 2000$</option>
          <option>Above than 2000$</option>
        </select>
        <button
          id="submit"
          disabled={Object.values(form).some((value) => !value)}
        >
          submit
        </button>
      </form>
      {showModal && (
        <Modal
          error={
            !(+form.age >= 18 && form.age <= 100) ||
            !(form.phone.length >= 10 && form.phone.length <= 12)
          }
          content={
            !(form.phone.length >= 10 && form.phone.length <= 12)
              ? "The phone number is not allowed to submit it must be between 10 and 12 digits"
              : !(+form.age >= 18 && form.age <= 100)
              ? "The age is not allowed to submit"
              : "The form is submitted successfully"
          }
        />
      )}
    </div>
  );
}
export default function App() {
  return (
    <globalContext.Provider
      value={{ name: "Dawoud", age: "24", phone: "01001111111" }}
    >
      <Loan title={"A Loan Project"} />
    </globalContext.Provider>
  );
}
// Input.js file
import { useContext } from "react";
import { LoanContext } from "./App";
function Input() {
  const InputContxt = useContext(LoanContext);

  return (
    <>
      <label htmlFor={InputContxt.id}>{InputContxt.labelText}</label>
      <input
        type={InputContxt.type}
        id={InputContxt.id}
        name={InputContxt.labelText}
        value={InputContxt.value}
        onChange={InputContxt.handleChange}
      />
    </>
  );
}

export default Input;

// MyComponent.jsx

import Input from "./Input";
function MyComponent({ obj }) {
  return <Input obj={obj} />;
}

export default MyComponent;

// styles.css
body {
  background-color: black;
  user-select: none;
}
.App {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: lightblue;
  padding-bottom: 20px;
  width: 90%;
  margin: 0 auto;
  border-radius: 25px;
}

input,
select {
  width: 70%;
  height: 32px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: none;
}

label {
  display: inline-block;
  margin-bottom: 8px;
  font-size: 20px;
  text-align: center;
  width: 70%;
  font-weight: bold;
}

h1.title {
  border-bottom: 2px solid whitesmoke;
  padding-bottom: 10px;
}

button#submit {
  height: 40px;
  font-size: 24px;
  border-radius: 8px 16px;
  border: none;
  cursor: pointer;
}
button#submit:disabled {
  cursor: not-allowed;
}
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%; /* same as .App width */
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 128, 0, 0.9);
  color: white;
  padding: 10px;
  border-radius: 20px;
  text-align: center;
  font-size: 1.4rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  z-index: 10;
}

.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
}
