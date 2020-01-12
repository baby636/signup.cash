import React from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Anchor,
  Heading,
  Header,
  Box,
  Text,
  Grommet,
  Menu,
  Button,
  Icons
} from "grommet";
import { useStaticQuery, graphql } from "gatsby";

import "./layout.css";

const theme = {
  global: {
    colors: {
      "dark-1": "#171941",
      brand: "#1d8cf8",
      "accent-1": "#eee"
    }
  },
  text: {
    extend: "font-family: 'Poppins', sans-serif; line-height: 1.4em",
    small: {
      size: "17px"
    }
  }
};

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          author
          discordLink
          docsLink
        }
      }
    }
  `);

  return (
    <Grommet theme={theme}>
      <Grid
        rows={["80px"]}
        alignContent="center"
        areas={[
          ["header", "header"],
          ["main", "main"],
          ["footer", "footer"]
        ]}
      >
        <Header
          gridArea="header"
          background="dark-1"
          pad={{ right: "10vw", left: "10vw" }}
        >
          <Box direction="row" align="center">
            <Text weight="600" size="17px">
              SIGNUP
            </Text>
            <Text margin="5px">-</Text>
            <Text size="15px">A Bitcoin Cash Open Source Project</Text>
          </Box>
          <Box direction="row" align="center">
            <Menu
              a11yTitle="Getting Started Menu"
              label="Getting Started"
              size="small"
              dropAlign={{ top: "bottom", right: "right" }}
              dropBackground="accent-1"
              items={[
                {
                  label: "Documentation",
                  onClick: () => {
                    document.location = data.site.siteMetadata.docsLink;
                  }
                },
                {
                  label: "Discord Channel",
                  onClick: () => {
                    document.location = data.site.siteMetadata.discordLink;
                  }
                }
              ]}
            />
          </Box>
        </Header>

        <Box
          align="center"
          gridArea="main"
          background="dark-1"
          pad={{ right: "10vw", left: "10vw" }}
        >
          {children}
          <Box gridArea="footer" alignSelf="end" as="footer">
            <Text color="light-3" weight="700" size="15px">
              {" "}
              Made for freed0m by {data.site.siteMetadata.author}
            </Text>
          </Box>
        </Box>
      </Grid>
    </Grommet>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
