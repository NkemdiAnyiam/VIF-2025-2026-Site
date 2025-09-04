import React from 'react';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

type SearchEngineOptProps = {
  title: string;
  description?: string;
  structuredJSON?: string[];
  children?: JSX.Element | JSX.Element[];
  disableCanonicalUrl?: boolean;
};

// TODO: Incorporate keywords
export function SearchEngineOpt({ title, description, structuredJSON, children, disableCanonicalUrl = false }: SearchEngineOptProps) {
  const history = useHistory();

  const descriptionProp = description ? {content: description} : {}
  return (
    <Helmet>
      { /* Standard metadata tags */}
      <title>{title}</title>
      <meta name='description' {...descriptionProp} />
      {!disableCanonicalUrl && <link rel="canonical" href={`https://www.vizindustryfair.com${history.location.pathname}`} />}
      { /* End standard metadata tags */}
      { /* Facebook tags */}
      {/* <meta property="og:type" content={type} /> */}
      <meta property="og:title" content={title} />
      <meta property="og:description" {...descriptionProp} />
      { /* End Facebook tags */}
      { /* Twitter tags */}
      {/* <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={type} /> */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" {...descriptionProp} />
      { /* End Twitter tags */}
      {structuredJSON && structuredJSON.map(json => <script className='structured-data-list' type="application/ld+json">{json}</script>)}
      {children}
    </Helmet>
  );
}
