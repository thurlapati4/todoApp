import React from 'react'
import PanelBut from './PanelBut'
 class TodoPanel extends React.Component
 {
     
    constructor(props)
    {
        super(props)
        this.state={ selectedId: this.props.already, data: this.props.data};
        console.log(this.props.data);
    }
    
    render()
    {
        console.log("panel render is called");
        var JsonList = this.props.data;
        if(JsonList.length==0)
    return(<div className='empty'>
        No Todo note is created yet.
    </div>);
    else {
         var f = new Array(JsonList.length);
         for(var i=0;i<JsonList.length;i++)
         {
             f[i]=i;
            };
          var rend = f.map((index)=> {
                  var stasel=false; 
                  if(index===this.props.already)
                  {
                      console.log(index+" "+this.state.selectedId);
                      stasel=true;
                }
                return <PanelBut index={index} data={JsonList[index]} callbk1={this.props.todoSelect} selected={stasel}></PanelBut>
            }); 
          
            return(<div className='panel'><div onClick={this.props.add} className='addBut'>Add<p><b>+</b></p></div>{rend}</div>);
        }
    }
}

export default TodoPanel;