// import React, { use } from 'react';
// import { useState } from 'react';

import SelectedCard from "./selectedCard/SelectedCard";

const SeletedPlayer = ({selectedP,updatePlayerA}) => {
      const handleRemovePlayer = (playerToRemove) => {
          const updatedList = selectedP.filter(p => p.name !==       playerToRemove.name);
          updatePlayerA(updatedList);
  };

    return (
        <div className="gap-3 mb-3">
            {
                selectedP.map(player => (<SelectedCard player = {player} handleRemovePlayer={handleRemovePlayer}></SelectedCard>))
            }
            <button className="mt-4 bg-lime-400 hover:bg-lime-500 text-black font-semibold px-6 py-2 rounded-xl border border-yellow-300 shadow-[0_0_15px_rgba(255,255,0,0.5)] transition">Add more player</button>
            
        </div>
    );
};

export default SeletedPlayer;