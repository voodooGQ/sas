import "./Training.scss";

import React from "react";
import { Header, Icon } from "semantic-ui-react";
import SkillsSection from "../../components/training/SkillsSection";

import cloudformation from "./icons/aws/cloudformation.png";
import cloudfront from "./icons/aws/cloudfront.png";
import cloudwatch from "./icons/aws/cloudwatch.png";
import codebuild from "./icons/aws/codebuild.png";
import codepipeline from "./icons/aws/codepipeline.png";
import cognito from "./icons/aws/cognito.png";
import dynamodb from "./icons/aws/dynamodb.png";
import ec2 from "./icons/aws/ec2.png";
import iam from "./icons/aws/iam.png";
import lambda from "./icons/aws/lambda.png";
import route53 from "./icons/aws/route53.png";
import s3 from "./icons/aws/s3.png";
import sns from "./icons/aws/sns.png";
import stepfunctions from "./icons/aws/stepfunctions.png";
import vpc from "./icons/aws/vpc.png";
import angular from "./icons/languages-and-frameworks/angular.png";
import ember from "./icons/languages-and-frameworks/ember.png";
import go from "./icons/languages-and-frameworks/go.png";
import javascript from "./icons/languages-and-frameworks/javascript.png";
import php from "./icons/languages-and-frameworks/php.png";
import python from "./icons/languages-and-frameworks/python.png";
import rails from "./icons/languages-and-frameworks/rails.png";
import reactIcon from "./icons/languages-and-frameworks/react.png";
import ruby from "./icons/languages-and-frameworks/ruby.png";
import typescript from "./icons/languages-and-frameworks/typescript.png";
import wordpress from "./icons/languages-and-frameworks/wordpress.png";
import enzyme from "./icons/libraries/airbnb.png";
import axios from "./icons/libraries/axios.png";
import chartjs from "./icons/libraries/chart-js.png";
import cypress from "./icons/libraries/cypress.png";
import eslint from "./icons/libraries/eslint.png";
import jest from "./icons/libraries/jest.png";
import puppeteer from "./icons/libraries/puppeteer.png";
import reactrouter from "./icons/libraries/react-router.png";
import redux from "./icons/libraries/redux.png";
import semanticUI from "./icons/libraries/semantic-ui.png";
import bitbucketPipelines from "./icons/tools/bitbucketPipelines.png";
import docker from "./icons/tools/docker.png";
import onica from "../experience/onica.png";
import charles from "./icons/tools/charles.png";
import serverless from "./icons/languages-and-frameworks/serverless.png";
import vscode from "./icons/tools/vscode.png";
import selenium from "./icons/tools/selenium.png";
import vim from "./icons/tools/vim.png";
import webpack from "./icons/libraries/webpack.png";
import mysql from "./icons/tools/mysql.png";
import postgres from "./icons/tools/postgres.png";

const Training: React.FC = (): JSX.Element => {
  const awsSkillsList = [
    { name: "CloudFormation", image: cloudformation },
    { name: "CloudFront", image: cloudfront },
    { name: "CloudWatch", image: cloudwatch },
    { name: "CodeBuild", image: codebuild },
    { name: "CodePipeline", image: codepipeline },
    { name: "Cognito", image: cognito },
    { name: "DynamoDB", image: dynamodb },
    { name: "EC2", image: ec2 },
    { name: "IAM", image: iam },
    { name: "Lambda", image: lambda },
    { name: "Route 53", image: route53 },
    { name: "S3", image: s3 },
    { name: "SNS", image: sns },
    { name: "Step Functions", image: stepfunctions },
    { name: "VPC", image: vpc },
  ];

  const languagesAndFrameworks = [
    { name: "Angular", image: angular },
    { name: "Ember", image: ember },
    { name: "Go", image: go },
    { name: "JavaScript", image: javascript },
    { name: "PHP", image: php },
    { name: "Python", image: python },
    { name: "Rails", image: rails },
    { name: "React", image: reactIcon },
    { name: "Ruby", image: ruby },
    { name: "Serverless Framework", image: serverless },
    { name: "TypeScript", image: typescript },
    { name: "WordPress", image: wordpress },
  ];

  const libraries = [
    { name: "Axios", image: axios },
    { name: "Chart JS", image: chartjs },
    { name: "Cypress", image: cypress },
    { name: "ESLint", image: eslint },
    { name: "Enzyme", image: enzyme },
    { name: "Flake8", image: python },
    { name: "Jest", image: jest },
    { name: "Onica Group's Sailplane", image: onica },
    { name: "Puppeteer", image: puppeteer },
    { name: "React Router", image: reactrouter },
    { name: "Redux", image: redux },
    { name: "Semantic UI", image: semanticUI },
    { name: "Troposphere", image: python },
    { name: "Webpack", image: webpack },
  ];

  const tools = [
    { name: "Bitbucket Pipelines", image: bitbucketPipelines },
    { name: "Charles", image: charles },
    { name: "Docker", image: docker },
    { name: "MySQL", image: mysql },
    { name: "Onica Group's - Runway", image: onica },
    { name: "Postgres", image: postgres },
    { name: "Selenium", image: selenium },
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
          <li>
            Amazon Web Services Certified Developer Associate issued by Amazon
            Web Services
          </li>
          <li>
            Microsoft Certified Database Administrator (MCDBA) issued by
            Connecting Point Information Technology School
          </li>
          <li>
            Managing Emotions Under Pressure issued by Fred Pryor CareerTrack
          </li>
          <li>
            Dealing with Difficult People issued by Fred Pryor CareerTrack
          </li>
          <li>
            Team Building, Mentoring, and Coaching Skills issued by Fred Pryor
            CareerTrack
          </li>
          <li>The Ultimate Supervisor issued by Fred Pryor CareerTrack</li>
          <li>Customer Service Manager Academy issued by AT&T Mobility</li>
        </ul>
      </div>
      <div className="skills">
        <Header inverted as="h2">
          Skills
        </Header>
        <SkillsSection title="Amazon Web Services" skills={awsSkillsList} />
        <SkillsSection
          title="Languages and Frameworks"
          skills={languagesAndFrameworks}
        />
        <SkillsSection title="Libraries" skills={libraries} />
        <SkillsSection title="Tools" skills={tools} />
      </div>
    </React.Fragment>
  );
};

export default Training;
