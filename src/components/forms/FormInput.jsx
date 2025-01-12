export default function FormInput({ label, placeholder }) {
  return (
    <>
      <label htmlFor="">{label}</label>
      <input placeholder={placeholder}></input>
    </>
  );
}
