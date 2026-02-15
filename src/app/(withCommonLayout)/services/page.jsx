import React from 'react';

const getAllServices=async ()=>{
    const res = await fetch('https://api.vercel.app/blog')
    const data = await res.json()
    return data
}
const services = async () => {
    const services = await getAllServices()
    // console.log(services);
    return (
        <div>
            Services
        </div>
    );
};

export default services;