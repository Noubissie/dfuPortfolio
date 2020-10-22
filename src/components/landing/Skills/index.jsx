import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import members from "assets/thumbnail/PHOTO.png"
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        
        <Details theme={theme}>
          <h1>More about us</h1> 
          <p>
            <span >
              <img width="30%" height="500px" src={members}/>
              <h5>Financial Secretary</h5>
              <h4>Noubissie Landry</h4>
            </span>
                    
              {/* <img width="30%" src="https://www.vectorlogo.zone/logos/javascript/javascript-horizontal.svg"/> */}
              {/* <img width="30%" src="https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg"/>
              <br />
              <img width="30%" src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg"/>
              <img width="30%" src="https://www.vectorlogo.zone/logos/gatsbyjs/gatsbyjs-ar21.svg"/>
              <img width="30%" src="https://www.vectorlogo.zone/logos/json/json-ar21.svg"/>
              <br />
              <img width="30%" src="https://www.vectorlogo.zone/logos/mysql/mysql-ar21.svg"/>
              <img width="30%" src="https://www.vectorlogo.zone/logos/sqlite/sqlite-ar21.svg"/>
              <img width="30%" src="https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg"/>
              <br />
              <img width="30%" src="https://www.vectorlogo.zone/logos/git-scm/git-scm-ar21.svg"/>
              <img width="30%" src="https://www.vectorlogo.zone/logos/yaml/yaml-ar21.svg"/>
              <img width="30%" src="https://www.vectorlogo.zone/logos/docker/docker-official.svg"/> */}
          </p>
          <Button as={AnchorLink} href="#contact">
            contact us
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
