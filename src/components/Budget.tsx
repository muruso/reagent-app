import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  margin: 24px auto;

  width: 1080px;
  height: 500px;
`;

const Table = styled.table`
  margin: 16px auto;
  background: #f9f3f3;

  border-collapse: collapse;
  border-spacing: 0;

  width: 100%;
`;

const TableRow = styled.tr`
  height: 40px;
`;

interface MyProps {
  budget: Array<any>;
}

const Budget = (props: MyProps) => {
  const { budget } = props;
  return (
    <Content>
      <Table>
        <TableRow>
          <th>実験名</th>
          <th> - </th>
          <th> - </th>
        </TableRow>
        {budget.map((data) => (
          <TableRow>
            <td>{data.name}</td>
            <td>
              <button type="button">編集</button>
            </td>
            <td>
              <button type="button">印刷</button>
            </td>
          </TableRow>
        ))}
      </Table>
    </Content>
  );
};

export default Budget;
