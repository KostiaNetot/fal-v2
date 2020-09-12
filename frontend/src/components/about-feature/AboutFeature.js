import React from 'react';

const AboutFeature = (props) => {
  const { circle, feature } = props;

  return (
    <div className="about-features__item">
      <div className="text">
        <h3>{ feature.title }<span style={{ background: `url(${circle}) center no-repeat` }}></span></h3>
        <p>{ feature.description }</p>
      </div>
      <div className="picture">
        <img src={feature.img} alt="why-us"/>
      </div>
    </div>
  );
};

export default AboutFeature;
