import "./App.css";
import Header from "./Header/Header";
import Input from "./Input/Input";
import Total from "./TotalCount/TotalCount";
import PostList from "./PostList/PostList";
import { useEffect, useState } from "react";

function App() {
  // eslint-disable-next-line prefer-const
  let [list, setList] = useState<string[]>([]);

  useEffect(() => {
    const localData = localStorage.getItem("travelList");
    if (localData) {
      setList(JSON.parse(localData));
    }
  }, []);
  return (
    <>
      <Header />
      <Input list={list} setList={setList} />
      <Total list={list} />
      <PostList list={list} setList={setList} />
    </>
  );
}

export default App;
