import React, { useEffect } from 'react';

import styles from "./SearchNEU.module.css";
import Banner from './Banner/banner';
import Subheader from "./Subheader/subheader";
import Details from "./Details/details"
import { Link } from 'react-router-dom';

import { setWhiteBackground, defaultBackground } from '../../../utils/setBackground';


const SearchNEU = () => {
  useEffect(() => {
    setWhiteBackground(); 

    return () => {
        defaultBackground();
    };
  }, []);

  return (
    <div>

      <Subheader
        subheader= 
        {
        <div class={styles.ProjectTitle}>
          <Link class={styles.link} to={"/Projects"}> ⬅️ Work / </Link> 
          <div> SearchNEU </div>
        </div>
        }
        desc= {<div><a href="https://searchneu.com/NEU" target="#blank">SearchNEU</a> is a comprehensive tool that helps Northeastern students search for course information, simplifying the course registration process.</div>}>
      </Subheader>

      <Banner 
        banner='/assets/search/searchBanner.png'
        logo='/assets/search/sbLogo.png'
        other='/assets/search/searchDog.png'
      />
      
      <Subheader
        subheader= "Overview"
        desc= {<div>As a UI/UX Designer at <a href="https://www.sandboxnu.com/" target= "#blank">Sandbox @ Northeastern</a>, I collaborated with designers, developers, and a project lead to redesign SearchNEU’s mobile site. Following an iterative, feedback-driven design process, I worked to improve key features while actively participating in weekly stand-ups and design meetings. </div>}
      />

      <Details
        role="UI/UX Designer"
        duration="September 2024 - Present"
        team= {<div>2 UI/UX Designers
          <br/>4 Developers
          <br/>1 Project Lead
        </div>}
        tools={<div> Figma
          <br/> Notion
        </div>
      }
      />

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
        subheader= "Identifying Pain Points 🔍"
        desc= {
          <div>
            <div>In order to come up with a game plan, we identified key issues with the current mobile experience:</div>
            <br/>
            <div class={styles.textImageSection}>
          <ol class={styles.list}>
            <li><span class={styles.bold}>Inconsistency.</span> Critical course details and features are missing on mobile, forcing students to switch to the desktop version for a complete experience.</li>
            <br/>
            <li><span class={styles.bold}>Cluttered UI.</span>  Course sections expand into long drop-downs, increasing scroll time and making it difficult to access detailed information efficiently.</li>
            <br/>
            <li><span class={styles.bold}>Lack of Scannability.</span> Users can’t quickly scan the screen to compare course details because they can only see the course code and name at first glance. </li>
          </ol>
          
          <div>
          <img class={styles.phoneIMG} src='/assets/search/searchOG.png'></img>
          <p class={styles.imgDesc}>SearchNEU's current mobile site</p>
          </div>
        </div>
          
          </div>
        }>
      </Subheader>

      <Subheader
        number= "02"
        subheader= "Problem Statement"
        desc= {<p>Students using SearchNEU on their mobile devices have limited access to course information compared to the desktop site, making it difficult for students to compare courses and sections efficiently. The current format lacks clarity and usability, requiring a redesign that prioritizes accessibility, information hierarchy, and an optimized layout for smaller screens. 
          <br/><br/>
          How can we leverage our understanding of student needs to create a more convenient and efficient mobile experience that is up-to-date with current style guidelines? How can we organize large amounts of information in a limited space while maintaining clarity and readability?</p>}>
      </Subheader>

      <Subheader
        number= "03"
        subheader= "Ideation Process 💡"
        desc= {<div>To translate our problem statement into actionable design tasks, we focused on three key elements: <span class={styles.bold}>class cards, class pages,</span> and <span class={styles.bold}>filters</span>. Our process involved continuous iterations based on user and designer feedback.</div>}>
      </Subheader>

      <Subheader
        number= "04"
        subheader= "Class Cards"
        desc={
          <div>Goal: Create class cards that show the most vital information with visual hierarchy. Shorten search time by making it easier for students to quickly compare courses.
            <br/><br/>
            What kind of course information are most important to students when comparing courses? Based on user research conducted by past designers, most students want to see the number of sections available, how many credits a course is worth, and the NUPath requirements that the course fulfills. 
            
            <div class={styles.imgLeft}>
              <img class={styles.cards} src= "assets/search/cards.png"></img>
              <div>
              We created multiple iterations in an attempt to determine the best format. One of our challenges was trying not to overload the card with too much dense information, and deciding whether or not some elements needed to be omitted to free up space.
              <br/><br/>
              By using font weight (contrast) and color, we were able to include all elements in our final prototype. Now, students can see a lot more course information at first glance!
              </div>
            </div>

          </div>
          
        }>
      </Subheader>

      <Subheader
        number= "05"
        subheader= "Filters"
        desc= {<div>
          Goal: what is the best way we can display filters?
            <br/><br/>

            <img class={styles.fullLengthImg} src='/assets/search/filtersketch.png'></img>
            <p class={styles.imgDesc}>some ideation sketches</p>

            <br/><br/>

            <img class={styles.fullLengthImg} src='/assets/search/3filters.png'></img>
            <p class={styles.imgDesc}>hi fi prototypes for testing</p>

            <br/><br/>

            <div class={styles.bold}>What we determined:</div> 
            <br/>
            <div class={styles.textImageSection}>
             
              <br/><br/>
              <ul>
                <li>Collapsable filter sections are less cluttered and increases visibility. Users can easily see all the filter options, and only need to open the ones they need </li>
              
                <li>Leaving part of the main page greyed out maintains context, while the fullscreen filter might make the user feel like they navigated to a different page</li>
             
                <li>Users need a ‘clear filters’ button to make it easier to search for something new </li>
          
                <li>Adding visual indication whenever filters have been applied gives more clarity to users when looking at their search results</li> 
              </ul>

              <div>
          <img class={styles.phoneIMG} src='/assets/search/filter.gif'></img>
          <p class={styles.imgDesc}>Updated filter UI</p>
          </div>

            </div>

        </div>}>

      </Subheader>

      <Subheader
        number= "06"
        subheader= "Final Prototype"
        desc= { 
        <div className={styles.final}>
          <div>
          <img className={styles.demo} src='assets/search/final.gif'></img>
          <img className={styles.points} src='assets/search/finaldesc.png'></img>
          </div>
        </div>
        }>
      </Subheader>


      <Subheader
        number= "07"
        subheader= "Takeaways & Future Goals"
        desc= {
          <div>
          <ul>
            <li>Prototyping designs gives the opportunity to obtain valuable usability feedback, and helps developers understand how to implement specific interactions</li>
            <br/>
            <li>Document design decisions. (Don’t just discard “bad” iterations, write down why they were “bad”!). This is important for looking back on, especially for new designers </li>
            <br/>
            <li>Explore less common contexts of use to design for all users. (Consider CPS and Law students when designing the filter)</li>
          </ul>
          </div>
        }>
      </Subheader>

      <Subheader
        subheader= "“Final” Word"
        desc= {<p>After a very productive Fall Semester, I will be rejoining SearchNEU as a <span class={styles.bold}>Design Lead!</span>  My goal for the Spring 2025 semester will be to incorporate more community feedback and usability testing to ensure that new features improve user experience and align with Northeastern students’ goals and values. Our team will be working on implementing the new mobile designs and notification pages, incorporating a new FAQ page, and creating how-to modals. I will also be scoping out future design goals for SearchNEU. More to come!</p>}>
      </Subheader>
      
      <img class={styles.dog} src="/assets/search/dog.png"></img>



    </div>
  );
};

export default SearchNEU;
  