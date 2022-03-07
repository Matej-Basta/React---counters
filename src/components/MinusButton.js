export function MinusButton(props) {
    return <button onClick={() => {if(props.count > 0) {props.setCount(props.count - 1)}}}>-</button>
}