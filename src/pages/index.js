import React from "react";
// import { graphql } from "gatsby";

import { Link } from "gatsby";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = ({ data }) => (
  <Layout>
    {console.log("!!!", data)}
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people!</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <img alt="img" src={data.contentfulAnime.img.fixed.src} />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export const query = graphql`
  query HomePageQuery {
    contentfulCategory {
      slug
    }
    contentfulAnime {
      vitTitle
      img {
        id
        fixed {
          src
        }
      }
    }
  }
`;

export default IndexPage;
