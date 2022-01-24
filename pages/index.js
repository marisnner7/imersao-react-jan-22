function Title(props) {
  const Tag = props.children;
  return(
    <h1> {props.children}</h1>
  );
}

function HomePage() {
  return(
    <div>
      <Title>Boas vindas de volta!</Title>
      <h2>Discord - Alura Matrix</h2>

      <style jsx>{`
      h1 {
        color: red;
        font-size: 24px;
        font-weight: 600;
      }
    `}</style>
    </div>

  )
}

export default HomePage