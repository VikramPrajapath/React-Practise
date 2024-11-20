import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  function submitButton(e) {
    e.preventDefault();
    console.log(name);
  }
  return (
    <div>
      <fieldset>
        <legend>Company Form</legend>
        <form>
          <label htmlFor="fname">First Name: </label>
          <input
            onChange={(e) => setName({ ...name, firstName: e.target.value })}
            type="text"
            id="fname"
            value={name.firstName}
          />
          <label htmlFor="lName">Last Name: </label>
          <input
            onChange={(e) => setName({ ...name, lastName: e.target.value })}
            type="text"
            id="lName"
            value={name.lastName}
          />
          <button onClick={(e) => submitButton(e)} type="submit">
            Add
          </button>
        </form>
      </fieldset>
    </div>
  );
}
