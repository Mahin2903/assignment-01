// import React, { use } from 'react';

import { useState } from "react";
import SeletedPlayer from "../SeletedPlayer";




const PlayerCard = ({player, icon, selectedP, updatePlayerA}) => {
        // console.log(player,icon)
        const[Selected, updateButton] =useState(false);
        
        

        const functionalButton = (playerData) =>{

          const alreadySelected = selectedP.some(p => p.name === playerData.name);
             if (alreadySelected) {
              alert("Player already selected!");
              return; // stop here if already selected
            }
            if (selectedP.length >= 6) {
              alert("You can only select up to 6 players!");
              return; // stop here if max limit reached
            }
        updateButton(!Selected)
        
        updatePlayerA([...selectedP,playerData])
        }
        
        
        
        


    return (
        <div className="">
            <div className="card bg-base-100 max-w-[360px] h-[450px] shadow-lg rounded-2xl p-2">
              <figure className="px-5 mx-auto rounded-2xl">
              <img
                src="https://www.bssnews.net/assets/news_photos/2023/06/24/image-133062-1687609914.jpg"
             alt="Shoes"
                className="rounded-2xl" />
              </figure>
              <div className="flex items-center p-4 gap-2">
                <img className="w-[28px] h-[28px]" src={icon} alt="" />
                <h2 className="font-bold">{player.name}</h2>
              </div>
              <div className="flex px-4 justify-between items-center">
             <p className="text-gray-500">Bangladesh</p>
             <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md xl:btn-md text-[14px]">{player.batting_style}</button>
              </div>
              <div className="p-4 text-gray-600 font-semibold ">
                <h2>Rating: {player.rating}</h2>
              </div>
              <div className="px-4 font-semibold text-gray-500 flex items-center justify-between">
                <h1>price: {player.price}</h1>
                <button disabled={Selected} onClick={() => functionalButton(player)}  className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-lg text-[14px]">{Selected? "Selected":"Not selected"}</button>
              </div>
              
            </div>
            
        </div>
        
    );
};

export default PlayerCard;