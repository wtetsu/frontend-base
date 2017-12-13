import React from "react";
import ReactDOM from "react-dom";

class HelloReact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {index:0, text:"リスト0", conditionKey:"shopId", conditionValue:"123456789"},
            ],
            inputText: "",
        };
    }
    render() {
        //var list = this.state.list.map(a => <li key={"list"+a.index.toString()}>{a.text}</li>);
        var list = this.state.list.map(a => {
            return <tr key={"list"+a.index.toString()}>
                        <td><input type="text" value={a.conditionKey} /></td>
                        <td><input type="text" value={a.conditionValue} /></td>
                    </tr>;
        });
        return (
        <div>
            <h1>Hello React!!</h1>
            <input type="text" value={this.state.inputText} placeholder="write a comment..." onChange={this.changeText.bind(this)} />

            <table>
                <tbody>
                    <tr>
                        <th>Condition key</th>
                        <th>Condition value</th>
                    </tr>
                    {list}
                </tbody>
            </table>

            <button onClick={this.buttonPushed.bind(this)}>Add a line</button>

            <hr/>

            key:<input type="text" value={this.createKey()} disabled="disabled" />
            <button onClick={this.getCacheData.bind(this)}>Get</button>
            <button onClick={this.clearCacheData.bind(this)}>Clear</button>
            <br/>
            <br/>
            <br/>
            <br/>
            <textarea disabled="disabled">
            </textarea>
            
        </div>
        );
    }
    getCacheData(e) {
        alert('get');
    }
    clearCacheData(e) {
        if (confirm('clear?')) {
        }
    }
        
    buttonPushed(e) {
        this.state.list.push({
            index: this.state.list.length,
            text: this.state.inputText
        });
        this.setState(this.state);
    }
    changeText(e) {
        this.state.inputText = e.target.value;
        this.setState(this.state);
    }
    createKey() {
        //let cacheKey = this.state.list.map((a)=>a.conditionKey + ':' + a.conditionValue).join(',');
        //this.state.list.map((a)=>a).sort((a)=>a.conditionKey);
        // cacheKey = "";
        //let keys = this.state.list.map((a)=>a.conditionKey).sort();
        let list = this.state.list.map((a)=>a).sort((a)=>a.conditionKey);
        // for (let i = 0; i < list.length; i++) {
        //      let a = this.state.list[i];
        // }
        let cacheKey = '{' + list.map(a=>a.conditionKey + ':' + a.conditionValue).join(',') + '}';
        return cacheKey;
    }
}

ReactDOM.render(
<HelloReact />,
document.getElementById("root")
);
