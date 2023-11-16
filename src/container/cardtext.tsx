import React from "react";

export default function Cardtext() {
  return (
    <>
      <main className="container">
        <section className="card">
          <div className="product-image">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/900px-Facebook_Logo_%282019%29.png"
              // https://i.ibb.co/cNWqxGx/red.png
              alt="OFF-white Red Edition"
              draggable={false}
            />
          </div>
          <div className="product-info">
            <h2>Nike X OFF-white</h2>
            <p>The 10: Air Jordan 1 off-white - Chicago</p>
            <div className="price">$999</div>
          </div>
          <div className="btn">
            <button className="buy-btn">Buy Now</button>
            <button className="fav">
              <svg
                className="svg"
                id="i-star"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z" />
              </svg>
            </button>
          </div>
        </section>

        <section className="card card-blue">
          <div className="product-image">
            <img
              src="https://i.ibb.co/0JKpmgd/blue.png"
              alt="OFF-white Blue Edition"
              draggable={false}
            />
          </div>
          <div className="product-info">
            <h2>Nike X OFF-white</h2>
            <p>Air Jordan 1 Retro High "Off-White - UNC" sneakers</p>
            <div className="price">$1599</div>
          </div>
          <div className="btn">
            <button className="buy-btn">Buy Now</button>
            <button className="fav">
              <svg
                className="svg"
                id="i-star"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z" />
              </svg>
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
