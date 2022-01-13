import React from "react";
import { Rating } from "react-simple-star-rating";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingSkeleton = () => {
  const skeletonArray = [];

  const skeletonElement = (
    <Card
      style={{
        width: 300,
        margin: "10px",
        boxShadow: "0 4px 5px rgba(0,0,0,0.4)",
      }}
    >
      <CardHeader
        title={<Skeleton count={1} />}
        subheader={
          <Rating
            ratingValue={<Skeleton count={1} />}
            allowHover={false}
            size={20}
          />
        }
        style={{
          height: "200px",
        }}
      />
      <CardMedia image={<Skeleton count={1} />} />
      <CardContent>
        <Typography>{<Skeleton count={1} />}</Typography>
      </CardContent>
      <CardContent
        style={{
          marginBottom: "10px",
        }}
      >
        <Typography variant="body2" color="textSecondary" component="p">
          {<Skeleton count={6} />}
        </Typography>
      </CardContent>
    </Card>
  );

  for (let i = 0; i < 4; i++) {
    skeletonArray.push(skeletonElement);
  }

  return (
    <div
      style={{
        display: "flex",
        width: "1500px",
      }}
    >
      <div
        style={{
          display: "grid",
          textAlign: "center",
          gridTemplateColumns: "repeat(4, minmax(100px, 1fr))",
        }}
      >
        {skeletonArray}
      </div>
    </div>
  );
};

export default LoadingSkeleton;
