import { Swiper, SwiperSlide} from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper'

import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'

import { useNavigate } from 'react-router-dom'

export function Standyby() {

    const slides = [
        {
            path: 'src/assets/imgs/caixa-standyby-01.gif'
        },
        {
            path: 'src/assets/imgs/caixa-standyby-02.png'
        },
        {
            path: 'src/assets/imgs/caixa-standyby-04.gif'
        },
        {
            path: 'src/assets/imgs/caixa-standyby-03.png'
        }
    ]

    const navigate = useNavigate()

    const botoes = document.querySelectorAll('button')

    console.log("Nº de botões:", botoes.length)
    
    botoes.forEach((botao) => {
        botao.addEventListener('click', () => {
            console.log('Clicou')
            navigate("/home")
        })
    })

    return (
        <div>
            <Swiper modules={[EffectFade, Autoplay]}
                effect={"fade"}
                autoplay={{ delay: 3000, reverseDirection: true }}
            >
                <SwiperSlide><img src={slides[0].path} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slides[1].path} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slides[2].path} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slides[3].path} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    )    
}