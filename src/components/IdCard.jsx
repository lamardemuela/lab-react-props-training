export default function IdCard(props) {
  //creamos estilos del div
  const IdCardStyles = {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: "16px",
    border: "1px solid #000",
    margin: "16px",
    padding: "12px",
  };
  const infoIdCardStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  };

  const infoTextCardStyles = {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    height: "24px"
  };
  return (
    <div style={IdCardStyles}>
      <img src={props.picture} alt={props.firstName} />
      <div style={infoIdCardStyles}>
        <div style={infoTextCardStyles}>
          <p style={{ fontWeight: "bold" }}>First name:</p>
          <span> {props.firstName}</span>
        </div>
        <div style={infoTextCardStyles}>
          <p style={{ fontWeight: "bold" }}>Last name:</p>
          <span> {props.lastName}</span>
        </div>
        <div style={infoTextCardStyles}>
          <p style={{ fontWeight: "bold" }}>Gender:</p>
          <span> {props.gender}</span>
        </div>
        <div style={infoTextCardStyles}>
          <p style={{ fontWeight: "bold" }}>Height:</p>
          <span> {props.height}</span>
        </div>
        <div style={infoTextCardStyles}>
          <p style={{ fontWeight: "bold" }}>Birth:</p>
          <span> {props.birth}</span>
        </div>
      </div>
    </div>
  );
}
