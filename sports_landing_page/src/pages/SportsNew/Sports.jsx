import React from 'react'
import SportsLink from './SportsLink'
import {motion }  from "framer-motion"
import news from '../../lib/news'
export default function Sports() {
  return (
 
         <main className="work"> 
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-12 capitalize"
    >

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="grid grid-col-1 md:grid-cols-4 gap-6 "
      >
        {news.map((newsItem, index) => (
          <SportsLink
            key={index}
            {...newsItem}/> 
        ))}
      </motion.div>
    </motion.div>

    </main> 
  

   
  )
}
