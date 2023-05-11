/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { fadeIn, textVariant } from '../utils/motion'

import { SectionWrapper } from '../hoc'
import { EthereumCanvas } from './canvas'

const features = () => {
  return (
    <>
      <motion.div variants={textVariant} className='p-3'>
        <p className={styles.sectionSubText}>Features</p>
        <h2 className={styles.sectionHeadText} >Carteira Digital</h2>
      </motion.div>
      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 -z-1 text-secondary text-[17px] max-w-3xl leading-[30px] p-3 flex justify-center'
        >
          Além dos serviços bancários tradicionais, temos orgulho de estar na vanguarda da revolução das criptomoedas. O Heavy Digital é um dos poucos bancos que oferece contas de criptomoeda, permitindo que você compre, venda e negocie facilmente moedas digitais como Bitcoin e Ethereum. Nossa equipe de especialistas financeiros está sempre disponível para fornecer orientação e suporte para suas transações de criptomoeda.
      </motion.p>
      <EthereumCanvas/>
      <motion.div variants={textVariant} className='p-3 mt-10'>
        <h2 className={styles.sectionHeadText} >Havy Digital App</h2>
      </motion.div>
      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] p-3'
      > 
        No Heavy Digital, nos dedicamos a usar a tecnologia mais recente para oferecer aos nossos clientes a melhor experiência bancária possível.
        Nosso app permite que você gerencie suas finanças em qualquer lugar, com recursos como depósito de cheque, pagamento de contas e transferências instantâneas entre contas, tudo isso do seu celular.

      </motion.p>
      
    </>
  )
}

export default SectionWrapper(features, 'features')