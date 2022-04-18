import "./styles2.css";
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import UpperContent from "/mainaboutpage/upperContent.js";
import LowerContent from "/mainaboutpage/lowerContent.js";

export default function App1() {
  return (
    <div className="container-fluid pope m-0 p-0">
      <UpperContent />
    </div>
  );
}
