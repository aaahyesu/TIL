export default function InputEl({ inputName, inputId, placeholder, onChange }) {
  return (
    <>
      <label htmlFor="name">{inputName}</label>
      <input
        id={inputId}
        name={inputId}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
}
