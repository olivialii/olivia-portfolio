import { useEffect } from 'react';
import {setWhiteBackground, defaultBackground } from '../../utils';

import styles from "./mbta.module.css";
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
import Card from './Card/card';


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
        subheader= "MyCharlie"
        desc= {<div>Transforming the way riders experience and discover destinations around Massachusetts via the MBTA.</div>}>
      </Subheader>
            
      <Banner 
        banner='/assets/mbta/banner.png'
      />

      <Details
        role="UI/UX Designer User Researcher"
        duration={'Feb. - Mar. 2024 (1 month)'}
        team= "Solo Project"
        tools= "Riders of the Boston Public Transit System"></Details>

      

      <div className={styles.block}> 
        <div className={styles.section}>
        <FullImage 
        header={
          <div className={styles.header}>
            <h2>Prototype Preview</h2><br/><br/>
            <div className={styles.phones}>
              <img className={styles.image} src= {'/assets/mbta/1.gif'}></img>
              <img className={styles.image} src= {'/assets/mbta/2.gif'}></img>
              <img className={styles.image} src= {'/assets/mbta/3.gif'}></img>
            </div>
          </div>
        }/>
        </div>
      </div>


      <div className={styles.block}>
        <div className={styles.content}>
        <BlockIntro
          number={'01'}
          title={'Interviewing riders to identify a problem space'}
          rightside={
            <div className={styles.section}>

              <div>
                <Category category={'DESIGN CHALLENGE'}/>
                <p>As a project for the course Design Processes & Practices, I addressed the broad challenge: Transforming the way riders experience the MBTA.</p>
              </div>

              <div>
                <Category category={'MY APPROACH'}/>
                <FocusText text='I interviewed riders on the Green Line and students around campus to gain a better understanding of their experiences. I organized my findings in an affinity diagram, which then informed the user personas that defined my target audience. '/>
              </div>
            </div>
          }
        />

        <FullImage 
          header={'Affinity Diagram'}
          image={'/assets/mbta/affinity.png'}
        />

        
        <Imagetext
          header={'User Personas'}
          image={'/assets/mbta/users.png'}
          text={
            <div> 
                <div className={styles.section}>

                  
                  <div>
                  <div>
                    <Category category={'INSIGHTS'}/>
                    <ListItem
                      symbol={'•'}
                      text={'Reduced fare programs are poorly integrated with modern mobile systems, causing frustration for riders who rely on them.'}
                    />
                  </div>

                 <div>
                    <ListItem
                      symbol={'•'}
                      text={'Unfamiliarity and confusing navigation limit riders’ desire to explore beyond their usual routes.'}
                    />
                  </div>
                  <div>
                    <ListItem
                      symbol={'•'}
                      text={'Riders want real-time balance visibility and account-based systems rather than physical cards.'}
                    />
                  </div>
                  </div>

                  <div>
                    <Category category={'PROBLEM STATEMENT'}/>
                    <FocusText text='How might we encourage exploration by creating a stress-free transit experience?'/>
                  </div>

              </div>
            </div>
          }
        
        />  
        </div> 
      </div>

      <div className={styles.block}>
        <div className={styles.content}>
        <BlockIntro
          number={'02'}
          title={'Planning: Sitemap and low fidelity prototypes'}
          rightside={
            <div className={styles.section}>


              <div>
                <Category category='PROJECT PROPOSAL'/>
                <p> After several rounds of ideation, I proposed a solution: A mobile app that simplifies fare management and encourages exploration via the T.</p>
              </div>

              <Card
                title={'DESIGN HYPOTHESIS'}
                desc={'If we design an app that simplifies fare payment, integrates passes, and highlights T-accessible destinations, then riders will be more likely to use the MBTA and explore new places, because transit will feel easier, faster, and more rewarding.'}
              ></Card>
            </div>
          }
        />

        <FullImage
          header={'Sitemap'}
          image={'/assets/mbta/sitemap.png'}
        />

        <FullImage
          header={'Low Fidelity Prototypes'}
          image={'/assets/mbta/lofi.png'}
        />

        </div>
      </div>

      <div className={styles.block}> 
        <div className={styles.content}>

          <BlockIntro
            number={'03'}
            title={'Iterating based on feedback and evolving contexts'}
            rightside={
              <div className={styles.section}>
                <p>My first prototype’s main focus was addressing the lack of tap-to-pay in the MBTA system. It allowed users to scan their CharlieCard to add it to the app, reload the card, and pay the fare by scanning a QR code. <span style={{fontWeight: 'bold'}}>However, this idea needed more refinement.</span></p>
              </div>
            }
          />

          <Imagetext
            header={'Initial Iterations'}
            image={'/assets/mbta/initial.png'}
            text={
              <div className={styles.section}>

                <div>
                  <Category category={'INSIGHTS'}/>
                  <p>Upon further research, I discovered that the MBTA was already in the process of implementing tap-to-pay, making the QR code feature redundant. The app also didn’t encourage exploration or improve engagement.</p>
                </div>

                <div>
                <Category category={'CHALLENGES'}/>
                <ListItem 
                  symbol={'•'}
                  text={'The MBTA’s plans to implement tap-to-pay made my QR code payment feature redundant.'}
                />
                <ListItem 
                  symbol={'•'}
                  text={'Peers expressed that they did not feel encouraged to take the MBTA to explore new destinations when using the app'}
                />
                </div>
              </div>
            }
          />

          <Imagetext
            header={'Apple Wallet Integration'}
            image={'/assets/mbta/tap.png'}
            text={
              <div className={styles.section}>

                <div>
                  <FocusText text={'How might we adapt to MBTA’s plans to integrate tap-to-pay while still maintaining key features?'}/>
                </div>

                <div>
                  <ListItem 
                    symbol={'•'}
                    text={'Allow users to add CharlieCards directly to their phone’s digital wallet for seamless payment.'}
                  />
                  <ListItem 
                    symbol={'•'}
                    text={'Shift focus toward incentivizing exploration through personalized recommendations and rewards.'}
                  />
                </div>
              </div>
            }
          />

          <Imagetext
            image={'/assets/mbta/solution.png'}
            text={
              <div className={styles.section}>

                <div>
                  <Category category={'SOLUTION'}/>
                  <FocusText text={'Rather than scanning a QR code to pay, allow users to add CharlieCards to their digital wallet.'}/>
                </div>

                <div>
                   <ListItem 
                    symbol={'•'}
                    text={'Maintains the ability for users to reload their card ahead of time and pay with multiple methods, including cash.'} />
                  <ListItem 
                    symbol={'•'}
                    text={'Suppports digital access to traditionally physical passes, like reduced-fare senior passes, employer-provided Perq cards, and weekly or monthly commuter passes.'} />
                </div>

              </div>
            }
          />

          <FullImage
            header={'Updated Prototype'}
            image={'/assets/mbta/final.png'}
          />

        </div>
      </div>

      <div className={styles.block}>
        <div className={styles.content}>
          <BlockIntro
            number={'04'}
            title={'Final Reflections'}
            rightside={
              <div className={styles.section}>
                <div>
                 <ListItem 
                    symbol={'•'}
                    boldtext={'Approaching broad challenges with flexible mindsets:'}
                    text={'While I had many ideas, I had to narrow my focus to address real problems that users were facing.'} />
                  <ListItem 
                    symbol={'•'}
                    boldtext={'Staying updated on evolving contexts:'}
                    text={'In the middle of the project, I had to adjust my ideas due to changes in current infrastructure. I wasn’t aware that tap to pay was being implemented, which showed that more research was necessary before designing solutions.'} />
                  <ListItem 
                    symbol={'•'}
                    boldtext={'Synthesizing user stories'}
                    text={'The interviews I conducted provided diverse perspectives and personal experiences that informed my design decisions. With affinity mapping, I was able to make that information more coherent. '} />
               </div>
              </div>
            }
          />
        </div>
      </div>


      <div className={styles.block}>
        <div className={styles.content}>
          <BlockIntro
            number={'05'}
            title={'Next Steps'}
            rightside={
              <div className={styles.section}>
                <div>
                 <ListItem 
                    symbol={'•'}
                    boldtext={'More user testing:'}
                    text={'Validate the design solutions through user testing to ensure they meet user needs and expectations.'} />
                  <ListItem 
                    symbol={'•'}
                    boldtext={'Personalization:'}
                    text={'Enhance the user experience by providing personalized recommendations and rewards based on user behavior and preferences.'} />
                  <ListItem 
                    symbol={'•'}
                    boldtext={'Community engagement:'}
                    text={'Foster a sense of community among riders by incorporating social features, such as sharing favorite routes or destinations.'} />
               </div>
              </div>
            }
          />
        </div>
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
  