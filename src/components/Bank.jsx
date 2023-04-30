/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { GraphsCanvas } from './canvas'


const Bank = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#AED768]'/>
          <div className='w-1 sm:h-80 h-40 green-gradient'/>
        </div>

        <div>
          <h1 className={`${styles.headText} text-white `}>A <span className='text-[#AED768]'>Nova Geraçāo</span> de Bancos chegou.</h1>
          <p className={`${styles.subText} mt-2 text-white-100`}>A <span className='text-[#975AB6]'>Havy Digital</span> oferece soluções bancárias inovadoras projetadas para atender às necessidades de indivíduos, pequenas empresas e grandes corporações.</p>
        </div>
      </div>
      <GraphsCanvas />
    </section>
  )
}

export default Bank