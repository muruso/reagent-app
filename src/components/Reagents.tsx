import React from 'react';
import styled from 'styled-components';

// interface MyProps {}
type MyProps = {
  load: Function;
  reagents: Array<Object>;
};

class Reagents extends React.Component<MyProps> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    // eslint-disable-next-line react/destructuring-assignment
    this.props.load();
  }

  render() {
    const { reagents } = this.props;

    console.error(this.props);

    return (
      <div>
        {reagents.length > 0
          && reagents.map((reagent) => (
            <div key={reagent.id}>
              <div>{reagent.name}</div>
            </div>
          ))}
      </div>
    );
  }
}

export default Reagents;
