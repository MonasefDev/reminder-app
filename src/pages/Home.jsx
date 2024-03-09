import React from "react";
import styled from "styled-components";
import TableLayout from "../features/table/TableLayout";

function Home() {
  return (
    <StyledHome>
      <TableLayout />
    </StyledHome>
  );
}

const StyledHome = styled.div`
  padding: 20rem 2rem;
  overflow: hidden;
`;

export default Home;
