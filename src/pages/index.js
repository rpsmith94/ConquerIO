import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import ScrollToAnchor from './scroll-to-anchor';
import { HashLink } from 'react-router-hash-link';

const benefits = [
  {
    title: "Micro service benefits in embedded",
    imageUrl: 'img/microservice.png',
    description: (
      <>
       <p> Divide, decouple and deploy your embedded software to best handle scale and complexity. </p>
        Conquer provides a layered architecture where you are in control of <strong>components</strong>, <strong>communication</strong> and <strong>containerisation.</strong> 
        <p>


        </p>
      </>

    ),
  },
  {
    title: "Architecture",
    imageUrl: 'img/architecture.png',
    description: (
      <>
          <p>A lightweight extendible architecture where technologies are plug and play. </p>
          <ul>
          <li>Communicate via patterns such as <strong>publish subscribe </strong>, <strong>request response</strong> and <strong>client server.</strong> </li>
          <li>Arrange and allocate memory using our <strong>Conquer Memory Allocator.</strong></li>
          <li>Customise your concurrency with the <strong>Conquer Scheduer</strong></li>
          <li>Utilise a certified subset of the <strong>C++ Standard Library</strong></li>
          </ul>
      </>
    ),
  },
  {
    title: "DO-178C Certification",
    imageUrl: 'img/airplane.png',
    description: (
      <>
          <p>DO-178C certifiable pack available full with </p>
          <ul>
          <li>Requirements</li>
          <li>Tests</li>
          <li>100% Code Coverage</li>
          <li> C++ Autosar Coding Standard Compliant</li>
          </ul> 

      </>
      

    ),
  }
  
];
const features = [
  {
    title: "Componentisation",
    imageUrl: 'img/microservice.png',
    description: (
      <>
      <p>
      Uncouple and contain the domains of your solution in runnable Conquer components, each with there own entrypoint.
      </p>
      <p>
      Conquer components can be deployed into <strong>Containers </strong>
       as either static or shared libraries depending on your deployment needs.  <strong>See Containers & deployment user files</strong>
      </p>
      </>

    ),
  },
  {
    title: "Communication",
    imageUrl: 'img/architecture.png',
    description: (
      <>
      <p>
          Push or pull knowledge across your Components and Containers in the form of <strong>Topics</strong> using patterns such as <strong>Publish Subscribe</strong> and <strong>Request Response</strong> 
      </p>
      <p> 
        <br></br> 
        To facility communication Conquer allows you to supply your own or use existing communication <strong>Drivers</strong> such as the ConquerUDP, ConquerTCP or ConquerDirect.
        Declare this in the <strong>fabric</strong> layer using the <strong>Topology user files</strong> 
      </p>
      </>
    
      
    ),
  },
  {
    title: "Languages",
    imageUrl: 'img/coding.png',
    description: (
      <>
        Currently supported languages C++14(Compilers MSCV, Clang, GCC) and Python.
      </>
      

    )
  },
  {
    title: "Allocation",
    imageUrl: 'img/airplane.png',
    description: (
      <>

      </>
      

    ),
  },
  {
    title: "Scheduling",
    imageUrl: 'img/airplane.png',
    description: (
      <>

      </>
      

    ),
  },
  {
    title: "Tooling",
    imageUrl: 'img/airplane.png',
    description: (
      <>

      </>
      

    )
  },
  {
    title: "Utilities",
    imageUrl: 'img/airplane.png',
    description: (
      <>

      </>
      

    ),
  }
  
];


function Benefit({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    
    <Layout
      title={`${siteConfig.title}`}
      description="QuantCDN: the Static Web CDN">
     <header className={classnames('hero hero--primary', styles.heroBanner)}> 
 
        <div className="container">   
        <img className="image" src='img/modules.png' />

        <div class="stars">
<div class="fallingStar">&nbsp;</div>

<div class="fallingStar">&nbsp;</div>

<div class="fallingStar">&nbsp;</div>

<div class="fallingStar">&nbsp;</div>

<div class="fallingStar">&nbsp;</div>

<div class="fallingStar">&nbsp;</div>

<div class="fallingStar">&nbsp;</div>

<div class="fallingStar">&nbsp;</div>

<div class="fallingStar">&nbsp;</div>

<div class="fallingStar">&nbsp;</div>

<div class="fallingStar">&nbsp;</div>

<div class="fallingStar">&nbsp;</div>

<div class="fallingStar">&nbsp;</div>

<div class="fallingStar">&nbsp;</div>

<div class="fallingStar">&nbsp;</div>

<div class="fallingStar">&nbsp;</div>

<div class="fallingStar">&nbsp;</div>

<div class="fallingStar">&nbsp;</div>

<div class="fallingStar">&nbsp;</div>

<div class="fallingStar">&nbsp;</div>

<div class="fallingStar">&nbsp;</div>

<div class="fallingStar">&nbsp;</div>

<div class="fallingStar">&nbsp;</div>

<div class="fallingStar">&nbsp;</div>

<div class="fallingStar">&nbsp;</div>

<div class="fallingStar">&nbsp;</div>

<div class="fallingStar">&nbsp;</div>

<div class="fallingStar">&nbsp;</div>

<div class="fallingStar">&nbsp;</div>

<div class="fallingStar">&nbsp;</div>

<div class="fallingStar">&nbsp;</div>

<div class="fallingStar">&nbsp;</div>

<div class="fallingStar">&nbsp;</div>

<div class="fallingStar">&nbsp;</div>

<div class="fallingStar">&nbsp;</div>

<div class="fallingStar">&nbsp;</div>

<div class="fallingStar">&nbsp;</div>

<div class="fallingStar">&nbsp;</div>

<div class="fallingStar">&nbsp;</div>

<div class="fallingStar">&nbsp;</div>

<div class="fallingStar">&nbsp;</div>

<div class="fallingStar">&nbsp;</div>

<div class="fallingStar">&nbsp;</div>

<div class="fallingStar">&nbsp;</div>

<div class="fallingStar">&nbsp;</div>

<div class="fallingStar">&nbsp;</div>

<div class="fallingStar">&nbsp;</div>

<div class="fallingStar">&nbsp;</div>

<div class="fallingStar">&nbsp;</div>

<div class="fallingStar">&nbsp;</div>
        </div>
        <div class="background-glow background-glow-animated background-glow-spectrum background-glow-left">&nbsp;</div>
        <div class="background-glow background-glow-animated background-glow-spectrum background-glow-right">&nbsp;</div>     
          <div>
          <h1 class="headline">Conquer your softwares complexity </h1>
          <div class="scrolling-words-container">       
          <div class="scrolling-words-box">
           <ul>
            <li>Scaleable</li>
            <li>Certifiable</li>
            <li>Flexible</li>
            <li>Extendible</li>
            <li>Scaleable</li>
           </ul>
          </div>
          </div> 
          </div>  
          <br/>
          <br/>
          <h2 class="subheadline">  Componentise and deploy your software architecture</h2>
          <img className="imageProc" src='img/programming.png' />

          <img className="imageLayer" src='img/layers.png' />

          <div>
          < a class="btn btn-primary btn-lg" href="https://dashboard.quantcdn.io/register">Get Started</a>
          </div>
        </div>
      </header>
     
      <main>
        {benefits && benefits.length && (
          <section className="home--features" id="overview-link">
            <div className="container">
              <div className="row">
                {benefits.map((props, idx) => (
                  <Benefit key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
     
      <section className="home--features"  id="feature-link">
      <hr></hr>
        <h3 className ="headline">Features</h3>
        <br></br>

        <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Benefit key={idx} {...props} />
                ))}
              </div>
            </div>
      </section>
      </main>
    </Layout>
  );
}


export default Home;
