import styled from "styled-components";
import Table from "../../ui/Table";
import Modal from "../../ui/Modal";
import Menus from "../../ui/Menus";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";

const Item = styled.div`
  text-align: center;
`;

function TableRow({ itemsRow }) {
  const key = Math.floor(Math.random() * 10 ** 6);

  const itemsRowArr = Object.keys(itemsRow).map((key) => itemsRow[key]);
  return (
    <Table.Row bgRed={+itemsRow.daysLeft < 2}>
      {itemsRowArr.map((itemValue) => (
        <Item key={itemValue + key}>{itemValue}</Item>
      ))}
      <div>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={itemsRow.id} />
            <Menus.List id={itemsRow.id}>
              <Menus.Button
                icon={<HiSquare2Stack />}
                // onClick={handleDuplicate}
                // disabled={isCreating}
              >
                Action
              </Menus.Button>

              <Modal.Open opens="edit">
                <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
              </Modal.Open>

              <Modal.Open opens="delete">
                <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
              </Modal.Open>
            </Menus.List>
          </Menus.Menu>
        </Modal>
      </div>
    </Table.Row>
  );
}

export default TableRow;
