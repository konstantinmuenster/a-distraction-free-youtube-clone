import React from "react"
import ContentLoader from "react-content-loader"

export const CardSkeleton = () => (
  <ContentLoader 
    height={160}
    width={300}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <rect x="0" y="0" rx="5" ry="5" width="300" height="160" />
  </ContentLoader>
);

export const DetailsSkeleton = () => (
  <ContentLoader 
    height={600}
    width={400}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    >
    <rect x="10" y="270" rx="4" ry="4" width="260" height="24" /> 
    <rect x="10" y="310" rx="4" ry="4" width="100" height="10" /> 
    <rect x="10" y="330" rx="4" ry="4" width="85" height="10" /> 
    <rect x="10" y="35" rx="4" ry="4" width="380" height="200" />
  </ContentLoader>
);

