import React from "react";
import falseRouteImage from "../../notfoundpage.png";

const NotFoundPage = () => {
  return (
    <div className="container text-center py-5 my-5">
      <img src={falseRouteImage} alt="false-route" style={{ width: "300px" }} />
      <br />
      <h3> Sorry, your search is Not Found Error: 404.</h3>
    </div>
  );
};

export default NotFoundPage;
