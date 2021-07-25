import React from 'react'
import Head1 from './header'
import TodoAdd from './TodoAdd'
import TodoContent from './TodoContent'
import TodoPanel from './TodoPanel'
class TodoContainer extends React.Component
{
    constructor()
    {
        super()
        this.state={dataFound : true, add : "hidden", todoSelected: null};
    }
    onAddCancel= ()=>
    {
        var thisState= this.state;
        thisState.add = "hidden";
        this.setState(thisState);
    }
    retrieveData= ()=>
    {
        var m = document.cookie;
        if(m.length>0)
        {
        var cookieList = m.split(';');
        var JsonList = [];
        cookieList.forEach(function(ele){var k = ele.split('=')[1]; console.log(k); JsonList.push(JSON.parse(k))});
        return JsonList;
        }
        return [];
    }
    giveData= ()=>
    {
        var list = this.retrieveData();
        if(this.state.todoSelected!=null)
        return list[this.state.todoSelected];
        else
        return {result: -1};
    }
    onAddSelected= ()=>
    {
        var thisState= this.state;
        thisState.add = "visible";
        this.setState(thisState);
    }
    onAddSubmit= (data)=>
    {
        var obj = {name : data.name, message : data.message};
        var cook =data.name+"="+JSON.stringify(obj);
        document.cookie = cook;
        var thisState= this.state;
        thisState.add = "hidden";
        this.setState(thisState);
    }
   onTodoSelected= (int)=>
    {
        var thisState = this.state;
        thisState.todoSelected = int;
        this.setState(thisState);
    }
    render()
    {
        console.log('render is called');
        console.log(this.state.todoSelected);
        var styl = { visibility: this.state.add };
        return(<div>
            <Head1></Head1>
            <TodoPanel data={this.retrieveData()} add={this.onAddSelected} todoSelect={this.onTodoSelected} already={this.state.todoSelected} ></TodoPanel>
            <TodoContent data={this.giveData(this.state.todoSelected)}></TodoContent>
            <TodoAdd style={styl} cancel={this.onAddCancel} callbk={this.onAddSubmit}></TodoAdd>
        </div>);  
    }
}
export default TodoContainer;