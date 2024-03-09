import { createContext, useContext } from "react";
import styled from "styled-components";

const StyledTable = styled.div`
  border: 1px solid var(--color-lines);
  margin: 0 auto;
  font-size: 1.4rem;
  border-radius: 7px;
  width: max-content;
  overflow: hidden;
`;

const CommonRow = styled.div`
  /* background-color: var(--color-primary-2); */
  display: grid;
  width: max-content;
  grid-template-columns: ${(props) => props.columns};
  column-gap: 2.4rem;
  align-items: center;
  transition: none;
`;

const StyledHeader = styled(CommonRow)`
  padding: 1.6rem 2.4rem;

  border-bottom: 1px solid var(--color-lines);
  letter-spacing: 0.4px;
  font-weight: 600;
  background-color: var(--color-primary-3);

  color: var(--color-white);
`;

const StyledRow = styled(CommonRow)`
  padding: 1.2rem 2.4rem;

  background-color: ${(props) =>
    props.$bgRed ? "var(--color-remider)" : "transparent"};
  color: ${(props) => (props.$bgRed ? "white" : "var(--color-grey-1)")};
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-lines);
  }
`;

const StyledBody = styled.section``;

const Footer = styled.footer`
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  padding: 1.2rem;

  /* This will hide the footer when it contains no child elements. Possible thanks to the parent selector :has 🎉 */
  &:not(:has(*)) {
    display: none;
  }
`;

const Empty = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`;

const TableContext = createContext();

function Table({ columns, children }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <StyledTable role="table">{children}</StyledTable>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <StyledHeader role="row" columns={columns} as="header">
      {children}
    </StyledHeader>
  );
}
function Row({ children, bgRed }) {
  const { columns } = useContext(TableContext);
  return (
    <StyledRow $bgRed={bgRed} role="row" columns={columns}>
      {children}
    </StyledRow>
  );
}

function Body({ data, render }) {
  if (!data) return null;
  if (!data.length) return <Empty>No data to show at the moment</Empty>;

  return <StyledBody>{data.map(render)}</StyledBody>;
}

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Footer = Footer;

export default Table;
