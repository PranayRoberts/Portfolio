import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects, including full-stack web applications, data visualizations, and secure software tools, exploring diverse technologies to deliver practical and user-focused solutions.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>ALL</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>ALL</ToggleButton>
          }
          <Divider />
          {toggle === 'web app' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>WEB APPS</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>WEB APPS</ToggleButton>
          }
          <Divider />
          {toggle === 'data analysis' ?
            <ToggleButton active value="data analysis" onClick={() => setToggle('data analysis')}>DATA ANALYSIS</ToggleButton>
            :
            <ToggleButton value="data analysis" onClick={() => setToggle('data analysis')}>DATA ANALYSIS</ToggleButton>
          }
          <Divider />
          {toggle === 'others' ?
            <ToggleButton active value="others" onClick={() => setToggle('others')}>OTHERS</ToggleButton>
            :
            <ToggleButton value="others" onClick={() => setToggle('others')}>OTHERS</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects