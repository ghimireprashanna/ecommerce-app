import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'


const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
        <p>We are always changing. Upgrades to internal processes, improvements to existing services and adding new products as they are needed. Our business evolves as you do.</p>
        <p>We strive to be more than just a supplier. We collaborate with you to offer the best options for your marketing dollars. If you are not familiar with the industry, we take the time to educate you.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Our mission at Forever is to make our platform easily assible and convient way possible.</p>
        </div>
        
      </div>
      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'}></Title>
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className='text-gray-600'>We are always changing. Upgrades to internal processes, improvements to existing services and adding new products as they are needed. Our business evolves as you do.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className='text-gray-600'>We are always changing. Upgrades to internal processes, improvements to existing services and adding new products as they are needed. Our business evolves as you do.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>We are always changing. Upgrades to internal processes, improvements to existing services and adding new products as they are needed. Our business evolves as you do.</p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About