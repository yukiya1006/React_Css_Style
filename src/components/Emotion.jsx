/** @jsxRuntime classic*/
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
  const containerStyle = css`
    width: 500px;
    height: 100px;
    border: solid 2px blue;
    border-radius: 50px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 10px;
  `;

  const titleStyle = css({
    color: "green",
    transition: "0.5s"
  });
  return (
    <div css={containerStyle}>
      <p css={titleStyle}>- Emotion -</p>
      <Button>FIGHT!!</Button>
    </div>
  );
};

const Button = styled.button`
  border: none;
  background-color: skyblue;
  border-radius: 50px;
  color: white;
  &:hover {
    background-color: red;
    cursor: pointer;
  }
`;
