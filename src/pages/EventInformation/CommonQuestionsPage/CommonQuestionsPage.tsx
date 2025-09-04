import React from 'react';
// import { Link } from 'react-router-dom';
// import ReactDOMServer from 'react-dom/server';

import { SearchEngineOpt } from '../../../components/SearchEngineOpt/SearchEngineOpt';

import { Header } from '../../../components/Header/Header';
import { QuestionBox, QuestionBoxProps } from './QuestionBox/QuestionBox';
import { companyQAs, studentQAs, QA } from '../../../data/commonQuestions';
import { fairTimes } from '../../../data';

const renderQuestions = (items: QA[], color: QuestionBoxProps['color']) => {
  return items.map(({ question, content }, index) => {
    return (
      <li className="question-item" key={question}>
        <QuestionBox qNum={index + 1} question={question} color={color}>
          <div className="paragraphs">
            {content}
          </div>
        </QuestionBox>
      </li>
    );
  });
};

// const renderEntities = (items: QA[]) => {
//   return {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     "mainEntity": items.map(({question, content}) => {
//       console.log( ReactDOMServer.renderToString(content) );
//       return {
//         "@type": "Question",
//         "name": question,
//         "acceptedAnswer": {
//           "@type": "Answer",
//           "text": ReactDOMServer.renderToString(content)
//         }
//       }
//     })
//   };
// };

export function CommonQuestionsPage(): JSX.Element {
  return (
    <main className="common-questions-page">
      <SearchEngineOpt
        title={`Common Questions | Viz Industry Fair ${fairTimes.yearEnDashRange}`}
        description="Here are common questions from students and employers about the Viz Industry Fair. If you cannot find an answer, email us at pvfavizindustryfair@tamu.edu."
        // structuredJSON={JSON.stringify(renderEntities(studentQAs))}
      />

      <Header type="normal" imageName={'seated-group-photo-2-min'}>
        <h1 className="heading-primary">
          Common Questions
        </h1>
      </Header>

      <section className="section section--student-questions" id="student-questions">
        <div className="container">
          <h2 className="heading-secondary">Students</h2>
          <ul className="question-list">
            {renderQuestions(studentQAs, 'yellow')}
          </ul>
        </div>
      </section>

      <section className="section section--company-questions" id="company-questions">
        <div className="container">
          <h2 className="heading-secondary">Companies</h2>
          <ul className="question-list">
            {renderQuestions(companyQAs, 'red')}
          </ul>
        </div>
      </section>
    </main>
  );
}
