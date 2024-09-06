import Button from "./Button";

export default function BtnCon({ cities, handleClick }) {
  return (
    <div>
      {cities.map((btnName, i) => (
        <Button
          key={i}
          name={btnName}
          handleClick={() => {
            handleClick(btnName);
          }}
        />
      ))}
    </div>
  );
}
