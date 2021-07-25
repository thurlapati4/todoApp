import React from 'react'

class TodoContent extends React.Component
{
    constructor(props)
    {
      super(props);
    }
    render()
    {
        return(
            <div className="contenter">
                <div>
                    <h2>{this.props.data.name}</h2>
                    <p>{this.props.data.message}</p>
                </div>
            </div>
        );
    }
}
 export default TodoContent;