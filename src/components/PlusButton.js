export function PlusButton(props) {
    return <button onClick={() => props.setCount(props.count + 1)}>+</button>
}