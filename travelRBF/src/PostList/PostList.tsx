import "./list.css";
import List from "./List";

export default function PostList({
  list,
  setList,
}: {
  list: string[];
  setList: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  // 인덱스를 매개변수로 리스트에서 제거하기
  const handleDelete = (index: number) => {
    // filter를 사용하여 새로운 배열을 생성
    const updatedList = list.filter((_, i) => i !== index);
    // 변경된 배열을 로컬스토리지에 저장
    localStorage.setItem("travelList", JSON.stringify(updatedList));
    // 상태 업데이트
    setList(updatedList);
  };
  

  return (
    <ul className="postList mw">
      {list.map((item, index) => (
        <List
          key={index}
          item={item}
          onDelete={() => {
            handleDelete(index);
          }}
        />
      ))}
    </ul>
  );
}
