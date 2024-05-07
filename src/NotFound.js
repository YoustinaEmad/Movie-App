import React, { Suspense } from "react";
import NavBar from "./NavBar";


const NotFoundContent = React.lazy(() => import("./NotFoundContent"));

function NotFound() {
  return (
    <>
      <NavBar />
      <Suspense fallback={<div>Loading...</div>}>
        <NotFoundContent />
      </Suspense>
    </>
  );
}

export default NotFound;
