import React from 'react';
import ReactDom from 'react-dom';
import Condition from './components/demo/Condition.jsx';
import Loop from './components/demo/Loop.jsx';
import Event from './components/demo/Event.jsx';
import Form from './components/demo/Form.jsx';

ReactDom.render(
    (
        <div>
            {/*<Condition isImportant={true} />*/}
            {/*<Loop />*/}
            {/*<Event />*/}
            <Form />
        </div>
    ),
    document.getElementById('root')
);
