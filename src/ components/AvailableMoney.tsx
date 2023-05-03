import front50 from '../assets/imgs/50_front.jpg'
import back50 from '../assets/imgs/50_back.jpg'
import front20 from '../assets/imgs/20_front.jpg'
import back20 from '../assets/imgs/20_back.jpg'
import front5 from '../assets/imgs/5_front.jpg'
import back5 from '../assets/imgs/5_back.jpg'
import front2 from '../assets/imgs/2_front.jpg'
import back2 from '../assets/imgs/2_back.jpg'

import { Money } from './Money'


export function AvailableMoney() {
    
    let tem50 = true
    let tem20 = true
    let tem5 = true
    let tem2 = true

    if(!tem50 && !tem20 !&& !tem5 && !tem2) {
        return (
            <div>
                <div className="grid grid-cols-1 grid-rows-3 align-center gap-1 p-2 rounded-md m-2 absolute bottom-0 bg-blue-900/50">
                    <h1></h1>
                    <h1 className='text-gray-200 text-xs font-bold uppercase'>Não tem dinheiro!</h1>
                    <h1></h1>
                </div>
            </div>
        )
    }
    
    return (
        <div>
            <div className="grid grid-cols-2 grid-rows-2 gap-1 p-1 m-2 absolute bottom-0">
                <Money imgFront={front50} imgBack={back50} have={tem50} />
                <Money imgFront={front20} imgBack={back20} have={tem20} />
                <Money imgFront={front5} imgBack={back5} have={tem5} />
                <Money imgFront={front2} imgBack={back2} have={tem2} />
            </div>
        </div>
    )
    

    
}