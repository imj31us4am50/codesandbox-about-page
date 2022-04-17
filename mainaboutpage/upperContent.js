import upperContentCSS from "/mainaboutpage/upperContent.css";

export default function upperContent() {
  return (
    <div
      className="container-fluid m-0 p-0 d-flex pt-5 for-about"
      style={upperContentCSS}
    >
      <div className="container-of-desc w-100">
        <h1 className="text-center mx-auto mt-3">
          Despre <span className="green">Nature Smarter</span>
        </h1>
      </div>
      <div className="other-container w-100">
        <div className="collage">
          <img
            src="https://imj31us4am50.github.io/imgs/animal-collage.png"
            className="the-image"
          />
        </div>
      </div>
    </div>
  );
}
