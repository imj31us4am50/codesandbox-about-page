import "./styles2.css";
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "/navbar/App1.js";
import UpperContent from "/mainaboutpage/upperContent.js";

export default function App1() {
  return (
    <div className="container-fluid pope">
      <Header />
      <UpperContent />
    </div>
  );
}
