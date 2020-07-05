import React from "react";
import styled from "styled-components";
import Footer from "../layouts/Footer";

const About = (props) => {
  return (
    <MainContainer>
      <div className="container pt-5 pb-5">
        <h3 className="display-4">About Us</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          adipisci exercitationem quia ipsum dolorum voluptas quos veniam
          deserunt, beatae eius iure, vitae temporibus quidem iste ut quibusdam
          alias quisquam quaerat quod illum animi quas dolor ipsam. Quo fuga
          repellendus iusto cumque accusamus. Tempore velit laborum rerum,
          dolorum laudantium deleniti nulla fugiat recusandae. Ullam quos
          eligendi, nemo quibusdam laudantium quis quas. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Hic doloribus officia similique
          accusantium. Earum molestiae asperiores aut quidem ex aliquid unde
          illum deserunt nostrum quibusdam odio voluptates sit magni eius
          necessitatibus totam fugit praesentium obcaecati esse veritatis, vel,
          aspernatur culpa! Sint, repudiandae. Culpa quasi, ab doloremque dolore
          vitae tempore praesentium debitis repudiandae dicta id quis amet.
          Quaerat neque perferendis dolorem. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Impedit similique fugiat tempore
          assumenda modi quasi veniam asperiores in, dolore, eligendi velit, at
          qui voluptates rem sint nesciunt ipsam? Voluptas dolores fuga
          reiciendis nostrum numquam quo minima quidem consequuntur iusto nihil.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          adipisci exercitationem quia ipsum dolorum voluptas quos veniam
          deserunt, beatae eius iure, vitae temporibus quidem iste ut quibusdam
          alias quisquam quaerat quod illum animi quas dolor ipsam. Quo fuga
          repellendus iusto cumque accusamus. Tempore velit laborum rerum,
          dolorum laudantium deleniti nulla fugiat recusandae. Ullam quos
          eligendi, nemo quibusdam laudantium quis quas. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Hic doloribus officia similique
          accusantium. Earum molestiae asperiores aut quidem ex aliquid unde
          illum deserunt nostrum quibusdam odio voluptates sit magni eius
          necessitatibus totam fugit praesentium obcaecati esse veritatis, vel,
          aspernatur culpa! Sint, repudiandae. Culpa quasi, ab doloremque dolore
          vitae tempore praesentium debitis repudiandae dicta id quis amet.
          Quaerat neque perferendis dolorem. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Impedit similique fugiat tempore
          assumenda modi quasi veniam asperiores in, dolore, eligendi velit, at
          qui voluptates rem sint nesciunt ipsam? Voluptas dolores fuga
          reiciendis nostrum numquam quo minima quidem consequuntur iusto nihil.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          adipisci exercitationem quia ipsum dolorum voluptas quos veniam
          deserunt, beatae eius iure, vitae temporibus quidem iste ut quibusdam
          alias quisquam quaerat quod illum animi quas dolor ipsam. Quo fuga
          repellendus iusto cumque accusamus. Tempore velit laborum rerum,
          dolorum laudantium deleniti nulla fugiat recusandae. Ullam quos
          eligendi, nemo quibusdam laudantium quis quas. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Hic doloribus officia similique
          accusantium. Earum molestiae asperiores aut quidem ex aliquid unde
          illum deserunt nostrum quibusdam odio voluptates sit magni eius
          necessitatibus totam fugit praesentium obcaecati esse veritatis, vel,
          aspernatur culpa! Sint, repudiandae. Culpa quasi, ab doloremque dolore
          vitae tempore praesentium debitis repudiandae dicta id quis amet.
          Quaerat neque perferendis dolorem. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Impedit similique fugiat tempore
          assumenda modi quasi veniam asperiores in, dolore, eligendi velit, at
          qui voluptates rem sint nesciunt ipsam? Voluptas dolores fuga
          reiciendis nostrum numquam quo minima quidem consequuntur iusto nihil.
        </p>
      </div>
      <Footer />
    </MainContainer>
  );
};

export default About;

// STYLED COMPONENTS STYLES
const MainContainer = styled.div`
  background: var(--deep-dark-blue);
  .container {
    background: transparent;
  }

  h3 {
    color: var(--dark-red);
  }
  p {
    color: var(--orange);
  }
`;