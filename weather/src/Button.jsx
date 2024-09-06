export default function Button({ name, handleClick }) {
  if (name === "current") name = "현재 위치";
  if (name === "hongKong") name = "홍콩";
  if (name === "paris") name = "파리";
  if (name === "new york") name = "뉴욕";
  if (name === "seoul") name = "서울";
  return <button onClick={handleClick}>{name}</button>;
}
