import React from 'react';

import styles from "./akoya.module.css";
import Details from './Details/details';
import Subheader from "./Subheader/subheader";
import Banner from './Banner/banner';

import Imagetext from './ImageText/imagetext';
import FocusText from './FocusText/focusText';
import Category from './Category/category';
import Divider from './Divider/divider';
import FullImage from './FullImage/fullImage';
import ListItem from './ListItem/listItem';
import BlockIntro from './BlockIntro/blockintro';

import Gate from '../Gate/gate';


const Akoya = () => {

  return (
    <Gate password="spring2026">
    <div>

      <Subheader
        subheader= 
        {
        <div className={styles.ProjectTitle}>
         
          <h2> Akoya </h2>
        </div>
        }
        desc= {<div>Redesigning Akoya’s Data Recipient Hub dashboard to enable greater flexibility and personalization beyond a one-size-fits-all model: This case study focuses on the design of the app management tile.</div>}>
      </Subheader>
            
      <Banner 
        banner='/assets/akoya/banner.png'
      />

      <Details
        role="UI/UX Design Co-op"
        duration="Jul. - Dec. 2025"
        team= {
          <div>Principal Product Designer: David Chung <br/>
            Senior Product Designer: Ryan Magalhaes <br/>
            UX Designer: Ajay Chaudry <br/>
          </div>
        }
        tools= "Financial institutions and fintechs"></Details>
      
      
      <div className={styles.block}> 
      <div className={styles.content}>
      <Imagetext
          image={'/assets/akoya/about.png'}
          text={
  
              
              <div className={styles.section}> 
                <div>
                <Category category={'CONTEXT'}/>
                <FocusText text={'Akoya is a financial data-access network that enables fintechs and financial institutions to securely share consumer-permissioned data through APIs.'}></FocusText>
                </div>
       
              <div>
                <Category category={'MY ROLE'}/>
                <p>This case study examines the redesign of the Data Recipient Hub dashboard. My goal was improve onboarding experiences for all user roles by enabling greater flexibility and personalization beyond a one-size-fits-all model.</p>
              </div>
            </div>
            }
        ></Imagetext>

        <FullImage 
          header={'Dashboard Designs Preview'}
          image={'assets/akoya/preview.png'}>
        </FullImage>

      </div>
      </div>

      <div className={styles.block}>
        <div className={styles.content}>
        <BlockIntro
          number={'01'}
          title={'Understanding the context behind Akoya’s tools and user base'}
          rightside={
            <div className={styles.section}>
              <FocusText text={'Before diving into design solutions, I needed to understand the foundational context around Akoya’s tools and user base.'}/>
             
              <p>Throughout my co-op, I constantly reviewed documentation, existing workflows, and user journeys to inform my design decisions.</p>
              <FullImage 
                image={'assets/akoya/journey.png'} 
                caption={'data recipient customer journey'}></FullImage>
              <FullImage 
                image={'assets/akoya/current.png'} 
                caption={'Exploring existing tools via testing environments'}></FullImage>
            </div>
            }
        />
      </div>
      </div>

      <div className={styles.block}>
        <div className={styles.content}>
        <BlockIntro
          number={'02'}
          title={'Setting up design documentation + understanding motivations'}
          rightside={ 
            <div></div>
            }
        />

        <FullImage 
         header={'Dashboard tile table '}
          image={'assets/akoya/table.png'} 
          caption={'data recipient customer journey'}>
        </FullImage>
      </div>
      </div>


      <div class={styles.block}> 
        <Divider text={'Existing Precedents'}/>
        <FullImage image={'assets/akoya/precedents.png'}></FullImage>
      </div>


      <div class={styles.block}> 
        <Divider 
          text={'Deep Dive: App Management Tile'}
          subtext={'How might we design an app management tile that adapts to the user?'}/>
        
        <Imagetext
          image={'/assets/akoya/currentapp.png'}
          caption={'Current app management tile'}
          text={
            <div className={styles.content}>
              <FocusText text={'The App Management tile is the primary entry point for creating, viewing, and managing sandbox and production apps.'}/>
              <div className={styles.section}> 
                <Category category={'PROBLEMS'}/>
                <ListItem symbol={'1'} text={'Assumes user has full permissions to register and manage apps.'}></ListItem>
                <ListItem symbol={'2'} text={'Lacks empty states, assumes that apps already exist'}></ListItem>
                <ListItem symbol={'3'} text={'Static call to action doesn’t adapt to user context and lacks guidance for first-time or limited-access users'}></ListItem>
              </div>

              <div className={styles.section}> 
                <Category category={'GOAL'}/>
                <p>Create a fully functional, modular tile that could adapt to different users by selectively revealing, hiding, or disabling elements based on role, permissions, and progress in the onboarding flow.</p>
                
              </div>
            </div>}
        ></Imagetext>
        </div>

        <div class={styles.block}>
        <Imagetext
          image={'/assets/akoya/1.png'}
          caption={'First iteration'}
          text={
            <div className={styles.content}>
              
              <div className={styles.section}> 
                <Category category={'ITERATION 1: ESTABLISHING CORE FUNCTIONALITY'}/>
                <p>My first iteration focused on defining the tile’s foundational actions and layout:</p>

                <ListItem symbol={'1'}  text={'Prioritized two primary actions: registering an app and viewing existing apps'}></ListItem>
                <ListItem symbol={'2'}  text={'Displayed a lightweight table preview showing app name and ID'}></ListItem>
                <ListItem symbol={'3'}  text={'Introduced a filter dropdown to help users quickly locate apps'}></ListItem>
               
               <p>How might we increase scalability and flexibility?</p>
              </div>
            </div>}
        ></Imagetext>
        </div>

        <div class={styles.block}>
        <Imagetext
          image={'/assets/akoya/2.png'}
          caption={'Second iteration'}
          text={
            <div className={styles.content}>
              
              <div className={styles.section}> 
                <Category category={'ITERATION 2: SCALING UP'}/>
                <p>Created a tile component after defining the general structure of the tile, making it flexible for future tiles that also require tables (e.g. the support tickets tile)</p>
                </div>
                
                <p>⚠️ At this stage, I introduced a status column, assuming each app had a single status.</p>
                
                <ListItem  symbol={'1'} text={'During a design review, collaboration with product and engineering revealed a critical insight: apps can have multiple statuses depending on which financial institutions they’re connected to. This made a single status column misleading and insufficient.'}></ListItem>
              
            </div>}
        ></Imagetext>
        </div>


        <div class={styles.block}> 
        <Imagetext
          image={'/assets/akoya/future.png'}
          text={
            <div className={styles.content}>
              <div className={styles.section}> 
              <FocusText text={'How might we highlight changes or events that actually require user attention or action?'}></FocusText>
                <Category category={'FUTURE EXPLORATIONS'}/>
              </div> 
              
              <ListItem symbol={'1'} text={'Conversations with engineers, product managers, and the design team helped clarify user needs. This led to future explorations, with the broader question:'}></ListItem>
              
              <div className={styles.section}> 
                <Category category={'EXPLORING USE CASES'}/>
                <p>I explored scenarios where users would benefit from proactive signals, such as:</p>
              <div/>

              <div className={styles.section}> 
                <ListItem symbol={'1'}text={'Client secret resets'}></ListItem>
                <ListItem symbol={'2'} text={'App configuration changes that require follow-up'}></ListItem>
                <ListItem symbol={'3'} text={'Status changes tied to production access'}></ListItem>
              </div>

              <div className={styles.section}> 
                <p>Client secret resets, in particular, emerged as a critical event that users should be immediately aware of, reinforcing the need for the tile to surface contextually important information rather than static metadata.</p>
              </div>
              </div>
            </div>}
        ></Imagetext>
      </div>

      <div class={styles.block}>
        <Imagetext
          image={'/assets/akoya/mvp.png'}
          caption={'Although I had many ideas and explorations, some were out of scope. We needed to define which features were necessary for the MVP'}
          text={
            <div className={styles.content}>
              
              <div className={styles.section}> 
                <Category category={'DEFINING THE MVP'}/>
                <p>While future explorations surfaced many opportunities to make the App Management tile more adaptive and informative, not all ideas were feasible within the project’s scope and timeline. To move forward, we needed to clearly define what functionality was essential for an MVP, and what could be deferred.</p>
              </div>
            </div>}
        ></Imagetext>
        </div>
      


      <div class={styles.block}> 
        <Divider 
        text={'Reflection'}/>

        <Subheader
          subheader={'Takeaways'}
          desc={
            <div className={styles.section}> 
                <ListItem 
                  symbol={'1'} 
                  boldtext={'Ask Questions (even obvious ones). '}
                  text={' I learned quickly that asking questions helped me understand a lot of complex concepts about Akoya`s products and users. Those conversations often changed how I framed problems and led to stronger, more grounded design decisions.'} />
                <ListItem 
                  symbol={'2'} 
                  boldtext={'Stay flexible because priorities shift fast. '}
                  text={'Midway through my co-op, I had to pivot to a different project due to roadmap changes. It reinforced how important adaptability is, especially in fintech, where priorities can shift based on policy, partnerships, or company direction.'} />
                <ListItem 
                  symbol={'3'} 
                  boldtext={'Explore ideas, even if they won’t ship (yet).'}
                  text={'Some ideas weren’t immediately feasible due to technical or timeline constraints, but sharing them helped align the team on long-term direction, clarify MVP scope, and make more intentional tradeoffs. Even when ideas don’t ship, they still move the product forward.'} />
              </div>
          }
        />
      </div>
    </div>
    </Gate>
  );
};

export default Akoya;
  