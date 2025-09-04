import React from 'react';
import { Link } from 'react-router-dom';

import { SearchEngineOpt } from '../../components/SearchEngineOpt/SearchEngineOpt';

import { VifLogoMark } from '../../components/iconComponents';
import { fairTimes } from '../../data';

type ErrorPageProps = {
  message: string;
}

export function ErrorPage(props: ErrorPageProps): JSX.Element {
  return (
    <main className="error-page">
      <SearchEngineOpt
        title={`${props.message} | Viz Industry Fair ${fairTimes.yearEnDashRange}`}
        disableCanonicalUrl
        // description="The Viz Industry Fair is an opportunity for students and alumni to connect with prospective employers in leading industries AND receive professional feedback."
      />
      <section className="section section--error">
        <div className="container">
          <div className="error">
            <Link to="/"><VifLogoMark className="error__logo-mark" /></Link>
            <p className="error__message">{props.message}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
