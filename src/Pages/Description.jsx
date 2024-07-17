import React, { useState } from 'react';
import v1 from './../assets/v1.jpg';
import Navbar from '../Global/Navbar';
const Description = () => {
 

  return (
    <div>
        <>
        <Navbar/>
        </>
<div class=" py-8">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row -mx-4">
            <div class="md:flex-1 px-4">
                <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                    <img class="w-full h-full object-cover" src={v1} alt="Product Image"/>
                </div>
                <div class="flex -mx-2 mb-4">
                    <div class="w-1/2 px-2">
                        <button class="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Edit</button>
                    </div>
                    <div class="w-1/2 px-2">
                        <button class="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Delete</button>
                    </div>
                </div>
            </div>
            <div class="md:flex-1 px-4">
                <div className='flex space-x-4'>
                <h2 class="text-2xl font-bold text-gray-800 mb-2">Venue Location:</h2>
                <h2 class="text-2xl font-bold text-gray-800 mb-2">Solti Hotel Venue</h2>
                </div>
                <p class="text-gray-600 text-sm mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                    ante justo. Integer euismod libero id mauris malesuada tincidunt.
                </p>
                <div class="flex mb-4">
                    <div class="mr-4">
                        <span class="font-bold text-gray-700 ">Booking Price:</span>
                        <span class="text-gray-600 ">$XXXXX.99</span>
                    </div>
                    
                </div>
             
               
                <div>
                    <span class="font-bold text-gray-700 ">Product Description:</span>
                    <p class="text-gray-600  text-sm mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut
                        lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque
                        ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non
                        sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  );
};

export default Description;
