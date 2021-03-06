import React from "react";
import BrowseContainer from "../containers/Browse";
import useContent from "../hooks/useContent";
import selectionFilter from "../utils/selectionFilter";

const Browse = () => {
  const { series } = useContent("series");
  const { films } = useContent("films");

  const slides = selectionFilter({ series, films });

  return <BrowseContainer slides={slides}></BrowseContainer>;
};

export default Browse;
