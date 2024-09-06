// eslint-disable-next-line react/prop-types

export default function List({ i, a, setModal, setNumber }) {
  return (
    <li
      key={i}
      onClick={() => {
        setModal(true);
        setNumber(i);
      }}
    >
      {a} - {i}
    </li>
  );
}
