import React from "react";
import SortBy from "../../ui/SortBy";
import styled from "styled-components";
import { HiOutlineBellAlert } from "react-icons/hi2";

function TableOperations({ data }) {
  // calculate number of remiders
  const remindersNumber = data.filter((item) => item.daysLeft < 2).length;
  return (
    <SteledOperations>
      <ReminderContainer>
        <HiOutlineBellAlert />
        <span>{remindersNumber}</span>
      </ReminderContainer>
      <div>Filter</div>
      <SortBy
        options={[
          { value: "Name-asc", label: "Sort by name (A-Z)" },
          { value: "Name-desc", label: "Sort by name (Z-A)" },
          { value: "id-asc", label: "Sort by id (A-Z)" },
          { value: "id-desc", label: "Sort by id (Z-A)" },
          { value: "daysLeft-asc", label: "Sort by days left (fewest first)" },
          { value: "daysLeft-desc", label: "Sort by days left (most first)" },
          {
            value: "deposit-asc",
            label: "Sort by deposit date (oldest first)",
          },
          {
            value: "deposit-desc",
            label: "Sort by deposit date (newest first)",
          },
        ]}
      />
    </SteledOperations>
  );
}

const SteledOperations = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 4rem;
`;

const ReminderContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 4rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: white;
  svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-1);
  }
  span {
    position: absolute;
    top: -1rem;
    right: -1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-remider);
    font-size: 1.2rem;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
  }
`;

export default TableOperations;
