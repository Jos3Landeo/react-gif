import React, { useState } from 'react'
import { AddCategory } from './componets/AddCategory'
import { GifGrid } from './componets/GifGrid'

export const GifExpertApp = () => {


    //const categories = ['One Punch', 'DBZ', 'One Pieces']
    const [categories, setCategories] = useState(['One Punch'])
    // const handleAdd = () => {
    //     //setCategories([...categories,'Holass']);
    //     setCategories(cats => [...cats,'HunterxHunter'])
    // }
    return (<>
        <h2>gifExpertApp</h2>
        <AddCategory setCategories={setCategories}></AddCategory>
        <hr></hr>
        <ol>
            {
                categories.map(category =>  <GifGrid category={category} key={category} />)
            }
        </ol>


    </>)
}
