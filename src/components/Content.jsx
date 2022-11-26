import { BsArrowRight } from "react-icons/bs";

function Content({ images }) {
  return (
    <div className="content-container">
      <div className="content-1">
        <h1>Modern interior</h1>
        <p>
          A full-Service residential & commercial interior design and staging
          company offering professional organizing & eco-services.
        </p>
        <a href="#">
          Read more <BsArrowRight />
        </a>
      </div>
      <div className="content-2">
        <div className="sub-content-1">
          <img src={images.photo1} />
        </div>
        <div className="sub-content-2">
          <div className="top">
            <img src={images.photo2} />
            <div>
              <p className="name">Aliza Webber</p>
              <p className="position">Interior designer</p>
            </div>
          </div>
          <div className="bottom">Designed in 2020 by Aliza Webber</div>
        </div>
      </div>
    </div>
  );
}

export default Content;
