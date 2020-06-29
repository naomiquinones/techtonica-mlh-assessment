import React from 'react';
import data from '../data';

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
                    addedDate={data.addedOn}
                  />
                </div>
              </>              
            );
        })}
    </>
  );
};

const Algorithm = ({name, moreDetails, imageUrl, description, averagePerformance, addedDate}) => {
  if(!name) return <div >No data</div>;
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
    </>
  );
};

export default Algorithms;