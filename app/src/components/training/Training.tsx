import "./Training.scss";

import React from "react";
import { connect } from "react-redux";
import { Header, Icon } from "semantic-ui-react";

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

interface Props {}

class Training extends React.Component<Props> {
  awsSkillsList = [
    { name: "CloudFormation", img: cloudformation },
    { name: "CloudFront", img: cloudfront },
    { name: "CloudWatch", img: cloudwatch },
    { name: "CodeBuild", img: codebuild },
    { name: "CodePipeline", img: codepipeline },
    { name: "Cognito", img: cognito },
    { name: "DynamoDB", img: dynamodb },
    { name: "EC2", img: ec2 },
    { name: "IAM", img: iam },
    { name: "Lambda", img: lambda },
    { name: "Route 53", img: route53 },
    { name: "S3", img: s3 },
    { name: "SNS", img: sns },
    { name: "Step Functions", img: stepfunctions },
    { name: "VPC", img: vpc },
  ];

  languagesAndFrameworks = [
    { name: "Angular", img: angular },
    { name: "Ember", img: ember },
    { name: "Go", img: go },
    { name: "JavaScript", img: javascript },
    { name: "PHP", img: php },
    { name: "Python", img: python },
    { name: "Rails", img: rails },
    { name: "React", img: reactIcon },
    { name: "Ruby", img: ruby },
    { name: "Serverless Framework", img: serverless },
    { name: "TypeScript", img: typescript },
    { name: "WordPress", img: wordpress },
  ];

  libraries = [
    { name: "Axios", img: axios },
    { name: "Chart JS", img: chartjs },
    { name: "Cypress", img: cypress },
    { name: "ESLint", img: eslint },
    { name: "Enzyme", img: enzyme },
    { name: "Flake8", img: python },
    { name: "Jest", img: jest },
    { name: "Onica Group's Sailplane", img: onica },
    { name: "Puppeteer", img: puppeteer },
    { name: "React Router", img: reactrouter },
    { name: "Redux", img: redux },
    { name: "Semantic UI", img: semanticUI },
    { name: "Troposphere", img: python },
    { name: "Webpack", img: webpack },
  ];

  tools = [
    { name: "Bitbucket Pipelines", img: bitbucketPipelines },
    { name: "Charles", img: charles },
    { name: "Docker", img: docker },
    { name: "Onica Group's - Runway", img: onica },
    { name: "Selenium", img: selenium },
    { name: "Vim", img: vim },
    { name: "Visual Studio Code", img: vscode },
  ];

  renderSkillsList(list: { name: string; img: string }[]) {
    return list.map((skill: { name: string; img: string }) => {
      const nameToLower = skill.name.toLowerCase().replace(" ", "");
      return (
        <li>
          <span className={`skill ${nameToLower}`}>
            <img src={skill.img} alt={skill.name} />
            <span className="skill-text">{skill.name}</span>
          </span>
        </li>
      );
    });
  }

  renderSkills() {
    return (
      <div className="skills">
        <Header inverted as="h2">
          Skills
        </Header>
        <Header inverted as="h3">
          Amazon Web Services
        </Header>
        <ul className="skills-list">
          {this.renderSkillsList(this.awsSkillsList)}
        </ul>
        <Header inverted as="h3">
          Languages and Frameworks
        </Header>
        <ul className="skills-list">
          {this.renderSkillsList(this.languagesAndFrameworks)}
        </ul>
        <Header inverted as="h3">
          Libraries
        </Header>
        <ul className="skills-list">{this.renderSkillsList(this.libraries)}</ul>
        <Header inverted as="h3">
          Tools
        </Header>
        <ul className="skills-list">{this.renderSkillsList(this.tools)}</ul>
      </div>
    );
  }

  renderTraining() {
    return (
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
    );
  }

  public render() {
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
        {this.renderTraining()}
        {this.renderSkills()}
      </React.Fragment>
    );
  }
}

export default connect(null, null)(Training);
