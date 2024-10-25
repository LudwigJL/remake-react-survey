import { useState } from "react";
import AnswersList from "./AnswersList";

export default function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [answers, setAnswers] = useState([]);

  const initialData = {
    color: "",
    spend_time: "",
    review: "",
    username: "",
    email: "",
  }

  const [surveyData, setSurveyData] = useState(initialData);

  function handleChange(event) {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    const inputType = event.target.type;
    console.log({ inputName, inputValue, inputType });
    console.log(answers);

    if (inputType === "radio" && inputName === "color") {
      setSurveyData({ ...surveyData, color: event.target });
    }
    if (inputType === "checkbox" && inputName === "spend-time") {
      setSurveyData({ ...surveyData, spend_time: inputValue });
    }
    if (inputName === "review") {
      setSurveyData({ ...surveyData, review: inputValue });
    }
    if (inputName === "username") {
      setSurveyData({ ...surveyData, username: inputValue });
    }
    if (inputName === "email") {
      setSurveyData({ ...surveyData, email: inputValue });
    }
  }

  function submitForm(event) {
    event.preventDefault();

    console.log("Form Submitted: ", { surveyData });
    setAnswers([...answers, surveyData]);

    //reset
    setSurveyData(initialData);
  }

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {console.log("answers being passed")}
        {console.log(answers)}
        <AnswersList AnswersList={answers}/>
      </section>

      <section className="survey__form">
        <form className="form" onSubmit={submitForm}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              <li>
                <input
                  id="color-one"
                  type="radio"
                  name="color"
                  value="1"
                  onChange={handleChange}
                />
                <label htmlFor="color-one">1</label>
              </li>

              <li>
                <input
                  id="color-two"
                  type="radio"
                  name="color"
                  value="2"
                  onChange={handleChange}
                />
                <label htmlFor="color-two">2</label>
              </li>
              <li>
                <input
                  id="color-three"
                  type="radio"
                  name="color"
                  value="3"
                  onChange={handleChange}
                />
                <label htmlFor="color-three">3</label>
              </li>

              <li>
                <input
                  id="color-four"
                  type="radio"
                  name="color"
                  value="4"
                  onChange={handleChange}
                />
                <label htmlFor="color-four">4</label>
              </li>
            </ul>
          </div>

          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="swimming"
                    onChange={handleChange}
                  />
                  Swimming
                </label>
              </li>

              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="bathing"
                    onChange={handleChange}
                  />
                  Bathing
                </label>
              </li>

              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="chatting"
                    onChange={handleChange}
                  />
                  Chatting
                </label>
              </li>

              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="noTime"
                    onChange={handleChange}
                  />
                  I dont like to spend time with it
                </label>
              </li>
            </ul>
          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea
              name="review"
              cols="30"
              rows="10"
              value={surveyData.review}
              onChange={handleChange}
            ></textarea>
          </label>

          <label>
            Put your name here (if you feel like it):
            <input
              type="text"
              name="username"
              value={surveyData.username}
              onChange={handleChange}
            />
          </label>

          <label>
            Leave us your email pretty please??
            <input
              type="email"
              name="email"
              value={surveyData.email}
              onChange={handleChange}
            />
          </label>

          <input
            className="form__submit"
            type="submit"
            value="Submit Survey!"
          />
        </form>
      </section>
    </main>
  );
}
