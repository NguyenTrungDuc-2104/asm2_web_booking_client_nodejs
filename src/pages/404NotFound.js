import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <div className="notFound_container">
      <h1>404</h1>
      <p>Not Found Page</p>
      <Link to="/">Back to Home page</Link>
    </div>
  );
};
export default NotFoundPage;
