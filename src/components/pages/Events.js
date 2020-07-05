import React from 'react'
import {NavLink, Route, Redirect } from 'react-router-dom'
import styled from "styled-components"
import eventsData from "../../data/Events.json"

import NodeJS from './NodeJS'
import MongoDB from './MongoDB'
import ExpressJS from './Express'
import ReactJS from './React'

const Events = () => {
    return (
        <MainContainer>
           <div className="container py-5">
             <h2 className="text-center mt-5 pt-3 pb-5 text-uppercase">events</h2>
             <NavLink to='/events/nodejs' className="badge badge-secondary p-2 m-2">
                Node JS
             </NavLink>
             <NavLink to='/events/mongodb' className="badge badge-secondary p-2 m-2">
                Mongo DB
             </NavLink>
             <NavLink to='/events/expressjs' className="badge badge-secondary p-2 m-2">
                Express JS
             </NavLink>
             <NavLink to='/events/reactjs' className="badge badge-secondary p-2 m-2">
                React JS
             </NavLink>
             <Redirect to="/events/nodejs"/>
             <Route path="/events/nodejs" render={()=> <NodeJS data={eventsData}/>}/>
             <Route path="/events/mongodb" render={()=> <MongoDB data={eventsData} />}/>
             <Route path="/events/expressjs" render={()=> <ExpressJS data={eventsData}/>}/>
             <Route path="/events/reactjs" render={()=> <ReactJS  data={eventsData}/>}/>
           </div>
        </MainContainer>
    )
}

export default Events

//MAIN CONTAINER
const MainContainer = styled.div`
  background: var(--deep-dark-blue);
  height: 74vh;
  .active {
    background: var(--dark-red);
    color: #fff !important;
    &:focus {
      background: var(--dark-tomato);
      color: #fff !important;
    }
  }

  h2 {
    color: var(--dark-red);
  }

  a {
    &:hover {
      background: var(--tomato);
    }
  }

  p {
    color: var(--orange);
  }
`;
