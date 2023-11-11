import { Card, CardContent, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ margin: "10%" }}>
      <h1>Employee Dashboard</h1><br /><br />
      <Grid container spacing={2}>
        {data.map((user, index) => {
          return (
            <Grid key={index} item xs={4}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography  sx={{ mb: 1.5 }} color="text.secondary">
                    {user.id}
                  </Typography>
                  <Typography variant="h5" component="div" >
                    {user.name}
                  </Typography>
                  <Typography variant="body2">
                    {user.email}
                    <br />
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Home;
