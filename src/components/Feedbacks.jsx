/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'

import { styles } from '../style'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import { testimonials } from '../constants'

const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}> Nossos Clientes</p>
          <h2 className={`${styles.sectionHeadText}`}>Feedbacks</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>

      </div>
    </div>
  )
}

export default Feedbacks