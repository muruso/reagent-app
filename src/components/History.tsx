import React from 'react';
import styled from 'styled-components';

const YearWrapper = styled.div`
  width: 1080px;
  margin: 32px auto 0;
`;
const Year = styled.div`
  width: 200px;
  height: 56px;

  text-align: center;

  color: #000000;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;

  background: #f9f3f3;
`;

const Content = styled.div`
  width: 1080px;
  height: 500px;
  background: #f9f3f3;

  margin: auto;
`;

const TableWrapper = styled.div`
  padding-top: 10px;
  box-sizing: border-box;
`;

const Table = styled.table`
  width: 1032px;

  margin: auto;

  border-collapse: collapse;
  border-spacing: 0;
`;

const TableHeaderRow = styled.tr`
  background: #22221e;
`;

const TableBodyRow = styled.tr`
  background: #f9f3f3;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(0, 0, 0, 0.24);
`;

const TableHeader = styled.th`
  height: 40px;
  font-size: 18px;
  color: #f9f3f3;
  text-align: left;
  padding-left: 10px;

  border: none;
  border-style: none;
`;

const TableData = styled.td`
  height: 27px;
  font-size: 14px;
  padding-left: 10px;
  font-style: normal;
  font-weight: bold;
  vertical-align: top;
  white-space: pre-wrap;
`;

interface MyProps {
  history: Array<any>;
}

const History = (props: MyProps) => {
  const { history } = props;
  return (
    <div>
      <YearWrapper>
        <Year>2019年度</Year>
      </YearWrapper>
      <Content>
        <TableWrapper>
          <Table>
            <TableHeaderRow>
              <TableHeader>発注日</TableHeader>
              <TableHeader>納品日</TableHeader>
              <TableHeader>発注者</TableHeader>
              <TableHeader>試薬名</TableHeader>
              <TableHeader>単価</TableHeader>
              <TableHeader>個数</TableHeader>
              <TableHeader>価格</TableHeader>
              <TableHeader>合計</TableHeader>
            </TableHeaderRow>
            {history.map((data) => (
              <TableBodyRow>
                <TableData>{data.orderDate}</TableData>
                <TableData>{data.deliveryDate}</TableData>
                <TableData>{data.name}</TableData>
                <TableData>
                  {data.reagents.map((reagent) => `${reagent.reagentName}\n`)}
                </TableData>
                <TableData>
                  {data.reagents.map((reagent) => `${reagent.unitPrice}\n`)}
                </TableData>
                <TableData>
                  {data.reagents.map((reagent) => `${reagent.number}\n`)}
                </TableData>
                <TableData>
                  {data.reagents.map((reagent) => `${reagent.price}\n`)}
                </TableData>
                <TableData>{data.totalPrice}</TableData>
              </TableBodyRow>
            ))}
          </Table>
        </TableWrapper>
      </Content>
    </div>
  );
};

export default History;
