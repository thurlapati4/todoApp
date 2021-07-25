import React from 'react'
import './App.css'
class PanelBut extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={number : this.props.index, name : this.props.data.name, selected : this.props.selected}
    }
    select= ()=>
    {
        var staObj = this.state;
        staObj.selected = true;
        this.setState(staObj);
        this.props.callbk1(this.props.index);
    }

    render()
    {
        var style = 'panelBut';
        if(this.props.selected)
        {
            style = 'selectedPanelBut'
        }
        return(<div className={style} onClick={this.select}>
            <p>{this.state.name}</p>
           
        </div>);
    }
}
export default PanelBut;