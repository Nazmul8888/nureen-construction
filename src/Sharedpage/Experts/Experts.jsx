/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import { useState } from "react";
import ExpertsCard from "./ExpertsCard";


const Experts = () => {

     const [part, setPart] = useState();
     
     

     useEffect(()=>{
        fetch('experts.json')
        .then(res=>res.json())
        .then(data=>setPart(data))
     },[])


    return (
        <div className=" max-w-screen-2xl mx-auto py-10 ">
            <div className=" ">
                <div className=" flex justify-evenly">
                <img src="https://assets-global.website-files.com/5d2e4c0ad929d6e6a6483788/5dfd1625c8a611b6504d99b8_expertise.svg" alt="" />
                </div>
                <div className=" ">
                    <h1 className=" flex justify-evenly   font-sans font-[600px] text-[50px] ">Our Areas of Expertise</h1>
                    <p className=" flex justify-evenly ml-10">We live and breathe every aspect of California construction. <br /> flex justify-evenly Whatever your goals, we can help make them a reality.</p>
                </div>
            </div>

            <div className=" grid grid-cols-4 gap-5 py-20">

                {
                    part?.map(item=><ExpertsCard  item={item}></ExpertsCard>)
                }
            </div>
        </div>
    );
};

export default Experts;