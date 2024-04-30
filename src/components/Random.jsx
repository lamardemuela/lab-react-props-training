export default function Random(props) {
    const randomStyles = {
        border: "1px solid #000",
        margin: "10px",
        padding: "5px",
        height: "32px",
        display:"flex",
        alignItems: "center"
      };
    let randomNumber = Math.round(Math.random()* (props.max - props.min) + props.min)
  return (
    <div style={randomStyles}>
        <p>Random value between {props.min} and {props.max}:   {randomNumber} </p>
    </div>
  )
}
