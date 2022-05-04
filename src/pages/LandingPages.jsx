import React from 'react'
import Logout from '../components/logout/Logout'
import PostCardGrid from '../components/postcardgrid/PostCardGrid'
import { Search } from '../components/search/Search'

const LandingPages = () => {
  return (
    <div> 
      <Logout />
      <Search />
      <PostCardGrid />
    </div>
  )
}

export default LandingPages

