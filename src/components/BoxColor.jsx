export default function BoxColor(props) {
    const boxColorStyles = {
        border: "1px solid #000",
        margin: "10px",
        padding: "5px",
        display:"flex",
        flexDirection:"column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:`rgb(${props.r}, ${props.g}, ${props.b})`
      };
      function convertToHex(val) {
        const hex = val.toString(16).padStart(2, '0');
        return hex;
      }
  return (
    <div style= {boxColorStyles} >
        <p>rgb({props.r}, {props.g}, {props.b})</p>
        <p>#{convertToHex(props.r)}{convertToHex(props.g)}{convertToHex(props.b)}</p>
    </div>
  )
}
