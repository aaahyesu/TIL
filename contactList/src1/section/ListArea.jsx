import SearchCon from "../components/SearchCon";
import List from "../components/List";
import styled from "styled-components";

const Title = styled.h2`
  color: tomato;
`;

export default function ListArea() {
  return (
    <section className="ListArea">
      <Title hidden>리스트 영역</Title>
      {/* 검색기능영역 */}
      <SearchCon />
      <ul>
        <List />
        <List />
        <List />
        <List />
      </ul>
    </section>
  );
}
