import React from 'react'

export default function Greetings(props) {
    const greetingsStyles = {
        border: "1px solid #000",
        margin: "10px",
        padding: "5px",
        height: "32px",
        display:"flex",
        alignItems: "center"
      };
  return (
    <div style={greetingsStyles}>
        {props.lang === "de" && <p>Hallo <span>{props.children}</span></p>}
        {props.lang === "en" && <p>Hello <span>{props.children}</span></p>}
        {props.lang === "fr" && <p>Bonjour <span>{props.children}</span></p>}
        {props.lang === "es" && <p>Hola <span>{props.children}</span></p>}
    </div>
  )
}
