export default function SelectEl({ selectId, inputName, onChange, options }) {
  return (
    <>
      <label htmlFor={selectId}>{inputName}</label>
      <select name={selectId} id={selectId} onChange={onChange}>
        {options.map((option, i) => {
          <option value={option} key={i}>
            {option}
          </option>;
        })}
      </select>
      <button>추가</button>
    </>
  );
}
