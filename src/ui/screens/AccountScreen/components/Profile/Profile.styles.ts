import styled from "styled-components/native";

export const StyledContainerProfile = styled.View.attrs({
  className: "StyledContainerProfile",
})`
  position: relative;
  margin: auto;
  width: 100%;
  padding: 32px;
  display: flex;
  justify-content: flex-start;
  background-color: #ffffff;
  border-radius: 8px;

  shadow-color: #000;
  shadow-offset: 0px 1px;
  shadow-opacity: 0.25;
  shadow-radius: 2px;
  elevation: 1;
`;

export const StyledImageProfile = styled.Image.attrs({
  className: "StyledImageProfile",
})`
  position: absolute;
  top: -80px;
  left: 50%;
  margin: 0 auto;
  width: 130px;
  height: 130px;
  border-radius: 100%;
  transform: translateX(-35px);
`;

export const StyledLabel = styled.Text.attrs({
  className: "StyledLabel",
})`
  padding-top: 32px;
  padding-bottom: 8px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: #1d1d1d;
`;

export const StyledValue = styled.Text.attrs({
  className: "StyledValue",
})`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;

  color: #000000;
`;

export const StyledContainerButton = styled.View.attrs({
  className: "StyledContainerButton",
})`
  width: 100%;
  margin-top: 24px;
  padding-top: 16px;
  background-color: #ffffff;
  border-top-width: 1px;
  border-color: #e0e0e0;
`;
