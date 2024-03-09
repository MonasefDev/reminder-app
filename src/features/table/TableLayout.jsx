import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Table from "../../ui/Table";
// import { tableHeaderData } from "../../../db/data";
import { tableData } from "../../../db/data";
import TableRow from "./TableRow";
import Menus from "../../ui/Menus";
import TableOperations from "./TableOperations";
import { useSearchParams } from "react-router-dom";
import { differenceDays, refactorData, sortArray } from "../../utils/helpers";
function TableLayout() {
  const dataArray = refactorData(tableData);
  const [filteredTable, setFilteredTable] = useState(dataArray);
  const [tableHeaderData, setTableHeaderData] = useState([]);
  const [searchParams] = useSearchParams();
  // extract table header
  // CALCULATE DAYS LEFT
  // 1) FILTER

  // 2) SORT
  const sortBy = searchParams.get("sortBy") || "Name-asc";
  const [field, direction] = sortBy.split("-");

  useEffect(() => {
    const filtered = dataArray.map((item) => {
      const daysLeft = differenceDays(item.ExtensionDate);
      return { ...item, daysLeft: daysLeft };
    });

    const sortedTable = sortArray(filtered, field, direction);
    setTableHeaderData(
      Object.keys(sortedTable[0]).filter((key) => key !== "id")
    );
    setFilteredTable(sortedTable);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortBy, tableData]);

  return (
    <StyledTableLayout>
      <TableOperations data={filteredTable} />
      <TableContainer>
        <Menus>
          <Table
            columns={`repeat(${tableHeaderData.length}, minmax(22rem, 1fr)) 4rem`}
          >
            <Table.Header>
              {tableHeaderData.map((itemsHeader) => (
                <HeaderItem key={itemsHeader}>{itemsHeader}</HeaderItem>
              ))}
            </Table.Header>
            <Table.Body
              data={filteredTable}
              render={(itemsRow) => (
                <TableRow
                  key={Math.floor(Math.random() * 10 ** 6)}
                  itemsRow={itemsRow}
                />
              )}
            />
          </Table>
        </Menus>
      </TableContainer>
    </StyledTableLayout>
  );
}

const StyledTableLayout = styled.div`
  position: relative;
  padding: 2rem;
  background-color: var(--color-primary-2);
  border: 1px solid var(--color-lines);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  box-shadow: 0 0 0.5rem var(--color-lines);
  overflow: hidden;
`;

const TableContainer = styled.div`
  overflow: auto;
`;

const HeaderItem = styled.div`
  text-align: center;
`;

export default TableLayout;
