import React ,{ Fragment, useState } from 'react';

import style from './style.module.css';

const QuestionAnswer = ({ question, answer }) => {
  const [ toogle, setToogle ] = useState(false);

  const questionHandleClick = (e) => {
    if (toogle) return setToogle(false);
    return setToogle(true);
  }

  const questionAnswerStyle = toogle ? style.question_answer + ' ' + style.collapse : style.question_answer;
  const questionStyle = toogle ? style.question + ' ' + style.collapse : style.question;
  const answerStyle = toogle ? style.answer + ' ' + style.collapse : style.answer;
  return (
    <Fragment>
      <div className={questionAnswerStyle}>
        <div className={questionStyle} onClick={questionHandleClick}>
          <p>{question}</p>
          <img src="/faq-accordion-card/icon-arrow-down.svg" />
        </div>
        <p className={answerStyle}>{answer}</p>
        
      </div>
      <hr className={style.divider} />
    </Fragment>
  );
}

export default QuestionAnswer;