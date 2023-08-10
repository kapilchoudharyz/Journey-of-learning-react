import {useReducer} from "react";

const initialStates = {count: 0, step: 1}

function reducer(curState, action) {
    switch (action.type) {
        case 'dec' : return {...curState, count: curState.count - curState.step}
        case 'inc': return {...curState, count: curState.count + curState.step}
        case 'setCount': return {...curState, count: action.payload}
        case 'setStep': return {...curState, step : action.payload}
        case 'reset': return {...curState, ...initialStates}
        default: throw new Error('Invalid action')
    }
}

function App() {
    return (
        <div className="App">
            <Counter/>
        </div>
    );
}

function Counter() {
    // const [count, setCount] = useState(0);
    const [state, dispatch] = useReducer(reducer, initialStates)
    // const [step, setStep] = useState(1);
    const {count, step} = state
    const date = new Date("june 21 2027");

    date.setDate(date.getDate() + count);
    const handleReset = function () {
        // setCount(0);
        // setStep(0);
        dispatch({type: 'reset'})
    };

    return (
        <>
            <div className="btns">
                <div>
                    <input
                        type="range"
                        min={0}
                        max={10}
                        value={step}
                        onChange={(e) => dispatch({type: 'setStep' ,payload: + e.target.value})}
                    />
                    <span>Step: {step}</span>
                    {/*<button className="plus" onClick={() => setStep((step) => step + 1)}>*/}
                    {/*  +*/}
                    {/*</button>*/}
                </div>
                <div>
                    <button
                        className="minus"
                        onClick={() => dispatch({type: 'dec'})}
                    >
                        -
                    </button>
                    <input
                        type="text"
                        value={count}
                        onChange={(e) => dispatch({type: 'setCount', payload: Number(e.target.value)})}
                    />
                    <button
                        className="plus"
                        onClick={() => dispatch({type: 'inc'})}
                    >
                        +
                    </button>
                </div>
                <p>
          <span>
            {count === 0
                ? "Today is"
                : count < 0
                    ? `${Math.abs(count)} days ago was`
                    : `${count} days after today is`}
          </span>
                    <span>{date.toDateString()}</span>
                </p>
                {count !== 0 || step !== 1 ? (
                    <div>
                        <button onClick={handleReset}>RESET</button>
                    </div>
                ) : null}
            </div>
        </>
    );
}

export default App;
