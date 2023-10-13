import React, { useState } from "react";
import styled from "styled-components";
import dropdownIcon from "../images/dropdown-icon.svg";

const Dropdown = ({ selected, setSelected, imageMap, setHoveredImage }) => {
  const [isActive, setIsActive] = useState(false);
  const options = ["Mountain", "Forest", "Ocean", "Desert"];

  return (
    <DropdownContainer isActive={isActive}>
      <Dropdownbutton
        onClick={() => {
          setIsActive(!isActive);
          setSelected("Dropdown");
        }}
        isActive={isActive}
      >
        {selected}
        <span>
          <img src={dropdownIcon} alt="dropdown" />
        </span>
      </Dropdownbutton>
      {isActive && (
        <DropdownContent>
          {options.map((option) => (
            <DropdownItem
              onClick={() => {
                setSelected(option);
                setIsActive(false);
              }}
              onMouseEnter={() => {
                if (imageMap && imageMap[option]) {
                  setHoveredImage(imageMap[option]);
                }
              }}
              onMouseLeave={() => {
                if (imageMap && imageMap[option]) {
                  setHoveredImage(null);
                }
              }}
              key={option}
            >
              {option}
            </DropdownItem>
          ))}
        </DropdownContent>
      )}
    </DropdownContainer>
  );
};

const DropdownContainer = styled.div`
  width: 236px;
  height: 48px;
  user-select: none;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 160px;
  position: relative;
  border-radius: 8px;
  font-family: Lexend Medium;
  font-size: 16px;
  border: ${(props) =>
    props.isActive ? `1px solid #5287E8` : `1px solid #DDDDDD`};
`;
const Dropdownbutton = styled.div`
  padding: 10px;
  background: #fff;
  border-radius: 8px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: Lexend Medium;
  font-size: 16px;
  opacity: ${(props) => (props.isActive ? 0.5 : 1)};
  cursor: ${(props) => (props.isActive ? `default` : `pointer`)};
  height: 46px;
`;
const DropdownContent = styled.div`
  margin-top: 8px;
  padding: 10px;
  background: #fff;
  box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
  font-weight: 500;
  color: #333;
  width: 100%;
  font-family: Lexend Medium;
  font-size: 16px;
  border-radius: 8px;
`;
const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;
  transition: all 0.2s;
  border-radius: 8px;
  &:hover {
    background: #e1e8f8;
  }
  font-family: Lexend Medium;
  font-size: 16px;
`;

export default Dropdown;
