import React from 'react'
import {BlogWrapper,Header,Date,Description} from './Blogs.module'
function Blogs({blog_img,blog_header,blog_desc}) {
   
  return (
    <div>
<BlogWrapper>
        <div><img src={blog_img}></img></div>
        <Header>{blog_header}</Header>
         <Date>January,21,2022</Date>
        <Description>{blog_desc}</Description>
        <button>Read More</button>
        </BlogWrapper>
    </div>
  )
}

export default Blogs