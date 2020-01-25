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

class Register extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      reagents: [],
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
  handleAddReagent(name, marker, model_num, capacity, price) {
    const url = 'http://127.0.0.1:3000/api/v1/reagents';

    const reagent = {
      name: 'hoge',
      marker: 'hoge',
      model_num: 111,
      capacity: 111,
      price: 111,
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
        {necessaryInfomation.map((info) => (
          <div>
            <Label>{info}</Label>
            <Input type="text" name={info} id={info} />
          </div>
        ))}
        <Button onClick={this.handleAddReagent}>登録</Button>
      </Content>
    );
  }
}

export default Register;
