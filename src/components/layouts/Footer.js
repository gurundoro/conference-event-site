import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <footer className="container-fluid">
        <div className="row pt-5">
          <div className="col-sm-3 col-xs-12 d-flex">
            <ul className="list-inline mx-auto justify-content-center">
              <Link to="/">
                <li>lorem ipsum</li>
              </Link>
              <Link to="/">
                <li>lorem ipsum</li>
              </Link>
              <Link to="/">
                <li>lorem ipsum</li>
              </Link>
            </ul>
          </div>
          <div className="col-sm-3 col-xs-12 d-flex">
            <ul className="list-inline mx-auto justify-content-center">
              <Link to="/">
                <li>lorem ipsum</li>
              </Link>
              <Link to="/">
                <li>lorem ipsum</li>
              </Link>
              <Link to="/">
                <li>lorem ipsum</li>
              </Link>
            </ul>
          </div>
          <div className="col-sm-3 col-xs-12 d-flex">
            <ul className="list-inline mx-auto justify-content-center">
              <Link to="/">
                <li>lorem ipsum</li>
              </Link>
              <Link to="/">
                <li>lorem ipsum</li>
              </Link>
              <Link to="/">
                <li>lorem ipsum</li>
              </Link>
            </ul>
          </div>
          <div className="col-sm-3 col-xs-12 d-flex">
            <ul className="list-inline mx-auto justify-content-center">
              <Link to="/">
                <li>lorem ipsum</li>
              </Link>
              <Link to="/">
                <li>lorem ipsum</li>
              </Link>
              <Link to="/">
                <li>lorem ipsum</li>
              </Link>
            </ul>
          </div>
          <p className="pt-3 pb-2 pl-5 copy-right">
            &copy;&nbsp;KDzvairo
            {` ${new Date().getFullYear()}`}
            &nbsp; All Right Reserved
          </p>
        </div>
      </footer>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background: #012;
  margin-bottom: 0;

  ul li {
    list-style: none;
  }

  a {
    color: #3a3a3a;
    text-decoration: none;
    &:hover {
      color: var(--dark-red);
    }
  }

  .copy-right {
    color: #3a3a3a;
  }
`;