import React, { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import styles from "../CSS/App.module.css";
import LoadingSkeleton from "./LoadingSkeleton";

const ProductsList = () => {
  useEffect(() => {
    getProducts();
  }, []);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [view, setView] = useState(styles.grid);

  const getProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  /* const getByCategory = async (category) => {
    const res = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    const data = await res.json();
    setProducts(data);
  };

  const getLimitedProducts = async (limit) => {
    const res = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);
    const data = await res.json();
    setProducts(data);
  };

  const getSortedProducts = async (order) => {
    const res = await fetch(`https://fakestoreapi.com/products?sort=${order}`);
    const data = await res.json();
    setProducts(data);
  }; */

  const productsList = products.map((product) => (
    <Card className={styles.products}>
      <CardHeader
        title={product.title}
        subheader={
          <Rating
            ratingValue={product.rating.rate}
            allowHover={false}
            size={20}
          />
        }
        className={styles.title}
      />
      <CardMedia className={styles.media} image={product.image} />
      <CardContent>
        <Typography>${product.price}</Typography>
      </CardContent>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {product.description}
        </Typography>
      </CardContent>
    </Card>
  ));

  return (
    <div className={styles.parent}>
      <div className={styles.child}>
        {loading ? <LoadingSkeleton /> : productsList}
      </div>
    </div>
  );
};
export default ProductsList;
