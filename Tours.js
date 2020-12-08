import React from 'react';
import Tour from './Tour';
const Tours = ({data}) => {
  return (
  <section>
    <div className="title">
      <h2>Todays Articles</h2>
      <div className="underline"></div>
    </div>
    <div>
      {data.articles.map((article) =>{
      return <Tour key={article.publishedAt} {...article}/>
      })}
    </div>
  </section>
  );
};
export default Tours;
