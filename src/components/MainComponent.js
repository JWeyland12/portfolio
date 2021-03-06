import React, { Component } from 'react';
import NavBar from './NavbarComponent';
import About from "./AboutComponent";
import Footer from './FooterComponent';
import Skills from "./SkillsComponent";
import Projects from './ProjectsComponent';
import Contact from './ContactComponent';
import {SkillsList} from '../shared/skills';
import {projects} from '../shared/projects';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skillsList: SkillsList,
      projectList: projects,
    };
  }
  
  render() {
    return (
      <>
        <NavBar/>
        <About/>
        <Projects projectList={this.state.projectList}/>
        <Skills skillsList={this.state.skillsList}/>
        <Contact/>
        <Footer/>
      </>
    );
  }
}

export default Main;