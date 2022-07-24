import React from 'react';
import restaurant from "../images/restaurant.png"
import Common from '../components/Common';

export default function About() {
  return (
    <Common
      title="See how we get "
      coloredText="started ⌛"
      bodyText = {<>We welcome you to sit back, unwind and appreciate the lovely sights 
      and hints of the ocean while our best gourmet expert sets you up a scrumptious dinner 
      utilizing the best and freshest ingredients. ChillGrill legacy comes from The parent 
      Restaurant which was built up in 1963.
      <br />
      <br />
      ChillGrill was worked for people in general and has advanced into a combination between 
      exquisite chic and contemporary fine charge. Enjoy our dazzling dishes and make the 
      most of your eating background with us!</>}
      btnText="Contact Here 📞"
      btnLink="/contact"
      img={restaurant}
    />
  )
}