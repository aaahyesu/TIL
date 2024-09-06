import "./list.css";

// 데이터값을 item으로 가져와 PostList에 뿌림
export default function List({
  item,
  onDelete,
}: {
  item: string;
  onDelete: () => void;
}) {
  return (
    <li className="list">
      <p>{item}</p>
      <i className="fa-solid fa-trash" onClick={onDelete}></i>
    </li>
  );
}
