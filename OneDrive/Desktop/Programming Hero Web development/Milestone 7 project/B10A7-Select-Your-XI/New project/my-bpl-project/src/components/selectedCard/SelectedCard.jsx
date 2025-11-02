import React from 'react';

const SelectedCard = ({player, handleRemovePlayer}) => {
    return (
        <div>
            <div className="flex justify-between items-center border-1 border-gray-300 rounded-xl p-4 mb-2">
                <div className="flex">
                <div>
                    <img className="w-[80px] rounded-xl" src="https://www.bssnews.net/assets/news_photos/2023/06/24/image-133062-1687609914.jpg" alt="Player image" />
                </div>
                
                <div className="ml-4 my-auto">
                    <h1 className='font-bold'>{player.name}</h1>
                    <p className='text-xs'>{player.batting_style}</p>
                </div>
            </div>
            <div>
                <img onClick={() => handleRemovePlayer(player)} className="cursor-pointer" src="https://bold-amethyst-0b4ecxtafs.edgeone.app/Frame.png" alt="" />
            </div>
            </div>
        </div>
    );
};

export default SelectedCard;