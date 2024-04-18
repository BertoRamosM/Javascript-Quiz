
const FooterInfo = () => {
    const githubUrl = "https://github.com/BertoRamosM"

  return (
    <div style={{ paddingTop: "1rem" }}>
      <a href={githubUrl} target="_blank" rel="noopener noreferrer">
        <p style={{ fontSize: "0.8rem" }}> © BertoRamosM</p>
      </a>
    </div>
  );
}

export default FooterInfo