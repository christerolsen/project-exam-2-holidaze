// src/pages/ProfilePage/index.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../../Container";
import UserInfo from "../../components/Profile/UserInfo";
import MyBookings from "../../components/Profile/MyBookings";
import MyVenues from "../../components/Profile/MyVenues";

const ProfilePage = () => {
  return (
    <Container>
      <UserInfo />
      <MyBookings />
      <MyVenues />
    </Container>
  );
};

export default ProfilePage;
