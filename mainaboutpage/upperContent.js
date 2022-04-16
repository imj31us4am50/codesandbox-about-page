import upperContentCSS from "/mainaboutpage/upperContent.css";

export default function upperContent() {
  return (
    <div className="container-fluid" style={upperContentCSS}>
      <div className="d-flex text-white for-about p-2 m-0">
        <div className="container-of-desc w-100 bg-danger">
          <h1 className="text-center mx-auto">
            Despre <span className="green">Nature Smarter</span>
          </h1>
        </div>
        <div className="container-of-pic w-100 bg-success"></div>
      </div>
    </div>
  );
}
