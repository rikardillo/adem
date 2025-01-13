export default function FormInput({ label, placeholder, id, type, onChange }) {
  return (
    <div className="flex w-full flex-col gap-1">
      <label htmlFor={id} className="left-2">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="rounded-lg border-2 border-solid border-adem-primary-500 p-2"
        onChange={onChange}
      ></input>
    </div>
  );
}
