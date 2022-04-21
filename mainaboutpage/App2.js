import "./styles2.css";
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import UpperContent from "/mainaboutpage/upperContent.js";
import LowerContent from "/mainaboutpage/lowerContent.js";
import AskAQuestion from "/mainaboutpage/AskAQuestion.js";
import QuestionForm from "/mainaboutpage/questionForm.js";

export default function App1() {
  return (
    <div className="container-fluid pope m-0 p-0 mb-5">
      <UpperContent />
      <LowerContent />
      <AskAQuestion />
      <QuestionForm />
    </div>
  );
}
