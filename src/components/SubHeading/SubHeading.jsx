import React from "react";
import styled from "styled-components";
import { images } from "../../constants";

const SubHeading = ({ title }) => {
  return (
    <Wrapper style={{ marginBottom: "1rem" }}>
      <p className="p-cormorant">{title}</p>
      <img src={images.spoon} alt="spoon" />
    </Wrapper>
  );
};

export default SubHeading;

const Wrapper = styled.div``;
