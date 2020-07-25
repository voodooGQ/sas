import React from "react";
import { connect } from "react-redux";
import { Header, Icon } from "semantic-ui-react";
import ExperienceCard from "../../components/experience/ExperienceCard";
import fiftybelow from "./50below.png";
import "./Experience.scss";
import fastersolutions from "./faster-solutions.jpeg";
import linuxacademy from "./linux-academy.jpg";
import logikcull from "./logikcull.png";
import nerdery from "./nerdery.png";
import rackspace from "./rackspace.png";

interface Props {}

class Experience extends React.Component<Props> {
  render() {
    return (
      <React.Fragment>
        <Header
          as="h1"
          textAlign="center"
          icon
          inverted
          size="huge"
          className="page-header"
        >
          <Icon name="briefcase" circular inverted color="purple" />
          <Header.Content className="page-header-content">
            Experience
          </Header.Content>
        </Header>
        <div className="experience">
          <ExperienceCard
            title="Rackspace"
            imageSrc={rackspace}
            position="Software Engineer III"
            experienceItems={[
              "Responsible for Research and Development on various cloud based technologies to assist in the creation of tools for our development teams. This often required pivoting between many different languages, frameworks, and libraries to produce the required project outcome.",
              <p>
                Led the development effort for "Auth@Edge", an add-on to{" "}
                <a
                  href="https://docs.onica.com/projects/runway/en/release/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Onica Group's "Runway"
                </a>{" "}
                allowing for the automated deployment of private static sites
                backed by a Cognito authorizer. This allowed our development
                teams to quickly and easily spin-up development sites that were
                secured by the clients specific single sign-on service without
                the need for extensive configuration and planning. This effort
                is open sourced and available for public use.
              </p>,
              'Led the development effort for "Vend-r", an internal web application to automate the creation of AWS Organization accounts and enforce authorization requirements around Role assumption. This allowed the organization to closely monitor the usage of AWS resources, quickly move employees from one authority group to another, and course correct any over spending on behalf of the user base.',
            ]}
          />
          <ExperienceCard
            title="Logikcull"
            imageSrc={logikcull}
            position="Senior Software Engineer"
            experienceItems={[
              'Led the effort to refactor the continuous integration and deployment pipeline and testing strategy surrounding deployments. Test suite previously took anywhere from 30 to 45 minutes to run often with variability in passing results. That time was reduced to an average of 4 minutes while nullifying the "flappy" tests after refactor. This greatly increased deployment velocity of the team.',
              "Led the effort and guided the team in converting the application from a monolith to multiple micro-services. Utilizing the Serverless framework services were created and planned around Kinesis which acted as a publish-subscribe endpoint for various event streams within the application suite. As new events were published to Kinesis the subscribing services would consume the event and perform any functionality on that data in real time. Following this strategy allowed for pieces to be segmented from the monolith into various single focus entities creating greater modularity and a better development experience.",
              "Guided and mentored other team developers as the company began embracing a fundamentally agile process for handling projects. Previously the organization had leaned towards waterfall approaches that did not allow for the type of scalability required for the growth of the company.",
            ]}
          />
          <ExperienceCard
            title="Linux Academy"
            imageSrc={linuxacademy}
            position="Senior Lab Services Engineer"
            experienceItems={[
              "Responsible for rearchitecting and redesigning a custom expectation testing library used to verify student assessment submissions of cloud platform environments (AWS, Azure, OpenStack, ect.). Increased processing performance by over 300% while providing more meaningful error handling, return values, and scalability avenues for future integrations.",
              "Was able to identify productivity enhancements to our pipelines and workflows which enabled the team to complete an average of 150% more assigned tasks in the same period of time allowed (48 hours). This allowed the content development team to keep up with student demand of new courses while allowing Lab Services to develop new tools and processes to increase efficiency and fortify performance of our software offerings.",
              "Made recommendations on utilizing development tools such as Rollbar, Rubocop, and Pry to ensure the integrity of our product suite. Through recommendations and support was able to standardize these tools through the company and accurately identify several production bugs that were not previously known.",
            ]}
          />
          <ExperienceCard
            title="Nerdery"
            imageSrc={nerdery}
            position="Principal Software Engineer"
            experienceItems={[
              "Led over 50 successful projects with an average budget utilization percentage of 93.02%. Pinpointing efficiencies in the projects allowed customers to utilize surplus resources for extended feature sets, ultimately getting them more in line with their overall business goals. Worked with high profile portfolio engagements such as Pepsi Co / Frito Lay, Hasbro, Marriot, Purina, Medtronic, Blizzard Entertainment, Surly Brewing Company, The Marketing Arm, BBDO, Grey New York, and many more.",
              "Defined the offering of Ruby on Rails at the company. Through leadership and guidance was able to provide the sales team with the necessary tools to effectively address Ruby on Rails based leads and obtain client portfolios that otherwise would have proved beyond The Nerdery’s reach.",
              "Created a framework allowing custom WordPress projects to be completed in comparable time frames to that of the third party compilation versions. This framework bridged the gap between the CMS and Custom PHP Application development teams.",
              " Entrusted with mentoring team members in the use of build tools and bleeding edge technologies as well as various best practice approaches to HTML, CSS, JavaScript, WordPress, PHP, Ruby/Rails and technical documentation.",
            ]}
          />
          <ExperienceCard
            title="Faster Solutions"
            imageSrc={fastersolutions}
            position="Senior Web Developer"
            experienceItems={[
              "Reduced project timelines by an average of 21% by streamlining the build process for the company. This involved filtering most of our clientele into a WordPress based system and altering company processes to ensure workflows were being executed with minimal overhead.",
              "Shifted the build process from .NET to WordPress due to the more consistent point of entry. This increased the active client capacity the company could support at any given time.",
              "Built trust with clients through transparency and successful solutions. This trust lead to 4 additional projects allowing for company expansion.",
            ]}
          />
          <ExperienceCard
            title="50 Below"
            position="Senior Web Developer"
            imageSrc={fiftybelow}
            experienceItems={[
              "Facilitated consistent offerings for our clients by developing 53 articles of formal procedural documentation used by the company for training and development. Formalizing the documentation in this manner allowed for easier job ramp-in and reduced hands-on mentorship requirements.",
              "Created custom modules to meet customer's requests considered out of scope from the normal factory line procedures of the company. Created departmental tool sets to increase developer efficiency within the department.",
              "Ensured customer satisfaction and continued contracts by increasing the site maintenance team’s efficiency 36.8% and corresponding task turnaround time by 13.4% through employee mentorship and guidance.",
            ]}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default connect(null, null)(Experience);
