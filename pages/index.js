import React from "react";
import styled, { hydrate, keyframes, css, injectGlobal } from "react-emotion";
import { Flex, Box } from "grid-emotion";
import Link from "next/link";
import { withProps, defaultProps } from "recompose";
import { color } from "styled-system";

import FeaturedNews from "../components/FeaturedNews";
import HeroImage from "../components/HeroImage";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import NewsCard from "../components/NewsCard";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";

if (typeof window !== "undefined") {
  hydrate(window.__NEXT_DATA__.ids);
}

const Container = withProps({
  mx: "auto"
})(styled(Flex)`
  background-image: url("/static/bg2.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`);

const Column = defaultProps({
  direction: "column",
  flex: 1,
  mx: [0, 1],
  p: [0, 2]
})(styled(Box)``);

const Heading = styled("h3")`${color};`;

const ConstrainedWidth = withProps({
  direction: ["column-reverse", "row"],
  p: 1
})(styled(Flex)`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`);

export default class Homepage extends React.Component {
  static defaultProps = {
    data: {
      news: [],
      projects: [],
      navLinks: []
    }
  };

  static getInitialProps() {
    // this would normally be a fetch call to a CMS
    const data = require("../data");
    return { data };
  }

  render() {
    injectGlobal`
      html, body {
        padding: 0;
        margin: 0;
        min-height: 100%;
        font-family: 'Open Sans', Helvetica, Arial, sans-serif;
        font-size: 16px;
        border-top: 2px solid #8B5D33;
      }
    `;

    const { news, projects, navLinks } = this.props.data;

    // Use the first news article in the featured news box, and the rest in the main column
    const articles = news.slice(1);

    return (
      <div>
        <Navbar links={navLinks} />
        <HeroImage>
          <FeaturedNews {...news[0]} />
        </HeroImage>
        <Container>
          <ConstrainedWidth>
            <Column flex={`0 0 150px`} p={0}>
              <Sidebar />
            </Column>
            <Column>
              <Heading color="#8B5D33">Latest News</Heading>
              {articles.map(n => <NewsCard key={n.id} {...n} />)}
            </Column>
            <Column>
              <Heading color="#0c3182">Our Projects</Heading>
              {projects.map((p, i) => <ProjectCard key={p.name} {...p} />)}
            </Column>
          </ConstrainedWidth>
        </Container>
        <Footer />
      </div>
    );
  }
}
