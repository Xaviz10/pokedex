import styled from "styled-components/native";

export const StyledCard = styled.TouchableWithoutFeedback.attrs({
  className: "StyledCard",
})`
  position: relative;
`;

export const StyledInnerContainerCard = styled.View.attrs({
  className: "StyledInnerContainerCard",
})`
position: relative;
  height: 116px;
  margin: 4px 8px
  padding: 4px
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  background-color: #FFFFFF;
  border-radius: 8px;
  
  shadow-color: #000;
  shadow-offset: 0px 1px;
  shadow-opacity: 0.25;
  shadow-radius: 2px;
  elevation: 1;
`;

export const StyledName = styled.Text.attrs({
  className: "StyledName",
})`
  font-weight: 400;
  font-size: 10px;
  line-height: 16px;
  text-transform: capitalize;
`;

export const StyledId = styled.Text.attrs({
  className: "StyledId",
})`
  position: absolute;
  top: 0;
  left: 100%;
  transform: translate(-20px, 0);

  color: #666666;
  font-weight: 400;
  font-size: 8px;
  line-height: 12px;
`;
