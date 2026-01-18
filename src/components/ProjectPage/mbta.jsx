import React, { useEffect } from 'react';
import {setWhiteBackground, defaultBackground } from '../../utils';

import styles from "./mbta.module.css";
import Details from './Details/details';
import Subheader from "./Subheader/subheader";
import Banner from './Banner/banner';
import { Link } from 'react-router-dom';

import Imagetext from './ImageText/imagetext';
import FocusText from './FocusText/focusText';
import Category from './Category/category';
import Divider from './Divider/divider';
import FullImage from './FullImage/fullImage';
import ListItem from './ListItem/listItem';


const Mbta = () => {
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
          <h2> MyCharlie </h2>
        </div>
        }
        desc= {<div>Changing the way MBTA riders explore Boston: This case study follows a user-centered design process grounded in rider interviews and qualitative research, resulting in a mobile app that reimagines how people experience and explore Boston via the MBTA.</div>}>
      </Subheader>
            

      <Details
        role="UI/UX Designer User Researcher"
        duration="Feb. - Mar. 2024"
        team= "Solo Project"
        tools= "Riders of the Boston Public Transit System"></Details>
      

      <Banner 
        banner='/assets/mbta/banner.png'
      />
      

      <div class={styles.block}> 
      <Subheader
        subheader= "Overview"
        desc= {<div> This case study was completed as part of my Design Process + Practices course's "Project: Intervention – Interactive", where we learned how to use the design process to fully document and realize an interactive project. My task was to create an interactive tool that improves the experience on Boston's public transportation system. </div>}
      />
      </div>

      <div class={styles.block}> 
        <Divider text={'Prototype Preview'}/>
        
        <div class={styles.phones}>
        <img class={styles.image} src= {'/assets/mbta/1.gif'}></img>
          <img class={styles.image} src= {'/assets/mbta/2.gif'}></img>
          <img class={styles.image} src= {'/assets/mbta/3.gif'}></img>
        </div>
      </div>

      <div class={styles.block}> 
        <Divider 
        text={'Understanding Riders'}
        subtext={'What problems do riders experience?'}/>
        <FullImage image={'/assets/mbta/affinity.png'}
        caption={'Affinity diagram with quotes from interviews'}/>
      </div>

      <div class={styles.block}> 
      <Imagetext
          image={'/assets/mbta/users.png'}
          text={
            <div className={styles.content}>
              <FocusText text={'To gain a better understanding of people that use the MBTA, I interviewed riders on the Green Line and students around campus '}/>
              <div className={styles.section}> 
                <Category category={'INSIGHTS'}/>
              
                <ListItem symbol={'1'} text={'Riders in reduced fare programs or weekly/monthly passes often experience frustrations because their payment methods are poorly integrated with modern mobile systems'} />
                <ListItem symbol={'2'} text={'Unfamiliarity and confusing navigation limit riders’ desire to explore beyond their usual routes. '} />
                <ListItem symbol={'3'} text={'Riders want real-time balance visibility and account-based systems rather than physical cards.'} />
              </div>

              <div className={styles.section}> 
              <Category category={'SYNTHESIS'}/>
              <p>Using these insights, I created an affinity diagram to identify patterns and pain points, which informed user personas and guided design decisions for a mobile app that simplifies fare management and encourages exploration via the T.</p>
              </div>
            </div>}
        ></Imagetext>
      </div>

      <div class={styles.block}> 
        <Divider 
        text={'Planning'}
        subtext={'Sitemap, low fidelity'}/>
        <FullImage 
        image={'/assets/mbta/sitemap.png'}
        caption={'Sitemap'}/>
      </div>

      <div class={styles.block}> 
      <FullImage 
        image={'/assets/mbta/lofi.png'}
        caption={'Low fidelity'}/>
      </div>

      <div class={styles.block}> 
        <Divider 
        text={'Initial Iterations'}/>
        
        <Imagetext
          image={'/assets/mbta/initial.png'}
          caption={'First iteration'}
          text={
            <div className={styles.content}>
              <FocusText text={'How might we encourage exploration by creating a stress-free transit experience?'}/>
              <div className={styles.section}> 
                <Category category={'DESIGN HYPOTHESIS'}/>
                <p>If we design an app that simplifies fare payment, integrates passes, and highlights T-accessible destinations, then riders will be more likely to use the MBTA and explore new places, because transit will feel easier, faster, and more rewarding.</p>
              </div>

              <div className={styles.section}> 
                <Category category={'FIRST ITERATION'}/>
                <p>My first prototype’s main focus was addressing the lack of tap-to-pay in the MBTA system. It allows users to scan their CharlieCard to add it to the app, reload the card, and pay the fare by scanning a QR code.</p>
              </div>

              <div className={styles.section}> 
              <Category category={'CHALLENGES'}/>
              <p>Upon further research, I discovered that the MBTA was already in the process of implementing tap-to-pay, making the QR code feature redundant. The app also didn’t encourage exploration or improve engagement.</p>
              </div>
            </div>}
        ></Imagetext>
      </div>


      <div class={styles.block}> 
        <Divider 
        text={'Ideation (Round 2)'}/>
        
        <Imagetext
          image={'/assets/mbta/tap.png'}
          
          text={
            <div className={styles.content}>
              <FocusText text={'How might we adapt to MBTA’s plans to integrate tap-to-pay while still maintaining key features?'}/>
              <div className={styles.section}> 
                <ListItem 
                symbol={'1'}
                text={'Allow users to add CharlieCards directly to their phone’s digital wallet for seamless payment.'}/>

                <ListItem 
                symbol={'2'}
                text={'Shift focus toward incentivizing exploration through personalized recommendations and rewards.'}/>
              </div>
            </div>}
        ></Imagetext>
      </div>

      <div class={styles.block}> 
        <Imagetext
          image={'/assets/mbta/solution.png'}
          text={
            <div className={styles.content}>
             <Category category={'A SOLUTION'}/>

                <p>Rather than scanning a QR code to pay, allow users to add CharlieCards to their digital wallet. This maintains the ability for users to reload their card ahead of time and pay for the fare using different payment methods, such as cash. </p>
                <p>This feature would also allow the user to add passes that typically use physical cards, like reduced fare for the elderly, employee-provided Perq cards for workers, and weekly/monthly passes for daily commuters.</p>

            </div>}
        ></Imagetext>
      </div>

      <div class={styles.block}> 
        <Divider 
        text={'Final Designs'}/>

        <FullImage image={'/assets/mbta/final.png'}/>

        
      </div>


      <div class={styles.block}> 
        <Divider 
        text={'Reflection'}/>

        <Subheader
          subheader={'Takeaways'}
          desc={
            <div className={styles.section}> 
                <ListItem symbol={'1'} text={'Competitive Analysis. Many riders mentioned existing transit systems that they preferred. Taking a look at precedents that work well and ones that dont provides good inspiration'} />
                <ListItem symbol={'2'} text={'Understanding user stories. The interviews. I conducted resulted in many different answers from people from different walks of life, that have different experiences with the T.  With affinity mapping, I was able to make that information more coherent '} />
                <ListItem symbol={'3'} text={'Being flexible to evolving contexts: shifting project goals due to changes in current infrastructure. I wasn’t aware that tap to pay being implemented, which showed that more research was necessary'} />
              </div>
          }
        />

        <Subheader
          subheader={'Next Steps'}
          desc={
            <div className={styles.section}> 
                <ListItem symbol={'1'} text={'Create more complete user flows and prototypes and conduct user testing with riders '} />
                <ListItem symbol={'2'} text={'Further explore and create more iterations for the destination recommendations feature. '} />
              </div>
          }
        />
      </div>

    {/** 
        <div className="p-{50px}">
        <iframe width={"100%"} height={"500px"} src="https://embed.figma.com/deck/bDclkeQAIZNt7V8TgyR308/MBTA-slides?node-id=2-117&viewport=-18%2C106%2C0.24&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&embed-host=share&footer=false" allowfullscreen></iframe>
        </div>
   
      <br/><br/><br/>
    */}
      
    

    </div>
  );
};

export default Mbta;
  