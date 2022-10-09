/* eslint-disable @next/next/no-img-element */
import React from "react";
import WorkHeader from "../../components/Work-header";
import MainLayout from "../../layouts/main";
import { WorkTwoColumn } from "../../components/Work-Two-Column";

const Work1 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <WorkHeader
        title={{
          first: "Designing is a visual art,",
          second: "and the art speak for themeselves",
        }}
        // title = "text",
        content="Different projects that we have completed succesfully"
      />
      <WorkTwoColumn />
    </MainLayout>
  );
};

export default Work1;
