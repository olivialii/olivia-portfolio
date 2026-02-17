import { useEffect } from 'react';
import { setWhiteBackground, defaultBackground } from '../../utils';

import styles from "./SearchNEU.module.css";
import Banner from './Banner/banner';
import Subheader from "./Subheader/subheader";
import Details from "./Details/details"
import Imagetext from './ImageText/imagetext';
import FocusText from './FocusText/focusText';
import Category from './Category/category';
import FullImage from './FullImage/fullImage';
import ListItem from './ListItem/listItem';
import BlockIntro from './BlockIntro/blockintro';
import Card from './Card/card';
import ImageCaption from './ImageCaption/imageCaption';

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
        subheader= "SearchNEU"
        desc= {<div>Simplifying how Northeastern students search for courses on mobile: Rebuilding SearchNEU’s core components based on students’ needs during course registration.</div>}>
      </Subheader>

      <Banner 
        banner='/assets/search/banner.png'
        logo='/assets/search/sbLogo.png'
        other='/assets/search/searchDog.png'
      />      
      
      <Details
        role="Design Lead"
        duration="September 2024 - Present"
        team= {<div className={styles.details}>Designers: Serena Ng, Nitish Gannu
          <br/> Developers: Ananya Patil, Michael Mehall, Carter Herman, Eric Sun, Wesley Tran, Nick Pfeiffer
        </div>}
        tools= "Northeastern students">
      </Details>
      
      <div className={styles.block}>
        <div className={styles.content}>
        <Imagetext
          image= '/assets/search/windows.png'
          text={ 
          <div> 
              <div className={styles.section}>
                <div>
                  <Category category='CONTEXT'/>
                  <FocusText text='SearchNEU is a comprehensive course catalog used by 7000+ Northeastern students to efficiently discover and search for course information.'/> 
                </div>

                <div>
                  <Category category='MY ROLE'/>
                  As design lead, I collaborated closely with designers, developers, and a project lead to deliver mobile redesigns, translating insights about student needs into design decisions in an iterative, feedback-driven process.
                </div>
            </div>
            
          </div>}
        />
        
        <FullImage 
          header={'Mobile Redesign Preview'}
          image={'/assets/search/mobilefinal.png'}
        />
      
        </div>
      </div>

      <div className={styles.block}>
        <div className={styles.content}>
        <BlockIntro
          number={'01'}
          title={'Identifying opportunities by engaging with users'}
          rightside={
            <div className={styles.section}>

              <div>
                <Category category={'PROBLEM STATEMENT'}/>
                <FocusText text='How might we assess pain points on the current mobile site to create a more convenient and efficient mobile experience for students?'/>
              </div>

              <div>
               <Card 
                number={'01'}
                title={'ENGAGE WITH USERS'}
                desc={'We gathered feedback from students to uncover their goals, motivations, and pain points when using SearchNEU on mobile.'}
               />
              </div>

                            <div>
               <Card 
                number={'02'}
                title={'TRANSLATE INSIGHTS'}
                desc={'I translated research findings into clear problem statements, transforming broad challenges and goals into focused tasks.'}
               />
              </div>

              <div>
               <Card 
                number={'03 '}
                title={'SURVEY STUDENTS'}
                desc={'Our first step was to understand their goals, motivations, and the features they value the most when using SearchNEU.'}
               />
              </div>

            </div>
          }
        />

        <FullImage 
          header={'Results from a FigJam feedback session'}
          image={'/assets/search/survey.png'}
        />

        <FullImage 
          header={'Translating research insights into opportunities'}
          image={'/assets/search/chart.png'}
        />

        </div> 
      </div>


      <div className={styles.block}>
        <div className={styles.content}>
          <BlockIntro
            number={'02'}
            title={'Surfacing crucial information in course cards to increase scannability'}
            rightside={
              <div className={styles.section}>

                <div>
                  <Category category={'PAIN POINT'}/>
                  <div> Information that students valued most was buried behind dropdowns. The goal: help users get to that information faster.</div>
                </div>

                <FullImage 
                  image={'/assets/search/current.png'}
                />

                <div>
                <Card 
                  title='DESIGN HYPOTHESIS'
                  desc={'If we replace course dropdowns with scannable course cards that surface key information and link to individual course pages, then students can find and compare course details more quickly, because important information is visible at a glance and supported by clear visual hierarchy.'}
                />
                </div>

              </div>
            }
          />

          <Imagetext
            header = {'Course card iterations'}
            image = '/assets/search/cards.png'
            text={ 
            <div> 
                <div className={styles.section}>
                  <div>
                    We ultimately landed on a card that surfaces:
                  </div>
                  
                  <div>
                  <div>
                    <ListItem
                      symbol={'🔎'}
                      boldtext={'NUPath requirements, credits, and course code'}
                    />
                  </div>

                 <div>
                    <ListItem
                      symbol={'🔎'}
                      boldtext={'Section availability,'}
                      text={' using color to communicate the percentage of sections that still have seats'}
                    />
                  </div>
                  </div>

                  <div>
                    <Category category='IMPACT'/>
                    <FocusText
                      text='By surfacing high-priority information directly in the search results, we reduce the time and effort students spend searching for courses.'
                    ></FocusText>
                  </div>
              </div>
            </div>}
          />
          
          <FullImage 
            header={'Results'}
            image={'/assets/search/result.png'}
            caption={'New course cards were later integrated into the desktop site!'}
          />


        </div> 
      </div>



      <div className={styles.block}>
        <div className={styles.content}>
          <BlockIntro
            number={'03'}
            title={'Creating a mobile filter that supports users’ goals & workflows'}
            rightside={
              <div className={styles.section}>

                <div>
                  
               
                  
                  <Category category={'RESEARCH INSIGHTS'}/>
                 <div>
                  <ListItem
                      symbol={'🔎'}
                      text={'Students typically have specific criteria in mind, and know exactly which filters they want to use '}
                    />
                </div>

                <div>
                  <ListItem
                    symbol={'🔎'}
                    text={'A fullscreen filter might cause confusion about the state of the previous results page'}
                  />
                </div>

                <div>
                  <ListItem
                    symbol={'🔎'}
                    text={'Users wanted more control, including visibility of applied filters and a ‘clear all filters’ button'}
                  />
                </div>
                </div>

              </div>
            }
          />

          <FullImage
            header={'Ideation sketches'}
            image={'/assets/search/filtersketch.png'}
          ></FullImage>

          <FullImage
            header={'Prototypes for A/B testing'}
            image={'/assets/search/3filters.png'}
          ></FullImage>

          <Imagetext
            header = {'Results'}
            image = '/assets/search/filter.gif'
            text={ 
            <div> 
                <div className={styles.section}>
                 
                  
                  <div>
                     <Category category='DECISIONS'/>
                  <div>
                    <ListItem
                      symbol={'🔎'}
                      boldtext={'Make all filter options visible and reduce clutter'}
                    />
                  </div>

                 <div>
                    <ListItem
                      symbol={'🔎'}
                      boldtext={'Keep partial visibility of the results page '}
                      text={'to preserve context and reassure users that results remain unchanged until they apply new filters'}
                    />
                  </div>

                  <div>
                    <ListItem
                      symbol={'🔎'}
                      boldtext={'Align with current design system '}
                      text={'to keep the site consistent across devices'}
                    />
                  </div>

                  <div>
                    <ListItem
                      symbol={'🔎'}
                      boldtext={'Ensure users have shortcuts, '}
                      text={'like clearing all filters at once to start a new search'}
                    />
                  </div>
                  </div>

              </div>
            </div>}
          />
        </div> 
      </div>

      <div className={styles.block}>
        <div className={styles.content}>
          <BlockIntro
            number={'04'}
            title={'Takeaways'}
          />

          <div className={styles.takeaways}> 
            <Card 
              img={'/assets/search/takeaway1.png'}
              title={ <FocusText text={'Involving users in the design process'} />}
               
              desc={'Interacting with users early and often ensures the product truly serves the community it was built for. We hosted project showcases, feedback sessions, and informal conversations to help us understand what students needed.'}
            />

            <Card 
              img={'/assets/search/takeaway2.png'}
              title={ <FocusText text={'Documenting design decisions'} />}
              desc={'Good design documentation results in smoother communication between developers and other designers. It’s important to be able to look back and understand both the good and the bad iterations.'}
            />

            <Card 
              img={'/assets/search/takeaway3.png'}
              title={ <FocusText text={'Collaboration & building community'} />}
              desc={'Working within a tight-knit team accelerated my growth and reinforced the value of supportive collaboration. Now, I strive to cultivate environments that encourage curiosity, and continuous learning for new members.'}
            />
          </div>
        </div> 
      </div>


      <div className={styles.block}> 
        <div className={styles.header}> Gallery </div>
        <div className={styles.gallery}>
          <ImageCaption 
            img={'/assets/search/5.png'} 
            caption={'Spring 2025 Project Showcase'}
          />
          <ImageCaption 
            img={'/assets/search/3.png'} 
            caption={'Escape room team bonding event'}
          />
          <ImageCaption 
            img={'/assets/search/club.png'} 
            caption={'Sandbox <3'}
          />
          <ImageCaption 
            img={'/assets/search/1.png'} 
            caption={'SearchNEU Brand book'}
          />
        </div>
      </div>


      {/* 
      <Subheader
        subheader= "Product Glimpse"
        desc= "Some glimpses of our finished designs!">
      </Subheader>
      
      <img className={styles.threePhones} src='/assets/search/threePhones.png'></img>

      */}




    </div>
  );
};

export default SearchNEU;
  