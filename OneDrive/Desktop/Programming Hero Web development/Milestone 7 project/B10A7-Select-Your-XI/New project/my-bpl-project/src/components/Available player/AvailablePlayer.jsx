import React from 'react';
import { use } from 'react';
import PlayerCard from './PlayerCard';
import SeletedPlayer from '../SeletedPlayer';

const AvailablePlayer = ({AvailablePlayerPromise, icon, selectedP, updatePlayerA, coins, setCoins}) => {
    const players = use(AvailablePlayerPromise);
    
    

    return (
        <div >
            

            <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-6'>
                {
                    players.map(player => ( <PlayerCard coins={coins} setCoins={setCoins} selectedP={selectedP} updatePlayerA={updatePlayerA} player ={player}  icon={icon}></PlayerCard> ))
                    
                 }
            </div>
            
        </div>
        
        
    );
};

export default AvailablePlayer;