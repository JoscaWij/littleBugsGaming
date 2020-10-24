import React from "react";
import Card from "./../components/Card";
import cardImageSrc from "./assets/Platzhalter.jpg";

export default {
  title: "Site/Card",
  component: Card,
};

export const ExampleCard = () => (
  <Card imageSrc={cardImageSrc} gameName="GAME" isReady={false} />
);
