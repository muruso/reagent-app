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
`;

interface MyProps {
  history: Array<any>;
}

interface MyState {}

class History extends React.Component<MyProps, MyState> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <YearWrapper>
          <Year>2019年度</Year>
        </YearWrapper>
        <Content>
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
            <TableBodyRow>
              <TableData>hoge</TableData>
              <TableData>hoge</TableData>
              <TableData>hoge</TableData>
              <TableData>hoge\n hoge</TableData>
              <TableData>hoge</TableData>
              <TableData>hoge</TableData>
              <TableData>hoge</TableData>
              <TableData>hoge</TableData>
            </TableBodyRow>
          </Table>
        </Content>
      </div>
    );
  }
}

export default History;
