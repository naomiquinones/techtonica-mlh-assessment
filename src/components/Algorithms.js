import React from 'react';
import data from '../data';
import rewriteDate from '../utils/rewriteDate';

const Algorithms = (props) => {
  return (
    <>
      {data.map( (data, index) => {
          return (

              <div key={index} className="algorithm-card">
                <Algorithm 
                  name={data.name}
                  moreDetails={data.moreDetailsUrl}
                  imageUrl={data.imageUrl}
                  description={data.description}
                  averagePerformance={data.averagePerformance}
                  addedDate={rewriteDate(data.addedOn)}
                  pros={data.pros}
                  cons={data.cons}
                  stable={data.stable}
                />
              </div>
             
          );
      })}
    </>
  );
};

const Algorithm = ({name, moreDetails, imageUrl, description, averagePerformance, addedDate, pros, cons, stable}) => {
  if(!name) return <div >No data</div>;
  const prosList = pros.length ? pros.map((pro,index) => <li key={index}>{pro}</li>) : null;
  const consList = cons.length ? cons.map((con,index) => <li key={index}>{con}</li>) : null;
  const stability = stable ? "yes" : "no";

  return (
    <>
      <h2 className="algorithm-name">{name}</h2>
      <a className="moreDetails" 
        href={moreDetails}
        target="_blank"
        rel="noopener noreferrer"
      >
        {moreDetails}
      </a>
      <figure>
        <img className="algorithm-image" src={imageUrl} alt={name}/>
        <figcaption>{description}</figcaption>
      </figure>
      <p><span className="sectionTitle bigO">Average performance:</span> {averagePerformance}</p>
      <p><span className="sectionTitle date">Date added:</span> {addedDate}</p>
      <p><span className="sectionTitle pro">Pros:</span></p>
      <ul>{prosList}</ul>
      <p><span className="sectionTitle con">Cons:</span></p>
      <ul>{consList}</ul>
      <p><span className="sectionTitle stable">Stable:</span> {stability}</p>
    </>
  );
};

export default Algorithms;