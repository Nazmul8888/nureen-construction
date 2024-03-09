import { Link } from "react-router-dom";

const ExpertsCard = ({item}) => {
    const {image, title,details}= item;
    return (
        <div>
            

<div className="max-w-sm p-6   border border-red-700 rounded-lg shadow 
">
    <a href="#">
        <img className="  " src={image} alt="" />
        <h5 className="mb-2 text-2xl  font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 pt-5 dark:text-gray-400">{details}</p>
    <br />
    <br />
    <Link to='/check'>
    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center   text-green-500 rounded-lg ">
        Learn more
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </a>
    </Link>
</div>

        </div>
    );
};

export default ExpertsCard;