/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion"
import 'react-vertical-timeline-component/style.min.css'

import { styles } from "../style"
import { services } from "../constants"
import { SectionWrapper } from "../hoc"
import { textVariant } from "../utils/motion"

const ServicesCard = ({ service }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color:'#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date={service.date}
    iconStyle={{ background: service.iconBg }}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img
          src={service.icon}
          alt={service.company_name}
          className='w-[200%] h-[200%] object-contain'
        />
      </div>
    }
  >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{service.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {service.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {service.points.map((point, index) => (
          <li
            key={`service-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
  </VerticalTimelineElement>
)

const Services = () => {
  return (
    <>
      <motion.div variants={textVariant} className='p-3'>
        <p className={styles.sectionHeadText} >Nossas Contas</p>
        <h2 className={styles.sectionSubText} >Cada uma feita sob medida para o seus objetivos</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {services.map((service, index) => (
            <ServicesCard key={index} service={service} />
          ))}
      

        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Services, 'work') 