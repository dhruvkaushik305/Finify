import { useForm } from "react-hook-form";
import { loginInputs } from "../lib/definitions";
import Form from "./formPage";

export default function Page() {
  return (
    <section className="gap-5 flex justify-center flex-col items-center text-gray-700">
      <header className="text-2xl font-medium">Signup</header>
      <Form />
    </section>
  );
}
