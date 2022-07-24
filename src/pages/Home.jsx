import React from 'react';
import headerImg from "../images/home-header.png"
import Common from '../components/Common';

export default function Home() {
  return (
    <Common
      title="Order Tasty & Fresh Food "
      coloredText="anytime 🍲"
      bodyText="Our job is to filling your tummy with delicious food and with fast and free delivery."
      btnText="See Our Menu 🍔"
      btnLink="/menu"
      img={headerImg}
    />
  )
}
