import React ,{ Fragment, useState, useEffect, useRef } from 'react';

import style from './style.module.css';

const QuestionAnswer = ({ question, answer, handleClickQuestion, questionKey }) => {
  const toogle = question === questionKey;
  const questionAnswerStyle = toogle ? style.question_answer + ' ' + style.collapse : style.question_answer;
  const questionStyle = toogle ? style.question + ' ' + style.collapse : style.question;
  const answerStyle = toogle ? style.answer + ' ' + style.collapse : style.answer;

  const [height, setHeight] = useState({ answerHeight: 0, questionHeight: 0 });

  const containerRef = useRef();

  const resizeObserver = typeof window !== "undefined" ? new ResizeObserver(entries => {
    const questionHeight = entries[0].target.children[0].getBoundingClientRect().height;
    const answerHeight = entries[0].target.children[1].getBoundingClientRect().height;
    if (questionHeight !== height.questionHeight || answerHeight !== height.answerHeight) setHeight({ answerHeight, questionHeight })
  }) : null;

  const observer = useRef(
    resizeObserver
  );

  useEffect(() => {
    observer.current.observe(containerRef.current);
  })
  
  return (
    <Fragment>
      <div ref={containerRef} className={questionAnswerStyle} style={toogle ? {maxHeight: `${height.questionHeight + height.answerHeight}px`} : {maxHeight: `${height.questionHeight}px`}}>
        <div className={questionStyle} onClick={() => handleClickQuestion()}>
          <p>{question}</p>
          <img src="/frontendmentor/challenge/faq-accordion-card/icon-arrow-down.svg" />
        </div>
        <p className={answerStyle}>{answer}</p>
      </div>
      <hr className={style.divider} />
    </Fragment>
  );
}

export default QuestionAnswer;