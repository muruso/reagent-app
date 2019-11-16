import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

import Order from './components/Order';
import History from './components/History';
import Budget from './components/Budget';

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

interface MyState {
  currentPage: string;
  items: Array<any>;
  history: Array<any>;
  budget: Array<any>;
}

class App extends React.Component<{}, MyState> {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'order',
      items: [
        {
          id: 1,
          name: 'DEAE-Dextran',
          price: 122,
          left: 10,
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
      history: [
        {
          orderDate: '2019/09/01',
          deliveryDate: '2019/09/28',
          name: '田村 崚',
          reagents: [
            {
              reagentName: 'DEAE-Dextran',
              unitPrice: '12,000',
              number: '12',
              price: '144,000',
            },
            {
              reagentName: 'Polyethylenimine',
              unitPrice: '24,000',
              number: '9',
              price: '216,000',
            },
            {
              reagentName: 'Folate PEG3-Azide',
              unitPrice: '33,000',
              number: '10',
              price: '330,000',
            },
          ],
          totalPrice: '660,000',
        },
        {
          orderDate: '2019/09/01',
          deliveryDate: '2019/09/28',
          name: '田村 崚',
          reagents: [
            {
              reagentName: 'DEAE-Dextran',
              unitPrice: '12,000',
              number: '12',
              price: '144,000',
            },
            {
              reagentName: 'Polyethylenimine',
              unitPrice: '24,000',
              number: '9',
              price: '216,000',
            },
            {
              reagentName: 'Folate PEG3-Azide',
              unitPrice: '33,000',
              number: '10',
              price: '330,000',
            },
          ],
          totalPrice: '660,000',
        },
        {
          orderDate: '2019/09/01',
          deliveryDate: '2019/09/28',
          name: '田村 崚',
          reagents: [
            {
              reagentName: 'DEAE-Dextran',
              unitPrice: '12,000',
              number: '12',
              price: '144,000',
            },
            {
              reagentName: 'Polyethylenimine',
              unitPrice: '24,000',
              number: '9',
              price: '216,000',
            },
            {
              reagentName: 'Folate PEG3-Azide',
              unitPrice: '33,000',
              number: '10',
              price: '330,000',
            },
          ],
          totalPrice: '660,000',
        },
      ],
      budget: [
        {
          id: 1,
          name: 'cell培養',
        },
        {
          id: 2,
          name: 'ペプチド合成',
        },
        {
          id: 3,
          name: 'トランスフェクション',
        },
      ],
    };
  }

  handleChangePage = (nextPage) => () => {
    this.setState({ currentPage: nextPage });
  };

  renderOrderHistory = () => (
    <div>
      <div>2019年度</div>
      <div
        style={{ width: '1080px', height: '500px', background: '#F9F3F3' }}
      />
    </div>
  );

  render() {
    const {
      // eslint-disable-next-line comma-dangle
      currentPage,
      items,
      history,
      budget,
    } = this.state;
    return (
      <Root>
        <Header>
          <HeaderTitleWrapper>
            <HeaderTitle>ReagentManagement</HeaderTitle>
          </HeaderTitleWrapper>
        </Header>
        <Menu>
          <button type="button" onClick={this.handleChangePage('order')}>
            注文
          </button>
          <button type="button" onClick={this.handleChangePage('history')}>
            発注履歴
          </button>
          <button type="button" onClick={this.handleChangePage('budget')}>
            実験予算
          </button>
        </Menu>
        <Content>
          {currentPage === 'order' && <Order items={items} />}
          {currentPage === 'history' && <History history={history} />}
          {currentPage === 'budget' && <Budget budget={budget} />}
        </Content>
      </Root>
    );
  }
}

render(<App />, document.getElementById('app'));
