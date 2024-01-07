import React, { useState } from "react";
import styles from "./FormBook.module.scss";
import { Form } from "react-router-dom";
import { addUser } from "../../features/user/userSlice";
import { useDispatch } from "react-redux";

function FormUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch(addUser({name, email}))
    setName("")
    setEmail("")
  }

  return (
    <div className="w-full h-full bg-white-100 mt-[10rem] shadow-lg p-8 flex justify-between items-center">
      <div className={styles.formUser}>&nbsp;</div>

      <Form
        className="flex flex-col w-[52%] justify-between items-start "
      >
        <div className="w-full">
          <label htmlFor="name" className="text-lg">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-stone-400 p-3 rounded-md"
            placeholder="Enter name"
          />
        </div>

        <div className="ml-0 w-full mt-4">
          <label htmlFor="email" className="text-lg">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-stone-400 p-3 rounded-md"
            placeholder="Enter email"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="bg-stone-900 py-4 px-8 rounded-md text-stone-50 mt-8"
        >
          Create user
        </button>
      </Form>
    </div>
  );
}

export default FormUser;
