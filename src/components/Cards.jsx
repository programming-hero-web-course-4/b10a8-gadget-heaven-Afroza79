import React from 'react';
import data from '../data/data.json';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import CategoryDetail from './CategoryDetail';

const Cards = () => {
  
    return (
        <>
         
            <div className='px-2 xl:px-20 lg:px-20 md:px-8 py-20'>
            <h1 className='text-center pb-10 text-3xl font-bold'>Explore Cutting-Edge Gadgets</h1>
                <div className='flex w-[1200px] mx-auto gap-6'>
                    <aside className='p-4 bg-white mt-4 h-[250px] rounded-xl'>
                        <ul className='w-[150px]'>
                            <li className='mb-4 bg-purple pl-3 py-2 rounded-full'>
                                <Link to="/category/all" className='text-white hover:text-blue-700 text-sm'>
                                    All Product
                                </Link>
                            </li>
                            {Array.from(new Set(data.map((item) => item.category))).map((category) => (
                                <li key={category} className='mb-4 bg-gray-200 text-gray-300 pl-3 py-2 rounded-full'>
                                    <Link to={`/category/${category}`} className='text-gray-500 text-sm hover:text-blue-700'>
                                        {category}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </aside>
                    <main>
                        <Routes>
                            <Route path="/category/:categoryName" element={<CategoryDetail />} />
                        </Routes>
                    </main>
                </div>
            </div>
       
        </>
    )
};


export default Cards
