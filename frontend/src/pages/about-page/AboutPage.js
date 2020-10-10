import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import AboutFeature from "../../components/about-feature/AboutFeature";
import AboutTeamMember from "../../components/about-team-member/AboutTeamMember";
import aboutData from './about-data';
import circle from './about-img/features/circle.png';
import Popup from "../../components/popup/Popup";

const AboutPage = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <Header/>

      <Popup/>

      <main>
        {/*About-intro*/}
        <section className="row about-intro">
          <div className="column-2 about-intro__picture">
            <img src={require('./about-img/about-1.png')} alt="about"/>
          </div>
          <div className="column-2 about-intro__text">
            <h2>О нас</h2>
            <p className="quote"><q>Станьте частью команды Fresh Arts Line и вы достигнете необычайных успехов!</q></p>
            <p className="founders">Алла и Андрей Мишаковы</p>
            <p className="text">Основатели академии талантов Fresh Arts Line, продюсеры, концертирующий саксофонисты, лауреаты и дипломанты международных конкурсов.</p>
          </div>
        </section>

      {/*Features*/}
        <section className="row about-features">

          {aboutData.aboutFeatures.map(aboutFeature => <AboutFeature key={aboutFeature.id} feature={aboutFeature} circle={circle}/>)}

        </section>
        {/*About Team*/}
        <section className="row about-team">
          <div className="container">
            <h2>Наша команда</h2>
            <div className="team-slider">
              <div className="team-slider__tape">
                {
                  aboutData.aboutTeam.map(teamMember => <AboutTeamMember key={teamMember.id} teamMember={teamMember}/>)
                }
                </div>
              <div className="dots">
                <div className="dots__item"></div>
                <div className="dots__item"></div>
                <div className="dots__item"></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  );
};

export default AboutPage;
