import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
    const [val, setVal] = useState("");
    const [fib, setFib] = useState(0);
    const [ans, setAns] = useState(0);

    useEffect(() => {
        axios.get('/api/hello').then(res => {
            setVal(res.data);
        }).catch(err => {
            console.log(err);
        })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            num: fib
        }
        axios.post('/worker/fib', data).then(res => {
            setAns(res.data.val);
        }).catch(err => {
            console.log(err);
        })
    }
    return (
        <div>
            <div><h1>Hello From React</h1></div>
            <div><h1>{ val }</h1></div>
            <br />
            <form onSubmit={handleSubmit}>
                <label><h2>Enter a number to get its Square from Worker Server: </h2></label><br/>
                <input type="number" name="num" onChange={e=>setFib(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
            <h2>Square of {fib} is {ans}</h2>
        </div>
    )
}

export default App;