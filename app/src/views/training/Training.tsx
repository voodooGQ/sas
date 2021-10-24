import "./Training.scss";

import React, { useContext, useEffect } from "react";
import { Header, Icon } from "semantic-ui-react";
import SkillsSection from "../../components/training/SkillsSection";
import { ActiveNavigationContext } from "../../context/ActiveNavigationContext";

import axios from "./icons/libraries/axios.png";
import cloudformation from "./icons/aws/cloudformation.png";
import cloudfront from "./icons/aws/cloudfront.png";
import cloudwatch from "./icons/aws/cloudwatch.png";
import cobra from './icons/libraries/cobra.png'
import cognito from "./icons/aws/cognito.png";
import docker from "./icons/tools/docker.png";
import dynamodb from "./icons/aws/dynamodb.png";
import enzyme from "./icons/libraries/airbnb.png";
import eslint from "./icons/libraries/eslint.png";
import go from "./icons/languages-and-frameworks/go.png";
import iam from "./icons/aws/iam.png";
import javascript from "./icons/languages-and-frameworks/javascript.png";
import jest from "./icons/libraries/jest.png";
import lambda from "./icons/aws/lambda.png";
import mysql from "./icons/tools/mysql.png";
import onica from "../experience/onica.png";
import postgres from "./icons/tools/postgres.png";
import reactIcon from "./icons/languages-and-frameworks/react.png";
import reactrouter from "./icons/libraries/react-router.png";
import redux from "./icons/libraries/redux.png";
import route53 from "./icons/aws/route53.png";
import s3 from "./icons/aws/s3.png";
import selenium from "./icons/tools/selenium.png";
import semanticUI from "./icons/libraries/semantic-ui.png";
import serverless from "./icons/languages-and-frameworks/serverless.png";
import stepfunctions from "./icons/aws/stepfunctions.png";
import terraform from "./icons/tools/terraform.png"
import typescript from "./icons/languages-and-frameworks/typescript.png";
import vim from "./icons/tools/vim.png";
import vscode from "./icons/tools/vscode.png";
import webpack from "./icons/libraries/webpack.png";

const Training: React.FC = (): JSX.Element => {
  const { toggleActive } = useContext(ActiveNavigationContext);

  useEffect(() => {
    toggleActive("training");
  }, [toggleActive]);

  const awsSkillsList = [
    { name: "CloudFormation", image: cloudformation },
    { name: "CloudFront", image: cloudfront },
    { name: "CloudWatch", image: cloudwatch },
    { name: "Cognito", image: cognito },
    { name: "DynamoDB", image: dynamodb },
    { name: "IAM", image: iam },
    { name: "Lambda", image: lambda },
    { name: "Route 53", image: route53 },
    { name: "S3", image: s3 },
    { name: "Step Functions", image: stepfunctions },
  ];

  const languagesAndFrameworks = [
    { name: "Go", image: go },
    { name: "JavaScript", image: javascript },
    { name: "React", image: reactIcon },
    { name: "Serverless Framework", image: serverless },
    { name: "TypeScript", image: typescript },
  ];

  const libraries = [
    { name: "Axios", image: axios },
    { name: "Cobra", image: cobra },
    { name: "ESLint", image: eslint },
    { name: "Enzyme", image: enzyme },
    { name: "Jest", image: jest },
    { name: "Onica Group's Sailplane", image: onica },
    { name: "React Router", image: reactrouter },
    { name: "Redux", image: redux },
    { name: "Semantic UI", image: semanticUI },
    { name: "Webpack", image: webpack },
  ];

  const tools = [
    { name: "Docker", image: docker },
    { name: "MySQL", image: mysql },
    { name: "Onica Group's - Runway", image: onica },
    { name: "Postgres", image: postgres },
    { name: "Selenium", image: selenium },
    { name: "Terraform", image: terraform },
    { name: "Vim", image: vim },
    { name: "Visual Studio Code", image: vscode },
  ];

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
        <Icon name="book" circular inverted color="orange" />
        <Header.Content className="page-header-content">
          Training
        </Header.Content>
      </Header>
      <div className="training">
        <ul>
          <li key="aws">
            Amazon Web Services Certified Developer Associate issued by Amazon
            Web Services
          </li>
          <li key="mcdba">
            Microsoft Certified Database Administrator (MCDBA) issued by
            Connecting Point Information Technology School
          </li>
          <li key="managing-emotions">
            Managing Emotions Under Pressure issued by Fred Pryor CareerTrack
          </li>
          <li key="dealing-with-difficult-people">
            Dealing with Difficult People issued by Fred Pryor CareerTrack
          </li>
          <li key="team-building">
            Team Building, Mentoring, and Coaching Skills issued by Fred Pryor
            CareerTrack
          </li>
          <li key="ultimate-supervisor">
            The Ultimate Supervisor issued by Fred Pryor CareerTrack
          </li>
          <li key="customer-service-manager-academy">
            Customer Service Manager Academy issued by AT&T Mobility
          </li>
        </ul>
      </div>
      <div className="skills">
        <Header inverted as="h2">
          Skills
        </Header>
        <SkillsSection
          title="Amazon Web Services"
          key="aws"
          skills={awsSkillsList}
        />
        <SkillsSection
          title="Languages and Frameworks"
          key="languages-and-frameworks"
          skills={languagesAndFrameworks}
        />
        <SkillsSection title="Libraries" key="libraries" skills={libraries} />
        <SkillsSection title="Tools" key="tools" skills={tools} />
      </div>
    </React.Fragment>
  );
};

export default Training;
