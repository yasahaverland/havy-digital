/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../style'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

// template_b9a6htm
// service_hotjw26
// kMCfZI3FDurFoU7Hj

const Contact = () => {

  const formRef =  useRef()

  const [form, setForm] = useState ({
    name:'',
    email: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs.send(
      'service_hotjw26',
      'template_b9a6htm',
      {
        from_name: form.name,
        to_name: 'Havy Digital',
        from_email: form.email,
        to_email: 'yasahaverland@gmail.com',
        message: form.message,
      },
      'kMCfZI3FDurFoU7Hj'
    )
    .then(() => {
      setLoading(false)
      alert('Agradecemos sua mensagem. Nossos agentes entrarão em contato o mais breve possivel.')

      setForm({
        name: '',
        email: '',
        message: '',
      })
    }, (error) => {
      setLoading(false)
      console.log(error)

      alert('Sinto muito. Algo deu errado, tente novamente em alguns instantes.')
    })
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
                   //vindo da esquerda, tipo/nome da animação, tempo de delay, tempo de diração. (todos em segundos).
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Fale com a gente</p>
        <h3 className={styles.sectionHeadText}>Abra sua Conta</h3>

        <form
        ref={formRef}
        onSubmit={handleSubmit}
        className='mt-12 flex flex-col gap-8'
      >
        <label className='flex flex-col'>
          <input 
            type='text'
            name='name'
            value={form.name}
            onChange={handleChange}
            placeholder='Nome Completo'
            className='bg-tertiary py-4 px-6 placeholder:text-secundary text-white rounded-lg outlinest-npne border-npne font-medium'
          />
        </label>
        <label className='flex flex-col'>
          <input 
            type='email'
            name='email'
            value={form.email}
            onChange={handleChange}
            placeholder='Email'
            className='bg-tertiary py-4 px-6 placeholder:text-secundary text-white rounded-lg outlinest-npne border-npne font-medium'
          />
        </label>
        <label className='flex flex-col'>
          <textarea 
            rows='7'
            name='message'
            value={form.message}
            onChange={handleChange}
            placeholder='Por Favor nos conte os dias e os horarios mais convenientes para que um de nossos agentes entre em contato com você.'
            className='bg-tertiary py-4 px-6 placeholder:text-secundary text-white rounded-lg outlinest-npne border-npne font-medium'
          />
        </label>

        <button
          type='submit'
          className='bg-green hover:bg-dgreen py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary shadow-inner rounde-xl'
        >
          {loading ? 'Enviando...' : 'Enviar'}
        </button>
      </form>

      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")