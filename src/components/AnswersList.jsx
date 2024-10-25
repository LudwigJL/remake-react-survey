import AnswersItem from "./AnswersItem";
import PropTypes from 'prop-types';


export default function AnswersList(props) {

  console.log("AnswersList: ", props);

  const { answersList } = props;

  return (
    <ul>

      {console.log("outside")}

      {answersList?.map((answerItem, i) => (
        <li key={i}>
          <AnswersItem answerItem={answerItem} key={i} />
        </li>
      ))}
    </ul>
  );
}

AnswersList.propTypes = {
  answersList: PropTypes.array
};
