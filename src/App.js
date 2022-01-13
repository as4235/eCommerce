import React from "react";
import Grid from "@material-ui/core/Grid";
import ProductsList from "./Components/ProductsList";
import Filters from "./Components/Filters";
import ScrollEffect from "./Components/ScrollEffect";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Grid>
            <NavBar />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid>
            <ScrollEffect />
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <Grid>
            <Filters />
          </Grid>
        </Grid>
        <Grid item xs={10}>
          <Grid>
            <ProductsList />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid>
            <Footer />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
