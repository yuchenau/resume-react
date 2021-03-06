import React from "react";
import styled from "styled-components";
import PortfolioCard from "./components/PortfolioCard";
import WeatherApp from "./images/weatherapp.png";

const Icon = styled.img`
  width: 40px;
  margin: 5px;
`;

const works = [
  {
    "title": "Weather App Refactoring with React Hooks",
    "introduction": "A real-time Weather Application developed with React Hooks (useReducer, useContext, etc.) and opensource Weather API.",
    "functions": "Search a specific City's Weather, Weather Prediction, etc.",
    "image": WeatherApp,
    "icons": [
      <Icon src="https://img.icons8.com/color/96/000000/css3.png"/>,
      <Icon src="https://img.icons8.com/color/96/000000/javascript.png"/>,
      <Icon src="https://img.icons8.com/color/96/000000/react-native.png"/>,
      <Icon src="https://img.icons8.com/color/96/000000/material-ui.png"/>,
      <Icon src="https://img.icons8.com/fluent/96/000000/api.png"/>,
      <Icon src="https://img.icons8.com/color/96/000000/amazon-web-services.png"/>
    ],
  },
]

export default function Portfolio(props) {
  return (
    <div>
      {works.map(work => (
        <PortfolioCard 
          key={work.title}
          title={work.title}
          introduction={work.introduction}
          functions={work.functions}
          image={work.image}
          icons={work.icons}
        />
      ))}
    </div>
  )
}
