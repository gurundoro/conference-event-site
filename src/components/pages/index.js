import React from 'react'
import styled from "styled-components"
import Navbar from '../layouts/Navbar'

const Home  = () => {
    return (
       <MainContainer className="home-main-container">
       <Navbar/>
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


//STYLED COMPONENTS
const MainContainer = styled.div`

h1{
    color: var(--dark-tomato)
}
p {
    color: var(--orange)
}

h3 {
    color: var(--tomato)
}

.form-box{
    padding:6rem 0;
}

form {
    width: 50rem;
    margin: 0 auto;
}

button {
    width:100%;
    background: transparent;
    border-color: var(--dark-red);
    &:hover {
        background: var(--dark-tomato);
        border-color:var(--dark-red)
    }
    &:focus {
        background: var(--tomato);
        border-color: var(--tomato);
    }
}

input{
    background: var(--dark-red);
    opacity: 0.7;
}
`
