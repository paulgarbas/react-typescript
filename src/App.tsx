import React from 'react';
import TextField from './TextField';
import Counter from './Counter';

const App: React.FC = () => {
    const onChange = () => console.log("hello");

    return <div>
        {/* <TextField 
            text='hello'
            person={{ firstName: '', lastName: '' }} 
            handleChange={onChange}
        /> */}
        <Counter>
            {(count, setCount) => (
                <div>
                    { count }
                    <button onClick={() => setCount(count + 1)} >+</button>
                </div>
            )}
        </Counter>
    </div>
}

export default App;
