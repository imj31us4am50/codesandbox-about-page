import upperContentCSS from "/mainaboutpage/upperContent.css";

export default function upperContent() {
  return (
    <div
      className="container-fluid m-0 d-flex pt-5 for-about"
      style={upperContentCSS}
    >
      <div className="first-cont w-100">
        <h1 className="text-center mx-auto mt-3">
          Despre <span className="green">Nature Smarter</span>
        </h1>
      </div>
      <div className="second-cont w-100"></div>
    </div>
  );
}
