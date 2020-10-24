import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Card, TitleWrap, Button} from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import pic_Landry from "assets/thumbnail/PHOTO.png"
import pic_etape from "assets/thumbnail/etape pic.svg"
// import * as picture from "assets/thumbnail/PHOTO.png"
import { Wrapper, Grid, Item, Content, Stats, Languages } from './styles';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);
  const members_profile = [
    {
      name:"Noubissie Landry",
      description:"Financial secretary",
      url:pic_Landry
    },
    {
      name:"Etape Peter",
      description:"Personel Managing Director",
      url:pic_etape
    }
  ]
  return (


<Wrapper as={Container} id="projects">
      <h2>Projects</h2>
      <Grid>
        {members_profile.map(profile => (
          
            <Card theme={theme}>
              
              <TitleWrap>
                <Stats theme={theme}>
                  <div>
                    {/* <Star color={theme === "light" ? "#000" : "#fff"} /> */}
                    <span><img src={profile.url} alt="image" /></span>
                  </div>
                  
                </Stats>
                <Stats theme={theme}>
                  <Languages>
                    {/* {
                      profile.languages.profiles.map(({ id, name }) => (
                        <span key={id}>
                          {name}
                        </span>
                      ))
                    } */}
                  </Languages>
                </Stats>
              </TitleWrap>
              <Content>
                <h4>{profile.name}</h4>
                <p>{profile.description}</p>
              </Content>
            </Card>
         
        ))} 
      </Grid>
      <Button as={AnchorLink} href="#contact">
          contact us
      </Button>
    </Wrapper>
  );
};
