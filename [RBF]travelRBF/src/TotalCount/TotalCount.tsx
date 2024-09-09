import "./totalCount.css";

export default function Total({ list }: { list: string[] }) {
  return (
    <div className="count mw">
      <strong>Total</strong>
      <span>{list.length}</span>
    </div>
  );
}
