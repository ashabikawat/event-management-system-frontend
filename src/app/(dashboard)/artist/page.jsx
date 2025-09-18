import Artist from "@/app/views/artist/ArtistList";
import LayoutWrapper from "@/utils/layoutWrapper";
import React from "react";

const page = () => {
  return (
    <LayoutWrapper>
      <Artist />
    </LayoutWrapper>
  );
};

export default page;
