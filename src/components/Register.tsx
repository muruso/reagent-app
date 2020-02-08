/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
import React from 'react';
import styled from 'styled-components';
// import request from 'superagent';
import axios from 'axios';
import { promises } from 'dns';

const Content = styled.div`
  margin: 24px auto;
  width: 1080px;
  height: 500px;
`;

const Form = styled.form``;

const Label = styled.label``;

const Input = styled.input``;

const Button = styled.button``;

interface MyProps {}

interface MyState {
  name: any;
  maker: any;
  modelNum: any;
  // eslint-disable-next-line camelcase
  model_num: any;
  capacity: any;
  price: any;
  reagents: Array<any>;
}

class Register extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      reagents: [],
      name: '',
      maker: '',
      modelNum: '',
      model_num: '',
      capacity: '',
      price: '',
    };
  }

  getInitialState() {
    // return {reagentData[]};
  }

  componentDidMount() {}

  fetchReagents() {
    const url = 'http://127.0.0.1:3000/api/v1/reagents';
    fetch(url).then((res) => {
      this.setState({ reagents: res.json() });
    });
  }

  // eslint-disable-next-line camelcase
  handleAddReagent() {
    const url = 'http://127.0.0.1:3000/api/v1/reagents';

    console.error(this.state);

    // const {
    //   // eslint-disable-next-line camelcase
    //   name,
    //   maker,
    //   // eslint-disable-next-line camelcase
    //   model_num,
    //   capacity,
    //   price,
    // } = this.state;

    const reagent = {
      name: this.state.name,
      maker: this.state.maker,
      model_num: this.state.model_num,
      capacity: this.state.capacity,
      price: this.state.price,
    };

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        reagent,
      }),
      headers: new Headers({ 'Content-type': 'application/json' }),
    }).then(() => {
      // alert('good');
    });
  }

  render() {
    // const reagents = this.fetchReagents();

    const necessaryInfomation = [
      'name',
      'maker',
      'model_num',
      'capacity',
      'price',
    ];
    // console.error(reagents);
    return (
      <Content>
        <div>
          {/* {reagents.map((reagent) => (
            <div>{reagent}</div>
          ))} */}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.error(e);
          }}
        >
          {necessaryInfomation.map((info) => (
            <div>
              <Label>{info}</Label>
              <Input
                type="text"
                name={info}
                id={info}
                onChange={(e) => {
                  const temp = {};
                  temp[`${info}`] = e.target.value;
                  this.setState(temp);
                }}
              />
            </div>
          ))}
        </form>
        <Button onClick={this.handleAddReagent.bind(this)}>登録</Button>
      </Content>
    );
  }
}

export default Register;
