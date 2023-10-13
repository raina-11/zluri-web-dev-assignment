import mountainImage from "../images/mountains.png";
import forestImage from "../images/forest.png";
import oceanImage from "../images/ocean.png";
import desertImage from "../images/desert.png";
import React, { useState } from "react";
import styled from "styled-components";
import Dropdown from "./dropdown";

const imageMap = {
  Mountain: mountainImage,
  Forest: forestImage,
  Ocean: oceanImage,
  Desert: desertImage,
};

const ImageDropdown = () => {
  const [selected, setSelected] = useState("Forest");
  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <ImageDropdownContainer>
      <DropdownContainer>
        <Dropdown
          selected={selected}
          setSelected={setSelected}
          imageMap={imageMap}
          hoveredImage={hoveredImage}
          setHoveredImage={setHoveredImage}
        />
      </DropdownContainer>
      <ImageContainer>
        <img
          src={hoveredImage || imageMap[selected] || imageMap["Forest"]}
          alt="dropdown"
        />
      </ImageContainer>
    </ImageDropdownContainer>
  );
};
const ImageDropdownContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 20px;
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
  background: #e1e8f8;
  padding: 20px;
  margin: 20px;
  border-radius: 8px;
`;

const DropdownContainer = styled.div`
  margin: auto;
`;
const ImageContainer = styled.div`
  padding: 10px;
  margin: auto;
  img {
    justify-content: center;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #e8f0fc;
    background: #ffffff;
  }
`;

export default ImageDropdown;
