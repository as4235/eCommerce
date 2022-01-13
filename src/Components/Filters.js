import React, { useEffect, useRef } from "react";

const Filters = () => {
  const dataRef = useRef("");
  useEffect(() => {
    console.log(dataRef.current?.innerText);
  }, []);

  return (
    <div style={{ margin: "20px" }}>
      <button
      /* onClick={() => {
            view === styles.list ? setView(styles.grid) : setView(styles.list);
          }} */
      >
        View
      </button>

      <h3>Category</h3>
      <div
        className="form-check" /* onClick={(e) => getByCategory(e.target.value)} */
      >
        <input ref={dataRef} value="qwe" />
        <p>{dataRef.current.value}</p>
        <input
          className="form-check-input"
          type="radio"
          name="jewelery"
          id="flexRadioDefault1"
          value="jewelery"
        />
        <label className="form-check-label" for="flexRadioDefault1">
          Jewelery
        </label>
      </div>
      <div
        className="form-check" /* onClick={(e) => getByCategory(e.target.value)} */
      >
        <input
          className="form-check-input"
          type="radio"
          name="jewelery"
          id="flexRadioDefault1"
          value="men's clothing"
        />
        <label className="form-check-label" for="flexRadioDefault1">
          Men's clothing
        </label>
      </div>
      <div
        className="form-check" /* onClick={(e) => getByCategory(e.target.value)} */
      >
        <input
          className="form-check-input"
          type="radio"
          name="jewelery"
          id="flexRadioDefault1"
          value="women's clothing"
        />
        <label className="form-check-label" for="flexRadioDefault1">
          Women's clothing
        </label>
      </div>
      <div
        className="form-check" /* onClick={(e) => getByCategory(e.target.value)} */
      >
        <input
          className="form-check-input"
          type="radio"
          name="jewelery"
          id="flexRadioDefault1"
          value="electronics"
        />
        <label className="form-check-label" for="flexRadioDefault1">
          Electronics
        </label>
      </div>
      <div>
        <button /* onClick={() => getLimitedProducts(5)} */>5</button>
        <button /* onClick={() => getLimitedProducts(10)} */>10</button>
      </div>
      <div>
        <button /* onClick={() => getSortedProducts("asc")} */>
          Low to High
        </button>
        <button /* onClick={() => getSortedProducts("desc")} */>
          High to Low
        </button>
      </div>
      <div>
        <button /* onClick={() => getProducts()} */>Show All</button>
      </div>
    </div>
  );
};

export default Filters;
