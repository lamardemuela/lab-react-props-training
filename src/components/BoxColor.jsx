export default function BoxColor(props) {
    const boxColorStyles = {
        border: "1px solid #000",
        margin: "10px",
        padding: "5px",
        display:"flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:`rgb(${props.r}, ${props.g}, ${props.b})`
      };
  return (
    <div style= {boxColorStyles} >
        <p>rgb({props.r}, {props.g}, {props.b})</p>
    </div>
  )
}
