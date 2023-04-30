import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
const LeftNavbar = () => {
    const [categories,setCategories] = useState([]);
     
    useEffect(() =>{
        fetch('http://localhost:5000/categories')
        .then (res => res.json())
        .then (data => setCategories(data))
        .catch(error => {console.log(error)})
    },[])

    return (
        
        <div>
            <h4 className='p-3 fw-bold'>All Category</h4>

           <div className='p-2'>
                {
                    categories.map(category => <p key={category.id} className='bg-secondary p-3 border border-2  text-center w-75 fw-bold fs-5 rounded-pill'>

                        <Link to ={`/category/${category.id}`} className='text-decoration-none text-white'>{category.name}</Link>

                    </p> )
                }
            </div>
        </div>
    );
};

export default LeftNavbar;