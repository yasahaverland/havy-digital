/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../style'
import { features } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

import { SectionWrapper } from '../hoc'

const FeaturesCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[225px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-25 h-25 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant} className='p-3'>
        <p className={styles.sectionSubText}>Nossa História</p>
        <h2 className={styles.sectionHeadText} >Uma Nova Geraçāo</h2>
      </motion.div>
      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] p-3 flex justify-center'
        >
        Fundado em 2015, nosso banco nasceu do desejo de criar um novo tipo de instituição financeira que combinasse tecnologia de ponta com serviços bancários tradicionais. Nosso objetivo era construir um banco que atendesse a todos, de pessoas físicas a grandes corporações, e que fornecesse soluções inovadoras para a gestão financeira na era digital.
      </motion.p>
      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] p-3'
      > 
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {features.map((feature, index) => (
          <FeaturesCard key={feature.title} index={index} {...feature} />
        ))}
      </div>
      
    </>
  )
}

export default SectionWrapper(About, 'about') 