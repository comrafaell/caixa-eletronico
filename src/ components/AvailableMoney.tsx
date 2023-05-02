import img50 from '../assets/imgs/50_front.jpg'
import img20 from '../assets/imgs/20_front.jpg'
import img05 from '../assets/imgs/5_front.jpg'
import img02 from '../assets/imgs/2_front.jpg'


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
                {(tem50 ? <img nota-50 src={img50} className="w-20 h-10" /> : "")}
                {(tem20 ? <img nota-20 src={img20} className="w-20 h-10" /> : "")}
                {(tem5 ?  <img nota-5 src={img05} className="w-20 h-10" /> : "")}
                {(tem2 ? <img nota-2 src={img02} className="w-20 h-10" /> : "")}
            </div>
        </div>
    )
    

    
}