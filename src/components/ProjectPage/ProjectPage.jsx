import React, { useEffect } from 'react';
import styles from "./ProjectPage.module.css";
import Banner from './Banner/banner';
import Subheader from "./Subheader/Subheader";
import Details from "./Details/Details";
import { Link } from 'react-router-dom';

import { setWhiteBackground, defaultBackground } from '../../../utils/setBackground';

const ProjectPage = () => {
  useEffect(() => {
    setWhiteBackground(); 

    return () => {
        defaultBackground();
    };
  }, []);

  return (
    <div class={styles.ProjectPage}>

      <Subheader
        subheader= 
        {
        <div class={styles.ProjectTitle}>
          <Link class={styles.link} to={"/Projects"}> - Work / </Link> 
          <h2> SearchNEU </h2>
        </div>
        }
        desc= "SearchNEU is a comprehensive tool that helps Northeastern students search for course information, simplifying the course registration process.">
      </Subheader>

      <Banner />
      
      <Subheader
        subheader= "Overview"
        desc= "As a UI/UX Designer in Sandbox @ Northeastern, I collaborated with a team of designers, developers, and a project lead to revamp SearchNEU’s mobile site">
      </Subheader>

      <Details
        role="UI/UX Designer"
        duration="September 2024 - Present"
        team1="2 UI/UX Designers"
        team2="4 Developers"
        team3="1 Project Lead"
        tools1="Figma"
        tools2="Notion">
      </Details>

      {/* 
      <Subheader
        subheader= "Product Glimpse"
        desc= "Some glimpses of our finished designs!">
      </Subheader>
      
      <img class={styles.threePhones} src='/assets/search/threePhones.png'></img>

      */}

      <br></br>
      <Subheader
        number= "01"
        subheader= "Identifying Pain Points"
        desc= {
          <div>
            <div>In order to come up with a game plan, we identified some of the current mobile site’s pain points based on current user feedback:</div>
            <br/>
            <div class={styles.textImageSection}>
          <ol class={styles.list}>
            <li>It’s <span class={styles.bold}>inconsistent.</span> Critical course details and features are not fully available on the mobile site, forcing students to switch to the desktop version for a complete experience.</li>
            <br/>
            <li>It looks <span class={styles.bold}>cramped.</span> Each class opens a long dropdown, leading to excessive scrolling + longer search times, and offers limited space for more specific course details.</li>
            <br/>
            <li>It feels <span class={styles.bold}>vague.</span> Users can’t quickly scan the screen to compare course details because they can only see the course code and name at first glance. </li>
          </ol>
          
          <div>
          <img class={styles.searchOG} src='/assets/search/searchOG.png'></img>
          <p class={styles.imgDesc}>SearchNEU's current mobile site</p>
          </div>
        </div>
          
          </div>
        }>
      </Subheader>

      <Subheader
        number= "02"
        subheader= "Problem Statement"
        desc= {<p>The current mobile experience of SearchNEU.com isn’t consistent with the desktop site: It’s missing detailed course information, as well as important features like turning on notifications for when a seat opens up in a full course section. 
          <br/><br/>
          How can we use our understanding of student needs to incorporate necessary course information to the mobile site? 
          How can we organize large amounts of information in limited space while still maintaining readability?</p>}>
      </Subheader>

      <Subheader
        number= "03"
        subheader= "Ideation">
      </Subheader>

      <Subheader
        number= "04"
        subheader= "Class Cards">
      </Subheader>

      <Subheader
        number= "05"
        subheader= "Class Pages">
      </Subheader>

      <Subheader
        number= "06"
        subheader= "Filters">
      </Subheader>

      <Subheader
        number= "07"
        subheader= "Takeaways & Future Goals"
        >
      </Subheader>

      <Subheader
        subheader= "“Final” Word"
        desc= {<p>After a very productive Fall Semester, I will be rejoining SearchNEU as a <span class={styles.bold}>Design Lead!</span>  My goal for the Spring 2025 semester will be to incorporate more community feedback and usability testing to ensure that new features improve user experience and align with Northeastern students’ goals and values. Our team will be working on implementing the new mobile designs and notification pages, incorporating a new FAQ page, and creating how-to modals. I will also be scoping out future design goals for SearchNEU. More to come!</p>}>
      </Subheader>
      
      <img class={styles.dog} src="/assets/search/dog.png"></img>



    </div>
  );
};

export default ProjectPage;
  