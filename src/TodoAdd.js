import React from 'react'

class TodoAdd extends React.Component
{
    constructor(props)
    {
        super(props)
    }
    onAddSubmitted= ()=>
    {
        var nameInput = document.getElementById("txt1");
        var message = document.getElementById("textarea1");
        if(nameInput.value.length>0){
        var data = {name: nameInput.value, message : message.value}
        this.props.callbk(data);}
        else{alert("Name can never be empty");}
        nameInput.value="";
        message.value="";
    }
    render()
    {
        console.log(this.props.style);
        var m = this.props.style;
        return(<div style={m}><p><label>Name: </label><input type='text' id="txt1"></input></p>
        <p>
        <label>Message: </label>
        <textarea id="textarea1"></textarea>
        </p>
        <button onClick={this.onAddSubmitted}>Add</button>
        <button onClick={this.props.cancel}>Cancel</button>
        </div>);
    }
}
export default TodoAdd;