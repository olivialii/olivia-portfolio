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

import Gate from '../Gate/gate';


const Akoya = () => {

  return (
    <Gate password="spring2026">
    <div>

      <Subheader
        subheader= 
        {
        <div class={styles.ProjectTitle}>
         
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
            Senior Product Designer: Rhttp://localhost:5174/Akoyayan Magalhaes <br/>
            UX Designer: Ajay Chaudry <br/>
          </div>
        }
        tools= "Financial institutions and fintechs"></Details>
      


      
      
      <div class={styles.block}> 
      <Imagetext
          image={'/assets/akoya/about.png'}
          text={
            <div className={styles.content}>
              
              <div className={styles.section}> 
                <Category category={'ABOUT AKOYA'}/>
                <FocusText text={'Akoya is a financial data-access network that enables fintechs and financial institutions to securely share consumer-permissioned data through APIs.'}></FocusText>
                
              </div>

              <div className={styles.section}> 
              <Category category={'MY ROLE'}/>
              <p>As a UI Design Co-op, I primarily worked on two core products: The Data recipient hub, and the Admin console.</p>
              </div>
             
              <p>This case study examines the redesign of the Data Recipient Hub dashboard, specifically the app management tile. My goal was to enable greater flexibility and personalization beyond a one-size-fits-all model.</p>
             
            </div>}
        ></Imagetext>
      </div>

      <div class={styles.block}> 
        <Divider text={'Dashboard Designs Preview'}/>
        <FullImage image={'assets/akoya/preview.png'}></FullImage>
      </div>

      <div class={styles.block}> 
        <Divider 
        text={'Data Recipient Hub'}
        subtext={'Understanding context'}/>
         <Imagetext
          image={'/assets/akoya/journey.png'}
          caption={'data recipient customer journey'}
          text={
            <div className={styles.content}>
              <div class={styles.section}>
                <Category category={'FIRST STEPS'}></Category>
                <FocusText text={'Designing an effective tool requires first a clear understanding of its users and what they want to accomplish.'}></FocusText>
              </div>
              <p> Who are data recipients? What is the Data Recipient Hub? What role does it play within Akoya’s ecosystem? Who are its users? What goals do different users have, and how do those goals shape their expectations when using Akoya’s products?</p>
              <p>Within my first few days, I already had so many questions.  I needed to understand foundational context around Akoya’s tools and user base, so I reviewed documentation, workflows, and asked my team for a ton of explanations.</p>
            </div>}
        ></Imagetext>
      </div>

      <div class={styles.block}> 
      <Imagetext
          image={'/assets/akoya/current.png'}
          caption={'current dashboard'}
          text={
            <div className={styles.content}>
              
              <div className={styles.section}> 
                <Category category={'AUDITING THE EXISTING DASHBOARD'}/>
                <p>Equipped with the knowledge of user roles and goals, I then needed to understand how they interact with the data recipient hub (previously called developer portal).  I utilized the testing environment to audit the existing dashboard.</p>
              </div>

              <p>I documented my findings in a table to track supported personas, key tasks/goals, tile states, and opportunities for improvement for each tile on the dashboard.</p>
                <p>This table became a working artifact that helped me identify which tiles required deeper exploration. It also supported early ideation and brainstorming around which tiles to redesign and how they could better serve specific users.</p>
                
            '</div>}

            
        ></Imagetext>
      </div>

      <div class={styles.block}> 
        <div class={styles.content}> 
          <FullImage 
            image={'assets/akoya/table.png'}
            caption={'Keeping track of each dashboard tile'}>
          </FullImage>
          <div/>
      <div/>

      <div class={styles.block}>
          <Imagetext
          image={'/assets/akoya/matrix.png'}
          caption={'Visual design matrix'}
          text={
            <div className={styles.content}>
              <FocusText text={'I created a design matrix to centralize design decisions and create a shared source of truth for everyone on the team.'}/>
              <div className={styles.section}> 
                <p>Designing so many tiles at once could get disorganized fast. I introduced a design matrix to provide a clear, visual overview of all the different states and variations</p>
                
              </div>

              <div className={styles.section}> 
                <Category category={'IMPACT'}/>
                <p>Maintaining this matrix throughout the project improved alignment across design, product, and engineering as the dashboard evolved. Developers used it as a reference point during implementation, which made feedback more actionable and surfaced gaps early, especially when something was missing or didn’t quite make sense.</p>
              </div>
            </div>}
        ></Imagetext>
        </div>
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
  