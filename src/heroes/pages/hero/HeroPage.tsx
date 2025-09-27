import React from "react";
import { useParams } from "react-router";

export const HeroPage = () => {
  const { slugId } = useParams();
  return <div>HeroPage {slugId}</div>;
};
