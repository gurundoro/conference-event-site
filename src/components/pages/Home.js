import React from 'react'
import styled from "styled-components"


const Home  = () => {
    return (
       <MainContainer className="home-main-container">
        <div className="container">
            <h1 className="display-5 text-uppercase py-5 text-center">
             Welcome To Javascript Con 2020!
            </h1>
            <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat aliquam voluptatibus architecto eum consequuntur natus officiis, autem explicabo cum dolor molestias vero saepe aspernatur, sequi dolorum. Laboriosam nihil, magnam nesciunt repellat iure quis consequuntur? Magnam consectetur sint odit hic aut.
            </p>
            <div className="form-box">
                <h3 className="display6 text-uppercase text-center py-3">
                    register and reserve your seat
                </h3>
                <form>
                    <div className="form-row mr-auto">
                        <div className="col-md-6 mb-4">
                            <input type="text" className="form-control" placeholder="First Name" />
                         </div>
                        <div className="col-md-6 mb-4">
                            <input type="text" className="form-control" placeholder="Last Name" />
                         </div>
                        <div className="col-md-6 mb-4">
                            <input type="text" className="form-control" placeholder="Phone Number" />
                         </div>
                        <div className="col-md-6 mb-4">
                            <input type="text" className="form-control" placeholder="Email" />
                         </div>
                    </div>
                    <button className ="btn btn-primary text-uppercase">reserve your seat</button>
                </form>
            </div>
        </div>
    </MainContainer> 
    )
}

export default Home


const MainContainer = styled.div`
  // background: #012;
  height: 100%;

  h1 {
    padding-top: 8rem !important;
    color: var(--dark-tomato);
  }

  h3 {
    color: var(--tomato);
  }

  p {
    color: var(--orange);
  }

  .form-box {
    padding: 6rem 0;
  }
  form {
    width: 50rem;
    margin: 0 auto;
  }
  button {
    width: 100%;
    background-color: Transparent;
    background-repeat: no-repeat;
    border-color: var(--dark-red);
    &:hover {
      background-color: #c34;
      border-color: var(--dark-red);
    }
    &:focus {
      background: var(--tomato) !important;
      border-color: var(--tomato) !important;
    }
  }
  input {
    background: #012;
    opacity: 0.7;
    &:focus {
      background: #c34;
      color: #fff;
    }
  }


  @media (max-width: 960px) {
    .form-box {
      margin: 0;
      padding: 3rem 0;
    }
    form {
      width: 30rem;
      margin: 0 auto;
    }
  }

  @media (max-width: 560px) {
    .form-box {
      margin: 0;
      padding: 2rem 0;
    }
    form {
      width: 20rem;
      margin: 0 auto;
    }
  }
`;
 