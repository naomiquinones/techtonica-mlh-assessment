import React from 'react';
import data from '../data';
import rewriteDate from '../utils/rewriteDate';

const Algorithms = () => {
  return (
    <>
        {data.map( (data, index) => {
            return (
              <>
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
                  />

                </div>
              </>              
            );
        })}
    </>
  );
};

const Algorithm = ({name, moreDetails, imageUrl, description, averagePerformance, addedDate, pros, cons}) => {
  if(!name) return <div >No data</div>;
  const prosList = pros.length ? pros.map(pro => <li>{pro}</li>) : null;
  const consList = cons.length ? cons.map(con => <li>{con}</li>) : null;

  return (
    <>
      <h2>name</h2>
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
      <p>Average performance: {averagePerformance}</p>
      <p>Date added: {addedDate}</p>
      <p>Pros:</p>
      <ul>{prosList}</ul>
      <p>Cons:</p>
      <ul>{consList}</ul>

    </>
  );
};

export default Algorithms;