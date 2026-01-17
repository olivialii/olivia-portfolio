import React, { useEffect } from 'react';
import { setWhiteBackground, defaultBackground } from '../../utils';

import styles from "./SearchNEU.module.css";
import Banner from './Banner/banner';
import Subheader from "./Subheader/subheader";
import Details from "./Details/details"
import { Link } from 'react-router-dom';
import Imagetext from './ImageText/imagetext';
import FocusText from './FocusText/focusText';
import Category from './Category/category';
import Divider from './Divider/divider';
import FullImage from './FullImage/fullImage';
import ListItem from './ListItem/listItem';

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
          <Link class={styles.link} to={"/Projects"}> Projects </Link> 
          <h2> SearchNEU </h2>
        </div>
        }
        desc= {<div>Simplifying how Northeastern students search for courses on mobile: This case study explores how SearchNEU’s core components were rebuilt to create a more impactful mobile experience, based on students’ needs during course registration.</div>}>
      </Subheader>

      {/** {<div><a href="https://searchneu.com/NEU" target="#blank">SearchNEU</a> is a comprehensive tool that helps Northeastern students search for course information, simplifying the course registration process.</div>} */}

      <Details
        role="Design Lead"
        duration="September 2024 - Present"
        team= {<div className={styles.details}>Designers: Serena Ng, Nitish Gannu
          <br/> Developers: Ananya Patil, Michael Mehall, Carter Herman, Eric Sun, Wesley Tran, Nick Pfeiffer
        </div>}
        tools= "Northeastern students"></Details>
      

      <Banner 
        banner='/assets/search/banner.png'
        logo='/assets/search/sbLogo.png'
        other='/assets/search/searchDog.png'
      />
      
      <div class={styles.block}>
      <Imagetext
        image= '/assets/search/windows.png'
        text={ 
        <div> 
          
          <div class={styles.content}>

            <div class={styles.section}>
              <Category category='OVERVIEW'/>
              <FocusText text='SearchNEU is a tool used by 7000+ Northeastern students to efficiently discover and search for course information.'/> 
            </div>

            <div class={styles.section}>
              <p>
              Course registration is a high-stakes moment for Northeastern students: decisions are 
              time-sensitive, requirements are complex, and information is scattered across multiple 
              tools provided by the university. As a result, SearchNEU was built by students, for students, 
              providing quick access to the information that matters most.
              </p>
            </div>

            <div class={styles.section}>
              <Category category='MY ROLE'/>
              <p>
              As design lead, I guided the project’s UX strategy for the mobile redesign. Collaborating closely 
              with designers, developers, and a project lead, I iterated on key features and interactions through 
              weekly stand-ups and design reviews, translating insights about student needs into design decisions.  
              </p>
            </div>
          </div>
          
        </div>}
      />
      </div>

      <div class={styles.block}> 
        <Divider text={'Mobile Redesign Preview'}/>
        <FullImage image={'/assets/search/mobilefinal.png'}/>
      </div>

      <div class={styles.block}> 
        <Divider 
          text={'First Steps'}
          subtext={'Identifying opportunities with research'}
        />

        <Imagetext
        image= '/assets/search/current.png'
        text={ 
        <div> 
          <div class={styles.content}>

            <div class={styles.section}>
              <FocusText text='How might we assess pain points on the current mobile site to create a more convenient and efficient mobile experience for students?'/> 
            </div>
            
            <div class={styles.section}>
            <ListItem
              symbol='1'
              boldtext= 'Survey students: '
              text='Our first step was to understand their goals, motivations, and the features they value the most when using SearchNEU.'
            />

            <ListItem
              symbol='2'
              boldtext= 'Gather feedback: '
              text='Next, we identified pain points on the current mobile site and mapped them to underlying insights to understand where the site fails to meet student needs.'
            />

            <ListItem
              symbol='3'
              boldtext= 'Translate insights into opportunities'
              text=' for improvement: Using our findings, we turned the broader problem into actionable, specific goals, guiding further exploration and design research.'
            />  
            </div>
          </div>
        </div>}
        />
      </div>

      <div class={styles.block}> 
      <FullImage image={'/assets/search/survey.png'}/>
      </div>


      <div class={styles.block}> 
      <FullImage image={'/assets/search/chart.png'}/>
      </div>

      <div class={styles.block}> 

        <Divider 
          text={'Course Cards'}
          subtext={'How might we design course cards to help students find and compare course info more efficiently?'}
        />

        <Imagetext
          image={'/assets/search/think.png'}
          text={
            <div>
              <div class={styles.section}>
                <Category category={'INSIGHTS'}/>
                <p>Across survey responses, students consistently valued seeing NUPath requirements, number of sections, seat availability, and number of credits, early in their search.</p>
                <p>To understand how these priorities played out in practice, I mapped an example of a common user flow:</p>
              </div>

            </div>}
        ></Imagetext>
        <br/><br/>
        <FullImage image={'assets/search/flow.png'}/>
      </div>


      <div class={styles.block}> 
        <Imagetext
          image={'/assets/search/problem.png'}
          text={
            <div className={styles.content}>

              <div className={styles.section}>
              <Category category={'PROBLEM'}/>
              <p>This flow revealed a key issue: critical details were buried behind multiple dropdowns, increasing time and effort to find information. We want to eliminate any unnecessary steps!</p>
              </div>

              <div className={styles.section}>
              <Category category={'DESIGN HYPOTHESIS'}/>
              <p>If we replace course dropdowns with scannable course cards that surface key information and link to individual course pages, then students can find and compare course details more quickly, because important information is visible at a glance and supported by clear visual hierarchy.</p>
            </div>
            </div>}
        ></Imagetext>
      </div>

      <div class={styles.block}> 
        <Imagetext
          image={'/assets/search/cards.png'}
          text={
            <div className={styles.content}>
            
              <div className={styles.section}> 
              <Category category={'RESULT'}/>
              <p>We redesigned the course card to surface high-priority information directly in search results. Each card displays:</p>
              </div>

              <div className={styles.section}> 
              <ListItem
                symbol={'→'}
                boldtext={'The NUPath requirements it fulfills,'}
                text={'helping students quickly assess whether a course meets their needs.'}
              />

              <ListItem
                symbol={'→'}
                boldtext={'Number of sections available,'}
                text={' using color to indicate the percentage of sections full for quick comprehension.'}
              />
              </div>
       
              <p>This shift reduces reliance on dropdowns and makes course comparison faster and more intuitive.</p>
            </div>}
        ></Imagetext>
      </div>

      <div class={styles.block}>
        <Divider
          text={'Mobile Filter'}
          subtext={'How might we design a mobile filter that feels cohesive, intuitive, and easy to use?'}
        />

        <Imagetext
          image={'/assets/search/oldfilter.gif'}
          text={
            <div className={styles.content}>
            
              <div className={styles.section}> 
              <Category category={'PROBLEM'}/>
              <p>Although filters are a commonly used feature on SearchNEU, the existing mobile filter feels disconnected from the rest of the product and doesn’t align with the current design system. Interactions are choppy, and users lack clear feedback.</p>
              </div>

              <div className={styles.section}> 
              <Category category={'FINDINGS'}/>
              
            
              <ListItem
                symbol={'→'}
                boldtext={'Students typically search with specific criteria in mind.'}
                text={'We found that students primarily use SearchNEU when they already know what they are looking for.'}
              />

              <ListItem
                symbol={'→'}
                boldtext={'A fully expanded filter could cause confusion.'}
                text={' Some students expressed that the fullscreen filter felt overwhelming and it was unclear if filters were being applied as they were selected.'}
              />
              </div>
            </div>}
        ></Imagetext>
      </div>
      
      <div class={styles.block}>
        <FullImage
          image={'/assets/search/filtersketch.png'}
        />
      </div>

      <div class={styles.block}>
        <FullImage
          image={'/assets/search/3filters.png'}
        />
      </div>
      
      <div class={styles.block}>
      <Imagetext
          image={'/assets/search/final.gif'}
          text={
            <div className={styles.content}>


              <div className={styles.section}> 
              <Category category={'RESULT'}/>
              
            
              <ListItem
                symbol={'→'}
                boldtext={'Collapsible filter sections '}
                text={'reduces visual clutter and keeps all filter options visible.'}
              />

              <ListItem
                symbol={'→'}
                boldtext={'Partial visibility of the results page'}
                text={' preserves context and reassure users that results remain unchanged until filters are applied.'}
              />

              <ListItem
                symbol={'→'}
                boldtext={'Alignment with current design system'}
                text={'makes it more coherent with the rest of the site.'}
              />
              </div>
            </div>}
        ></Imagetext>
        </div>
        
        <div class={styles.block}> 
        <Divider 
          text={'Takeaways'}
        />

        <Imagetext
        image= '/assets/search/dog.png'
        text={ 
        <div> 
          <div class={styles.content}>

          <div class={styles.section}>
            <ListItem
              symbol='1'
              boldtext= 'Involving users in the design process: '
              text='Throughout the semester, we hosted project showcases, feedback sessions, tabling events, and informal conversations to help us understand what students needed. Interacting directly with users early and often ensures the product truly serves the community it was built for.'
            /> 

            <ListItem
              symbol='2'
              boldtext= 'Turning insights into action: '
              text='As a first-time Design Lead, I learned how to translate research into clear, actionable design goals for the team. Synthesizing student needs helped align everyone around why users behave the way they do, and how their frustrations could become opportunities.'
            />

            <ListItem
              symbol='3'
              boldtext= 'Documenting design decisions: '
              text='Well-documented design files helped me onboard quickly when I joined the project. Understanding not just what was designed, but why, as well as why some designs didnt make the cut, made collaboration smoother. I carried this practice forward, especially when handing designs off to developers or new designers.'
            />
            </div>
          </div>
        </div>}
        />
      </div>

      <div class={styles.block}> 
        <Divider 
          text={'Gallery'}
        />
        <div className={styles.gallery}>
          <img src={'/assets/search/1.png'}></img>
          <img src={'/assets/search/2.png'}></img>
          <img src={'/assets/search/3.png'}></img>
          <img src={'/assets/search/4.png'}></img>
          <img src={'/assets/search/5.png'}></img>
          <img src={'/assets/search/6.png'}></img>
        </div>

        
      

      </div>


      {/* 
      <Subheader
        subheader= "Product Glimpse"
        desc= "Some glimpses of our finished designs!">
      </Subheader>
      
      <img class={styles.threePhones} src='/assets/search/threePhones.png'></img>

      */}




    </div>
  );
};

export default SearchNEU;
  