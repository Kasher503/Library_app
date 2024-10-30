import React, { useState, useEffect } from "react";
import axios from "axios";
import HorrorandSuspencebooks from "./HorrorandSuspencebooks";
import Thrillerbooks from "./Thrillerbooks";
import Programmingbooks from "./Programmingbooks";
import Famousbooks from "./Famousbooks";
import Sportsbooks from "./Sportsbooks";
import Book from "./Book";
import Hero from "./Hero";

const BookCollection = () => {


  return (
    <div className="">
      <HorrorandSuspencebooks />
      <Thrillerbooks />
      <Famousbooks  />
      <Programmingbooks />
      <Sportsbooks />
    </div>
  );
};

export default BookCollection;
