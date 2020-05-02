import React from "react";
import { connect } from "react-redux";
import { Header, Icon } from "semantic-ui-react";
import cloudformation from "./icons/aws/cloudformation.png";
import cloudfront from "./icons/aws/cloudfront.png";
import cloudwatch from "./icons/aws/cloudwatch.png";
import codebuild from "./icons/aws/codebuild.png";
import codepipeline from "./icons/aws/codepipeline.png";
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
import "./Training.scss";

interface Props {}

class Training extends React.Component<Props> {
  awsSkillsList = [
    { name: "CloudFormation", img: cloudformation },
    { name: "CloudFront", img: cloudfront },
    { name: "CloudWatch", img: cloudwatch },
    { name: "CodeBuild", img: codebuild },
    { name: "CodePipeline", img: codepipeline },
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
    { name: "JavaScript", img: javascript },
    { name: "TypeScript", img: typescript },
    { name: "Ruby", img: ruby },
    { name: "Python", img: python },
    { name: "Go", img: go },
    { name: "PHP", img: php },
    { name: "React", img: reactIcon },
    { name: "Angular", img: angular },
    { name: "Ember", img: ember },
    { name: "Rails", img: rails },
    { name: "WordPress", img: wordpress },
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
