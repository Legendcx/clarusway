// import React, { useState } from 'react'
import {
  DetailContainer,
  DetailPart,
  HeaderContainer,
  ImgContainer,
  OtherPart,
} from "./Detail.style";
import { useState } from "react";
import diet from "../../assets/diet.svg";

const Detail = () => {
  const { state } = useState();
  return (
    <DetailContainer>
      <HeaderContainer>
        <h1>{state.label}</h1>
        <img src={diet} alt={diet} />
      </HeaderContainer>
      <DetailPart>
        <OtherPart>
          <h4>NUTRIENS</h4>
          <p>
            {state.totalNutrients.CA.label} :{" "}
            {Math.round(state.totalNutrients.CA.quantity)}
            {state.totalNutrients.CA.unit}
          </p>
          <p>
            {state.totalNutrients.CHOCDF.label} :{" "}
            {Math.round(state.totalNutrients.CHOCDF.quantity)}
            {state.totalNutrients.CHOCDF.unit}
          </p>
          <p>
            {state.totalNutrients.CHOLE.label} :{" "}
            {Math.round(state.totalNutrients.CHOLE.quantity)}
            {state.totalNutrients.CHOLE.unit}
          </p>
          <p>
            {state.totalNutrients.ENERC_KCAL.label} :{" "}
            {Math.round(state.totalNutrients.ENERC_KCAL.quantity)}
            {state.totalNutrients.ENERC_KCAL.unit}
          </p>
          <p>{state.totalWeight}</p>
          <p>Calories: {Math.round(state.calories)}</p>
          {state.digest.slice(0, 4).map((item, index) => (
            <p key={index}>
              {item.label} : {Math.round(item.total)}
            </p>
          ))}
        </OtherPart>
        <ImgContainer>
          <img src={state.image} alt="default" />
        </ImgContainer>
      </DetailPart>
      <ImgContainer>
        {state.ingredienntLines.map((ingredient, index) => (
          <div>
            <p>
              {index + 1}-{ingredient}
            </p>
          </div>
        ))}
      </ImgContainer>
    </DetailContainer>
  );
};

export default Detail;
