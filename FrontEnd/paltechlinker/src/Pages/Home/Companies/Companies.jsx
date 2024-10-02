import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import Colors from "../../../Assets/Colors/Colors";
import { useNavigate } from "react-router-dom";
import CompanyCard from "./CompanyCard";
import CustomButton from "../../../CommonComponents/CustomButton";

const companies = [
  {
    id: 1,
    logo: "",
    name: "ITG Software, Inc.",
    address: "Nablus, Nablus Al-Jadeeda",
  },
  {
    id: 2,
    logo: "",
    name: "Foothill Technology Solutions.",
    address: "Nablus, Faisal street",
  },
  {
    id: 3,
    logo: "",
    name: "Fratello Software House.",
    address: "Nablus, Nablus Tower",
  },
  {
    id: 4,
    logo: "",
    name: "Harri.",
    address: "Ramallah, Al-bireh",
  },
  {
    id: 5,
    logo: "",
    name: "EXALT Technologies Ltd.",
    address: "Ramallah, Masyoun, Naji Al-Ali Street",
  },
  {
    id: 6,
    logo: "",
    name: "ProGineer Technologies.",
    address: "Ramallah, CGC Building.",
  },
];

const Companies = () => {
  const navigate = useNavigate();
  const handleCardClick = (id) => {
   
    navigate(`/company/${id}`);
  };
  const handleShowMore = () => {
    navigate(`/company`);
  };

  return (
    <Container
      maxWidth="100%"
      sx={{
        backgroundColor: Colors.background,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        paddingBottom: 5,
        paddingTop: 5,
      }}
    >
      {/* Title */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          marginBottom: 5,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "'Cairo', sans-serif",
            fontWeight: "bold",
          }}
        >
          Companies
        </Typography>
        <span
          style={{
            content: '""',
            display: "block",
            width: 160,
            height: "4px",
            backgroundColor: Colors.secondary,
            position: "absolute",
            bottom: "-10px",
          }}
        />
      </Box>

      {/* Company Cards */}
      <Grid container spacing={4} justifyContent="center">
        {companies.slice(0, 6).map((company, index) => (
          <Grid item xs={12} sm={6} md={4} key={company.id}>
            <CompanyCard company={company} index={index} onClick={() => handleCardClick(company.id)} />
          </Grid>
        ))}
      </Grid>

      {/* Show More Button */}
      <CustomButton
        text="Show More"
        onClick={handleShowMore}
        fullWidth={false}
      />
    </Container>
  );
};

export default Companies;
