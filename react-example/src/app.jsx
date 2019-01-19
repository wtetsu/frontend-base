import React from "react";
import ReactDOM from "react-dom";

class HelloReact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{ index: 0, text: "リスト0" }, { index: 1, text: "リスト1" }, { index: 2, text: "リスト2" }],
      inputText: ""
    };
  }
  render() {
    var list = this.state.list.map(a => <li key={"list" + a.index.toString()}>{a.text}</li>);
    return (
      <div>
        <h1>Hello React!!</h1>
        <input
          type="text"
          value={this.state.inputText}
          placeholder="write a comment..."
          onChange={this.changeText.bind(this)}
        />
        <button onClick={this.buttonPushed.bind(this)}>push me!</button>
        <ol>{list}</ol>
      </div>
    );
  }
  buttonPushed(e) {
    const list = this.state.list.concat([]);
    list.push({
      index: list.length,
      text: this.state.inputText
    });
    this.setState({ list });
  }
  changeText(e) {
    const inputText = e.target.value;
    this.setState({ inputText });
  }
}

ReactDOM.render(<HelloReact />, document.getElementById("root"));
