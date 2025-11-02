import navImg from './assets/logo.png'
import coinImg from './assets/dollar.png'
import heroImg from './assets/banner-main.png'
import heroBg from './assets/bg-shadow.png'
import './App.css'
import { Suspense, useState } from 'react'
import AvailablePlayer from './components/Available player/AvailablePlayer'
import icon from './assets/user.png'
import HeroSection from './components/Available player/HeroSection'
import SeletedPlayer from './components/SeletedPlayer'

   const AvailablePlayerPromise = fetch('/public/players.json').then(res => res.json());

function App() {
  const [toggle, SetToggle] = useState(true);
  const[selectedP, updatePlayerA ] = useState([])
  

  
  return (
    <>

       
      <div className=' hidden md:block'>
        <div className="navbar bg-base-100 px-[120px] pt-8">
  <div className="flex-1">
    <img src={navImg} alt="" />
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 items-center">
      <li><a>Home</a></li>
      <li><a>Fixture</a></li>
      <li><a>Teams</a></li>
      <li><a>Sechedules</a></li>
      <li><a><button className="btn"><span >60000000</span> coins <img src={coinImg} className='h-5 w-5' alt="" /></button></a></li>
      
    </ul>
  </div>
</div>
      </div>
      <div className='block md:hidden'>
  <div className="navbar bg-base-100  pt-8 px-2">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">
      <img src={navImg} alt="" />
    </a>
  </div>
  <div className="flex-none mr-2">
    <ul className="menu menu-horizontal px-1 items-center">
      <li>
        <details className='mr-6'>
          <summary>Menu</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><a>Home</a></li>
            <li><a>Fixture</a></li>
            <li><a>Teams</a></li>
            <li><a>Schedules</a></li>
          </ul>
        </details>
      </li>
      <li><a><button className="btn"><span >0</span> coins <img src={coinImg} className='h-5 w-5' alt="" /></button></a></li>

    </ul>
  </div>
</div>
      </div>

      <div className='mt-6 mx-auto max-w-[1320px] max-h-[545px] px-5'>
        <HeroSection heroBg={heroBg} heroImg={heroImg}></HeroSection>
        <div className='mt-[94px] mb-[39px] px-5'>
                <div className='flex justify-between items-center'>
                <h1 className='font-bold'>{toggle?"Available Players":`Selected players (${selectedP.length}/6)`}</h1>
                <div className="join">
                 <button onClick={()=>SetToggle(true)} className={`btn join-item rounded-l-2xl ${toggle===true?"bg-[#e7fe29]":""}`}>Available</button>
                 <button onClick={() => SetToggle(false)} className={`btn join-item rounded-r-2xl ${toggle===false?"bg-[#e7fe29]":""}`}>Selected ({selectedP.length}/6)</button>
                </div>                 
                 
                 
                
            </div>
            </div>
        {
          toggle === true?<Suspense fallback={<span className="loading loading-spinner loading-xl "></span>
}>
          <AvailablePlayer selectedP={selectedP} updatePlayerA={updatePlayerA} AvailablePlayerPromise = {AvailablePlayerPromise} icon={icon}></AvailablePlayer>
        </Suspense>:<SeletedPlayer selectedP={selectedP} updatePlayerA={updatePlayerA} ></SeletedPlayer>
        }
        {/* <img src={heroImg} alt="" /> */}
        
        
      </div>
  
      
      
    </>
  )
}

export default App

