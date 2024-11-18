import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="carousel overflow-hidden object-cover w-full my-3">
        <div id="slide1" className="carousel-item relative w-full h-[400px] object-cover overflow-hidden">
          <img className="mx-auto w-full"
            src="https://i.ibb.co.com/zG3SzK3/66cef8cb8c5a2591eb13943d-shndkbx7f2ta3qjw64xbm1pv6207ar1s.webp"/>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full h-[400px] object-cover overflow-hidden">
          <img
            src="https://i.ibb.co.com/TPh9Sh3/familyzippic-2.webp"
            className="mx-auto w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full h-[400px] object-cover overflow-hidden">
          <img
            src="https://i.ibb.co.com/D9ZkRNt/eco-tourism.jpg"
            className="mx-auto w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full h-[400px] object-cover overflow-hidden">
          <img
            src="https://i.ibb.co.com/qsSSDNn/Margaret-River-Eco-Adventures.jpg"
            className="mx-auto w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
