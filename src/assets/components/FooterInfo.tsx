import GithubIcon from "../GithubIcon";

const FooterInfo = () => {
    const githubUrl = "https://github.com/BertoRamosM"

  return (
    <div style={{ paddingTop: "1rem" }}>
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <GithubIcon />
        <p style={{ fontSize: "0.8rem" }}> Github | BertoRamosM</p>
      </a>
    </div>
  );
}

export default FooterInfo