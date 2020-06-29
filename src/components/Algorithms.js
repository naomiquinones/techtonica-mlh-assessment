import React from 'react';
import data from '../data';

const Algorithms = () => {
  return (
    <>
      <div className="algorithm-card">
        {data.map( (algorithm, index) => {
            return (
              <>
                <h2 key={index}>{algorithm.name}</h2>
                <p>
                  <a
                    className="moreDetails"
                    href={algorithm.moreDetailsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {algorithm.moreDetailsUrl}
                  </a>
                </p>
                <figure>
                  <img className="algorithm-image" src={algorithm.imageUrl} alt={algorithm.name}/>
                  <figcaption>{algorithm.description}</figcaption>
                </figure>
                <p>Average performance: {algorithm.averagePerformance}</p>
              </>
            );
        })}
      </div>
    </>
  );
};

export default Algorithms;