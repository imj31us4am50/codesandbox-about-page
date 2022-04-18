import lowerContentCSS from "/mainaboutpage/lowerContent.css";

export default function lowerContent() {
  return (
    <div
      className="container-fluid m-0 p-0 lower-content"
      style={lowerContentCSS}
    >
      <div className="container-of-video m-0 p-0">
        <video
          src="https://imj31us4am50.github.io/NSEDITEDVIDS/animal-video-for-home-page.mp4"
          className="home-main-video"
          muted
          autoPlay
        />
      </div>
    </div>
  );
}
