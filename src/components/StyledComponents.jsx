import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <Container>
      <Title>- Styled Components -</Title>
      <Button>FIGHT!!</Button>
    </Container>
  );
};

const Container = styled.div`
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

const Title = styled.p`
  color: green;
  transition: 0.5s;
  &:hover {
    transform: scale(2);
  }
`;

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
