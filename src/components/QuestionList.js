import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({array,setArray}) {
  function handleDelete(questionObject){
    const newArray=array.filter((obj)=>obj!==questionObject) 
    setArray(newArray) 
    eraseFromServer(questionObject)}

  function eraseFromServer(question){
    const url=`http://localhost:4000/questions/${question.id}`
    const eraseData={
      method:"DELETE"}
      return fetch(url,eraseData)
      .then(res=>(res))
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul >
        {array.map(question=>{
        return <QuestionItem 
        key={question.id}
        question={question}
        onDelete={() => handleDelete(question)}
        />}
      )}</ul>
      <br/>
    </section>
  );
}

export default QuestionList;
