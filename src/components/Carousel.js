import React from 'react';

export default function Carousel() {
  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
        <div className="carousel-inner">
          <div className="carousel-item active" style={{ zIndex: "10" }}>
            <img src="golden-retriever.jpg" className="d-block w-100" alt="Golden Retriever" />

            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center" style={{ zIndex: "20", bottom: '20%', top: 'auto' }}>
              <form className="d-flex w-75">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-info text-dark"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </div>

          <div className="carousel-item">
            <img src="pet.jpg" className="d-block w-100" alt="Pet" />
          </div>
          <div className="carousel-item">
            <img src="eating.jpg" className="d-block w-100" alt="Eating Pet" />
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
