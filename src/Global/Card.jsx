

import React from 'react';

const Card = ({data}) => {
console.log(data)
  return (
       <>
          <div className="block rounded-lg bg-white w-72 mt-32 shadow-lg">
        <div className="relative overflow-hidden bg-cover bg-no-repeat">
          <img
            className="rounded-lg sm:h-64 md:h-64 w-full"
            src={data?.imageUrl}
            alt="Venue"
          />
          <a href="#!">
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
          </a>
        </div>
        <div className="p-2">
          <div className="flex justify-between">
            <h5 className="mb-2 text-sm font-bold leading-tight text-neutral-800 ">
             {data?.name} 
            </h5>
            <h5 className="mb-2 text-sm font-bold leading-tight text-neutral-800  flex items-center">
              {data?.rating}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-1">
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
            </h5>
          </div>
          <p className="mb-1 text-sm text-neutral-600 ">
            {data?.description}</p>
          <p className="mb-4 text-base">
            Date Range - Owner
          </p>
          <h5 className="mb-2 text-sm font-bold leading-tight text-neutral-800">
            {data?.price}
          </h5>
        </div>
      </div>

    </>
  );
}

export default Card;
