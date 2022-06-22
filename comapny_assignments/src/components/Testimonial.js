import React from 'react'
import {TestimonialWrapper,Name,Quote,QuoteImage,Border}from './Testimonial.module'
function Testimonial({name,quote,pic}) {
  return (
 
    <TestimonialWrapper  >
        <Border>
        <QuoteImage><img src="https://cdn.xxl.thumbs.canstockphoto.com/quotes-icon-vector-illustration-isolated-on-white-background-drawing_csp82236093.jpg" alt =""></img></QuoteImage>
        <Quote>{quote}</Quote>
        </Border>
        <img  className="dp"src={pic} alt =""></img>
        <Name>{name}</Name>
    </TestimonialWrapper>
   
     
  )
}

export default Testimonial