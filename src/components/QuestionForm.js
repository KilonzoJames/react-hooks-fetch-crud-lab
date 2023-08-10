import React, { useState } from "react";

function QuestionForm({array, setArray}) {
  const [formData, setFormData] = useState({
    prompt: "",
    answers: ["", "", "", ""],
    correctIndex: 0,
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newwerArray=[...array,formData]
    setArray(newwerArray)
    console.log(newwerArray);
    setFormData({
      prompt: "",
      answers: ["", "", "", ""],
      correctIndex: 0,
    })
    addQuestions()
  }
  function addQuestions(){
    const url="http://localhost:4000/questions"
    const postData={
      method:"POST",
      headers:{
        "Content-Type": "application/json",
        Accept:"application/json"
      },
      body:JSON.stringify({
        prompt:formData.prompt,
        answers:[
          formData.answer1,
          formData.answer2,
          formData.answer3,
          formData.answer4
        ],
        correctIndex:formData.correctIndex
    })
    }
    return fetch(url, postData)
    .then((result) =>result.json())
    .then((result) =>console.log(result))
  }

  return (
    <section>
      <h1>New Question</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Prompt:
          <input
            type="text"
            name="prompt"
            value={formData.prompt}
            onChange={handleChange}
          />
        </label>
        <label>
          Answer 1:
          <input
            type="text"
            name="answer1"
            value={formData.answer1}
            onChange={handleChange}
          />
        </label>
        <label>
          Answer 2:
          <input
            type="text"
            name="answer2"
            value={formData.answer2}
            onChange={handleChange}
          />
        </label>
        <label>
          Answer 3:
          <input
            type="text"
            name="answer3"
            value={formData.answer3}
            onChange={handleChange}
          />
        </label>
        <label>
          Answer 4:
          <input
            type="text"
            name="answer4"
            value={formData.answer4}
            onChange={handleChange}
          />
        </label>
        <label>
          Correct Answer:
          <select
            name="correctIndex"
            value={formData.correctIndex}
            onChange={handleChange}
          >
            <option value="0">{formData.answer1}</option>
            <option value="1">{formData.answer2}</option>
            <option value="2">{formData.answer3}</option>
            <option value="3">{formData.answer4}</option>
          </select>
        </label>
        <button type="submit">Add Question</button>
      </form>
    </section>
  );
}

export default QuestionForm;
