import upperContentCSS from "/mainaboutpage/upperContent.css";

export default function upperContent() {
  return (
    <div className="container-fluid m-0 p-0" style={upperContentCSS}>
      <div className="d-flex for-about p-2 m-0">
        <div className="container-of-desc w-100">
          <h1 className="text-center mx-auto">
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
    </div>
  );
}
