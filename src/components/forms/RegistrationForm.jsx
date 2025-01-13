import { Form } from "react-router-dom";
import FormInput from "./FormInput";

const ContainerFormRow = ({ children }) => {
  return <div className="flex gap-4">{children}</div>;
};

export default function RegistrationForm() {
  return (
    <Form className="flex flex-col gap-2">
      <ContainerFormRow>
        <FormInput label={"Nombres"} placeholder={"Nombres"} type={"text"} />
        <FormInput
          label={"Apellidos"}
          placeholder={"Apellidos"}
          type={"text"}
        />
      </ContainerFormRow>
      <ContainerFormRow>
        <FormInput label={"Correo"} placeholder={"Correo"} type={"email"} />
        <FormInput
          label={"Cédula"}
          placeholder={"000-0000000-0"}
          type={"text"}
          pattern="\d{3}-\d{7}-\d{1}"
          inputMode="numeric"
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, "");
            if (value.length <= 11) {
              const formatted = value
                .replace(/(\d{3})(?=\d)/, "$1-")
                .replace(/(\d{7})(?=\d)/, "$1-");
              e.target.value = formatted;
            }
          }}
          maxLength={13} // accounts for the two hyphens
        />
      </ContainerFormRow>
    </Form>
  );
}
