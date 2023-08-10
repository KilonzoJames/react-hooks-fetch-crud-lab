import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [array, setArray] = useState([]);

  useEffect(() => {
    const url="http://localhost:4000/questions"
     fetch(url)
      .then((result) =>result.json())
      .then((result) =>setArray(result))
  },[])

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm array={array} setArray={setArray}/> : <QuestionList array={array} setArray={setArray}/>}
    </main>
  );
}

export default App;
