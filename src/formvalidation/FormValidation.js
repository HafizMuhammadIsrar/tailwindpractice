import React from "react";
import "./formvalidation.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store";
const schema = yup.object().shape({
  username: yup.string().required(),

  email: yup.string().email().required(),

  password: yup.string().min(8).max(32).required(),
});

const FormValidation = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(errors);

  return (
    <div className="formvalidation">
      <h1>Form validation</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            placeholder="Enter Name"
            name="username"
            {...register("username")}
          />
          <p>{errors.username?.message}</p>
        </div>

        <div>
          <input
            type="text"
            name="email"
            placeholder="Enter Email"
            {...register("email")}
            // ref={register({ required: "name is required" })}
          />
          <p>{errors.email?.message}</p>
        </div>

        <div>
          {" "}
          <input
            type="text"
            placeholder="Enter Passoword"
            name="password"
            {...register("password")}
            // ref={register({ required: "name is required" })}
          />
          <p>{errors.password?.message}</p>
        </div>
        <input type="submit" value="Submit" />
      </form>

      <p className="text-6xl text-green-500">Count: {count}</p>
      <button
        className="bg-blue-500 text-white p-1 rounded"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  );
};

export default FormValidation;
