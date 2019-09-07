import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: "",
      num2: ""
    }
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
  }

  setNum1 = (event) => {
    this.setState({
      num1: event.target.value
    })
  }

  setNum2 = (event) => {
    this.setState({
      num2: event.target.value
    })
  }

  sum = () => {
    var num1 = parseFloat(this.state.num1);
    var num2 = parseFloat(this.state.num2);

    return num1 + num2;
  }

  render() {
    return (
     

      <div className="d-flex justify-content-center mt-5">
        <div className="card col-md-4 shadow p-0">
          <div className="card-header bg-info">
            Tính tổng 2 số
           </div>
          <div className="card-body">
            <input className="form-control text-success text-right" type="text" autoFocus onChange={this.setNum1} value={this.state.num1} placeholder="Số hạng"/>
            <div>+</div>
            <input className="form-control text-success text-right" type="text" onChange={this.setNum2} value={this.state.num2} placeholder="Số hạng" />
          </div>
          <div className="card-footer">
            <input className="form-control text-danger text-right border-0 " type="text" readOnly value={this.sum()} />
          </div>
        </div>
      </div>

    )
  }
}