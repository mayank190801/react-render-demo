import { useState } from "react";

const UseMemo = () => {

    //do all this stuff at one place, and wrap it up for sure 
    const [counter, setCounter] = useState(0);
    const [compute, setCompute] = useState(0);

    //now when use puts input, simply compute this thing

    const updateComputeHandler = (event) => {
        const val = parseInt(event.target.value);
        if (val > 1000) return;
        let sum = 0;
        for (let i = 1; i <= val; i++) {
            sum += i;
        }
        console.log(sum);
        setCompute(sum);
    }

    return <div>
        <input type="text" onChange={updateComputeHandler}></input>
        <div>Sum is {compute}</div>
        <button onClick={() => { setCounter(counter + 1) }} >Counter {counter}</button>
    </div>
}

export default UseMemo;