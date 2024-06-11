import React, { Component } from 'react';
import "./About.css";
import profileImage from '../assets/profilepic.jpeg';

  
export default class About extends Component {
  render() {
    return (
      <div>
<div className="split left">
<div className="centered">
<img 
src = {profileImage}
className="profile_image"
// Image goes here
alt="Profile Pic"
></img>
</div>
</div>
<div className="split right">
<div className="centered">
<div className="name_title">Daniel Haile</div>
<div className="brief_description">
    Hello everyone! My name is Daniel Haile and I am a computer science
    and engineering major at The Ohio State University. I am originally from Ethiopia but moved to Ohio at a young age.
    I have interests in front end and back end development with new interests in AI development. I am excited to be a part of
    this IBM Accelerate program and learn new concepts and challenges.
</div>
</div>
</div>
</div>
    )
  }
}