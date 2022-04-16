import upperContentCSS from "/mainaboutpage/upperContent.css";

export default function upperContent() {
  return (
    <div className="container-fluid">
      <div className="d-flex text-white for-about p-2 m-0">
        <div className="container-of-desc">
          <h1>Despre noi</h1>
        </div>
        <div className="container-of-pic"></div>
      </div>
    </div>
  );
}
