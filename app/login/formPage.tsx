"use client";
import { useForm } from "react-hook-form";
import { loginInputs, loginSchema } from "../lib/definitions";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginInputs>({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit = (data: loginInputs) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify center gap-3 bg-gray-100 w-[95%] md:w-[90%] lg:w-[70%] p-5 rounded-xl"
    >
      <label className="w-full flex flex-col gap-2 text-lg">
        Email:{" "}
        <input
          type="email"
          placeholder="Enter your email here"
          {...register("email")}
          className="rounded-md p-2 focus:outline-none text-gray-700"
        />
        {errors.email && (
          <div className="text-red-500 text-sm">{errors.email.message}</div>
        )}
      </label>
      <label className="w-full flex flex-col gap-2 text-lg">
        Password:{" "}
        <input
          type="password"
          placeholder="Enter your secret"
          {...register("password")}
          className="rounded-md p-2 focus:outline-none text-gray-700"
        />
        {errors.password && (
          <div className="text-red-500 text-sm">{errors.password.message}</div>
        )}
      </label>
      <button
        type="submit"
        className="px-3 py-2 rounded-md bg-black text-white w-[60%] lg:w-[25%]"
      >
        Submit
      </button>
    </form>
  );
}
