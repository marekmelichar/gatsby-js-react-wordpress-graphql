import React from 'react'
import {graphql, StaticQuery, Link} from 'gatsby'
import styled from 'styled-components'

import SiteInfo from './SiteInfo'

const MainMenuWrapper = styled.div`
  display: flex;
  background-color: #e6e6e6;
`

const MainMenuInner = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  width: 960px;
  height: 100%;
`

const MenuItem = styled(Link)`
  display: block;
  padding: 8px 16px;
`

const MainMenu = () => (
  <StaticQuery query={graphql`
    {
      allWordpressWpApiMenusMenusItems(filter: {name: {eq: "Main menu"}}) {
        edges {
          node {
            items {
              title
              object_slug
            }
            name
          }
        }
      }
    }
  `} render={props => (
    <MainMenuWrapper>
      <MainMenuInner>
        <SiteInfo />
        {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
          <MenuItem to={item.object_slug} key={item.title}>
            {item.title}
          </MenuItem>
        ))}
      </MainMenuInner>
    </MainMenuWrapper>
  )} />
)

export default MainMenu