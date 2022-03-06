import React from "react";
import Header from '/components/Header'
import oceanofart from '../assets/oceanofart.png'

export default function Discove() {

    return(
        <div className="flex-row justify-center items-start overflow-hidden">
            <Header/>
            <p class="italic text-3xl text-center p-20 text-white font-semibold" >Discover Collections</p>
            <div class=" flex items-center justify-center bg-[#202225] h-45 w-45">
  
             <card class=" bg-[#202225] border border-gray-100 rounded-lg text-center hover:shadow-lg align-center ">
             <a href="">
              <img src="https://picsum.photos/500/300" class="rounded-t-lg h-90 w-90"/>
              </a>
             <div class="flex justify-center w-25 h-20">
             <img src="https://i.postimg.cc/25Bppp09/oceanofart.png" class="rounded-full h-18 w-25 border-4 border-white -mt-6 shadow-lg align-center" />
            </div>
    
           <p class="font-bold pt-3 pb-2 text-white"> Ocean of Art NFT Collection </p>
    
           <p class="font-semibold p-2 text-sm text-white"> by <a href="#" class="text-blue-500 hover:text-blue-700"> OceanOfArtTest </a> </p>
    
           <p class="px-10 py-2 mb-5 text-white"> This is our official collection of NFT's of our own. </p>
    
         </card>
  
</div>
        </div>
    ); 
}