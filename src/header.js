import './App.css';
import React from 'react';

class Head1 extends React.Component
{
    constructor()
    {
        super();
    }
    render()
    {
        return(
            <div className='appHeader'><h1>Todo App</h1>
            <p className='sideline'>Simple app to store notes</p>
            <p>This app depends on cookies to store values. Deleting cookies remove all notes</p>
            </div>
            
        );
    }
}

export default Head1;
