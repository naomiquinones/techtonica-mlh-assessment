import React from 'react';

function AlgorithmCard(props) {
  return (
    <div className="algorithm-card">
      <h2>{props.name}</h2>
      <p>
        <a
          className="moreDetails"
          href={props.moreDetailsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.moreDetailsUrl}
        </a>
      </p>
      <figure>
        <img className="algorithm-image" src={props.imageUrl} alt={props.name}/>
        <figcaption>{props.description}</figcaption>
      </figure>
      <p>Average performance: {props.averagePerformance}</p>
    </div>
  );
}
export default AlgorithmCard;