import React from "react";
import styled, { hydrate, keyframes, css, injectGlobal } from "react-emotion";
import { Flex, Box } from "grid-emotion";
import Link from "next/link";
import { space, fontSize, width, color, borderColor, responsiveStyle, flex } from "styled-system";
import FeaturedNews from "../components/FeaturedNews";
import HeroImage from "../components/HeroImage";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { news, projects, navLinks } from '../data'
import NewsCard from '../components/NewsCard'
import ProjectCard from '../components/ProjectCard'
import Base from '../components/base'
import Footer from '../components/Footer'

if (typeof window !== "undefined") {
  hydrate(window.__NEXT_DATA__.ids);
}


const geoBlue = '#0C3182'

// https://gist.github.com/tkh44/ba7b13da7c1d694a3fec40410565a99d

const Container = styled(Base)`
  display: flex;
  background-image: url("/static/bg2.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`

const Column = styled(Base)`
  display: flex
`

Column.defaultProps = {
  direction: 'column',
  flex: 1,
  mx: [0, 1],
  p: 2
}

export default class Homepage extends React.Component {
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

    return (
      <div>
        <Navbar links={navLinks} />
        <HeroImage height={300}>
          <FeaturedNews title="New project launched" description="Brand new project" />
        </HeroImage>
        <Container direction={['column-reverse', 'row']}>
          <Column flex={`0 0 150px`} p={0}>
            <Sidebar />
          </Column>
          <Column>
          <h3 css={`color: #0C3182`}>Latest News</h3>
            { news.map((n) => (<NewsCard key={n.id} {...n} />)) }
          </Column>
          <Column>
          <h3 css={`color: #0C3182`}>Our Projects</h3>
            { projects.map((p, i) => <ProjectCard key={p.name} {...p} />)}
          </Column>
        </Container>
        <Footer />
      </div>
    );
  }
}

// flex: 0 0 150px;