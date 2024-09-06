import "./style/App.css";

import InputCon from "./section/InputCon";
import ListArea from "./section/ListArea";
import { useEffect, useState } from "react";
// import DetailModal from "./components/DetailModal";

function App() {
  const savedGroup = JSON.parse(localStorage.getItem("group")) || [
    "가족",
    "친구",
    "직장",
  ];
  const [group, setGroup] = useState(savedGroup);
  const savedContactList =
    JSON.parse(localStorage.getItem("contactList")) || [];
  const [contactList, setContactList] = useState(savedContactList);

  useEffect(() => {
    localStorage.setItem("group", JSON.stringify(group));
    localStorage.setItem("contactList", JSON.stringify(contactList));
  }, [group, contactList]);
  return (
    <main className="main">
      <h1>연락처 관리</h1>
      <InputCon group={group} />
      <ListArea />
      {/* <DetailModal /> */}
    </main>
  );
}

export default App;
