import React from 'react';
import "./Todo.css";

const Todo = props => {
    // 이것도 컴포넌트인가?
    return (
        <div className='Todo'>
            <div className={`text ${props.done && 'done'}`} onClick={props.clicked}>
                {props.title}
            </div>
            {props.done && <div className='done-mark'>&#x2713;</div>}
        </div>
    );
}
export default Todo;