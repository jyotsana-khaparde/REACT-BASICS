import React from 'react';
import ReactDOM from 'react-dom';

// Example of functional component
function MyFunction() {
    return (
        <ol>
            <li>Banana</li>
            <li>Apple</li>
            <li>Orange</li>
        </ol>
    )
}

ReactDOM.render(<MyFunction/>, document.getElementById('root'))