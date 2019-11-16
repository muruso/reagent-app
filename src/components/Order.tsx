import React from 'react';
import styled from 'styled-components';

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

interface MyProps {
  items: Array<any>;
}

interface MyState {
  orderItems: Array<any>;
  orderAmounts: Record<string, any>;
}

class Order extends React.Component<MyProps, MyState> {
  constructor(props) {
    super(props);
    this.state = {
      orderItems: [],
      orderAmounts: {},
    };
  }

  countUp = (id) => {
    const { orderAmounts } = this.state;
    if (orderAmounts[id] > 98) return;
    orderAmounts[id] += 1;
    this.setState({ orderAmounts });
  };

  countDown = (id) => {
    const { orderAmounts } = this.state;
    if (orderAmounts[id] < 2) return;
    orderAmounts[id] -= 1;
    this.setState({ orderAmounts });
  };

  addCart = (item) => {
    const { orderItems, orderAmounts } = this.state;
    if (orderAmounts[item.id]) return;
    const nextOrderItems = Object.assign([], orderItems);
    nextOrderItems.push(item);
    const nextOrderAmounts = Object.assign([], orderAmounts);
    nextOrderAmounts[item.id] = 1;
    this.setState({
      orderItems: nextOrderItems,
      orderAmounts: nextOrderAmounts,
    });
  };

  render() {
    const { items } = this.props;
    const { orderItems, orderAmounts } = this.state;
    return (
      <div>
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
            {items.map((item) => (
              <ReagentsTableBodyRow>
                <ReagentsTD>{item.name}</ReagentsTD>
                <ReagentsTD>Maker</ReagentsTD>
                <ReagentsTD>100ml</ReagentsTD>
                <ReagentsTD>{item.price}</ReagentsTD>
                <ReagentsTD>{item.left}</ReagentsTD>
                <ReagentsTD>
                  <button
                    type="button"
                    onClick={() => {
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
            {orderItems.map((item) => (
              <OrderTableRow key={item.id}>
                <OrderTableNameData>{item.name}</OrderTableNameData>
                <OrderTableAmountData>
                  <OrderTableAmount>
                    <button
                      type="button"
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
                      type="button"
                      onClick={() => {
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
      </div>
    );
  }
}

export default Order;
