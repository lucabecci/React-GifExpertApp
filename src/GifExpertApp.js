import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['anime'])

    return <>
             <h2 className='animate__animated animate__fadeIn'>GifExpertApp</h2>
             <p>LukaBecci on GitHub</p>
             <AddCategory setCategories = { setCategories } />
             <hr></hr>
             <ol>
                 {
                     categories.map( category => 
                     <GifGrid 
                        key = { category }
                        category = { category }/>
                     )
                 }
             </ol>
           </> 
}


