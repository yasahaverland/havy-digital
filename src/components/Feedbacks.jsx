/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'

import { styles } from '../style'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import { testimonials } from '../constants'

const FeedbackCards = ({ index, testimonial, name, designation, image  }) => (
  <motion.div variants={fadeIn("", 'spring', index * 0.5, 0.75)} className='bg-black-200 p-10 rounded-3xl w-full'>
    <p className='text-white font-black text-[48px]'>"</p>
    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18]'>{testimonial}</p>
      <p className='text-white flex justify-end font-black order-last text-[48px]'>"</p>
      <div className='mt-7 flex justify-between items center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>{name}</p>
          <p className='mt-1 text-secondary text-[12px]'>{designation}</p>
        </div>
        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
    
  </motion.div>
) 
const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div className={`${styles.padding} bg-tertiary rounded-2xl  min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}> Nossos Clientes</p>
          <h2 className={`${styles.sectionHeadText}`}>Feedbacks</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCards 
            key= {testimonial.name}
            index={index}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, ''  )