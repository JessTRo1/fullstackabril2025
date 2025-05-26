function ErrorPage({ mensaje }) {
  return (
    <div style={{ color: "red" }}>
      <h2>Error</h2>
      <p>{mensaje || "Ha ocurrido un error."}</p>
    </div>
  );
}
export default ErrorPage;
