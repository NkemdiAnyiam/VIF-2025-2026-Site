import React, { useState } from 'react';

export type QuestionBoxProps = {
  qNum: number;
  question: string;
  children: JSX.Element;
  color: 'red' | 'yellow' | 'green' | 'purple';
}

export function QuestionBox(props: QuestionBoxProps): JSX.Element {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`question-box${props.color ? ` question-box--${props.color}` : ''}`}>
      <div className="question-box__header" onClick={() => setExpanded(!expanded)}>
        <h3 className="heading-tertiary question-box__question">{props.qNum}. {props.question}</h3>

        <div className="dropdown-marker-container">
          <span className={`dropdown-marker${expanded ? ' dropdown-marker--up' : ''}`}></span>
        </div>
      </div>

      <div className="question-box__answer" hidden={!expanded ? true : false}>
        {props.children}
      </div>
    </div>
  );
}
