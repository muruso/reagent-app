import React from "react";
import { render } from "react-dom";
import styled from "styled-components";

const Root = styled.div`
  height: 100%;
  background: #f0f0f0;
`;

const Header = styled.div`
  position: absolute;
  width: 1440px;
  top: 0;
  left: 0;
  height: 80px;
  background: #25253f;
`;

const HeaderTitleWrapper = styled.div`
  color: #e4e4e4;

  position: absolute;
  width: 301px;
  height: 56px;
  left: 0px;
  top: 12px;

  display: flex;
  align-items: center;
  text-align: center;
`;

const HeaderTitle = styled.span`
  text-align: center;
  font-family: Noto Sans CJK JP;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;

  margin-left: 50px;
`;

const Menu = styled.div`
  position: absolute;
  width: 200px;
  height: calc(100% - 78px);
  left: 0px;
  top: 78px;
  background: #22221e;
`;

const Content = styled.div`
  position: absolute;
  width: 1240px;
  height: calc(100% - 78px);
  top: 78px;
  left: 200px;
  background: #e0e0e0;
`;

const ContentHeader = styled.div`
  width: 194px;
  border-bottom: 2px solid #5a5a5a;
`;

const ReagentsTableHeader = styled(ContentHeader)`
  position: absolute;
  left: 80px;
  top: 20px;
`;

const ContentText = styled.p`
  font-family: Noto Sans CJK JP;
  font-style: normal;
  font-weight: bold;

  font-size: 18px;
  line-height: 27px;
`;

const ReagentsTable = styled.table`
  position: absolute;
  top: 105px;
  left: 80px;
  width: 675px;
  border-collapse: collapse;
  border-spacing: 0;
`;

const ReagentsTableRow = styled.tr`
  background: #22221e;
`;

const ReagentsTableBodyRow = styled.tr`
  background: #f9f3f3;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.24);
`;

const ReagentsTH = styled.th`
  height: 65px;
  font-size: 18px;
  color: #f9f3f3;
  text-align: left;
  padding-left: 10px;

  border: none;
  border-style: none;
`;

const ReagentsTD = styled.td`
  height: 65px;
  font-size: 14px;
  padding-left: 10px;
  font-style: normal;
  font-weight: bold;
`;

const FloatBox = styled.div`
  width: 360px;
  height: 700px;
  background: #f0f0f0;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
`;

const OrderFloatBox = styled(FloatBox)`
  position: absolute;
  right: 20px;
  top: 20px;
  height: 650px;
`;

const OrderTableHeader = styled(ContentHeader)`
  width: 320px;
  position: absolute;
  left: 20px;
  top: 0px;
`;

const OrderTable = styled.table`
  width: 320px;

  position: absolute;
  top: 85px;
  left: 20px;
`;

const OrderTableRow = styled.tr`
  height: 40px;
`;

const OrderTableData = styled.td`
  font-family: Noto Sans CJK JP;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;

  color: #000000;
`;

const OrderTableNameData = styled(OrderTableData)`
  width: 150px;
`;

const OrderTableAmountData = styled(OrderTableData)`
  width: 40px;
`;

const OrderTableAmount = styled.div`
  display: flex;
`;

const OrderTablePriceData = styled(OrderTableData)`
  text-align: right;
`;

const PrimaryButton = styled.button`
  height: 46px;
  font-family: Noto Sans CJK JP;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  color: #e8e8e8;
  background: #25253f;
`;

const OrderButton = styled(PrimaryButton)`
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
`;

interface MyState {
  items: Array<any>;
  orderItems: Array<any>;
  orderAmounts: Record<string, any>;
}

class App extends React.Component<MyState> {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          name: 'DEAE-Dextran',
          price: 122,
          left: 10
        },
        {
          id: 2,
          name: 'Polyethylenimine',
          price: 122,
          left: 10,
        },
        {
          id: 3,
          name: 'Folate PEG3-Azide',
          price: 122,
          left: 10,
        },
      ],
      orderItems: [],
      orderAmounts: {}
    };
  }

  countUp = id => {
    const orderAmounts = { ...this.state.orderAmounts };
    if (orderAmounts[id] > 98) return;
    orderAmounts[id]++;
    this.setState({ orderAmounts });
  };

  countDown = id => {
    const orderAmounts = { ...this.state.orderAmounts };
    if (orderAmounts[id] < 2) return;
    orderAmounts[id]--;
    this.setState({ orderAmounts });
  };

  addCart = item => {
    if (this.state.orderAmounts[item.id]) return;
    const orderItems = Object.assign([], this.state.orderItems);
    orderItems.push(item);
    const orderAmounts = Object.assign([], this.state.orderAmounts);
    orderAmounts[item.id] = 1;
    this.setState({ orderItems, orderAmounts });
  };

  render() {
    const { orderAmounts } = this.state;
    return (
      <Root>
        <Header>
          <HeaderTitleWrapper>
            <HeaderTitle>ReagentManagement</HeaderTitle>
          </HeaderTitleWrapper>
        </Header>
        <Menu />
        <Content>
          <ReagentsTableHeader>
            <ContentText>試薬リスト</ContentText>
          </ReagentsTableHeader>
          <ReagentsTable>
            <thead>
              <ReagentsTableRow>
                <ReagentsTH>試薬名</ReagentsTH>
                <ReagentsTH>メーカー</ReagentsTH>
                <ReagentsTH>内容量</ReagentsTH>
                <ReagentsTH>単価</ReagentsTH>
                <ReagentsTH>在庫数</ReagentsTH>
                <ReagentsTH> - </ReagentsTH>
              </ReagentsTableRow>
            </thead>
            <tbody>
              {this.state.items.map(item => (
                <ReagentsTableBodyRow>
                  <ReagentsTD>{item.name}</ReagentsTD>
                  <ReagentsTD>Maker</ReagentsTD>
                  <ReagentsTD>100ml</ReagentsTD>
                  <ReagentsTD>{item.price}</ReagentsTD>
                  <ReagentsTD>{item.left}</ReagentsTD>
                  <ReagentsTD>
                    <button
                      onClick={(e) => {
                        this.addCart(item);
                      }}
                    >
                      +
                    </button>
                  </ReagentsTD>
                </ReagentsTableBodyRow>
              ))}
            </tbody>
          </ReagentsTable>
          <OrderFloatBox>
            <OrderTableHeader>
              <ContentText>注文リスト</ContentText>
            </OrderTableHeader>
            <OrderTable>
              {this.state.orderItems.map(item => (
                <OrderTableRow key={item.id}>
                  <OrderTableNameData>{item.name}</OrderTableNameData>
                  <OrderTableAmountData>
                    <OrderTableAmount>
                      <button
                        onClick={(e) => {
                          this.countDown(item.id);
                        }}
                      >
                        -
                      </button>
                      <div style={{ margin: '0 10px' }}>
                        {orderAmounts[item.id]}
                      </div>
                      <button
                        onClick={(e) => {
                          this.countUp(item.id);
                        }}
                      >
                        +
                      </button>
                    </OrderTableAmount>
                  </OrderTableAmountData>
                  <OrderTablePriceData>12,800円</OrderTablePriceData>
                </OrderTableRow>
              ))}
            </OrderTable>

            <OrderButton>注文</OrderButton>
          </OrderFloatBox>
        </Content>
      </Root>
    );
  }
}

render(<App />, document.getElementById("app"));
