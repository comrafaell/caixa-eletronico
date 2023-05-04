import { useNavigate } from "react-router-dom"
import { Button } from "../ components/Button"
import { Header } from "../ components/Header"
import { CaretLeft, CaretRight, Plus } from "@phosphor-icons/react"

export function Cash() {

    const botoesReight = document.querySelectorAll('.right button')
    const botoesLeft = document.querySelectorAll('.left button')

    const botoesValorReight = document.querySelectorAll('[variant="right"]')
    const botoesValorLeft = document.querySelectorAll('[variant="left"]')

    const styleOverReight = 'btn flex items-center justify-end text-right h-16 p-2 text-xs drop-shadow-lg rounded-lg bg-gray-600 text-slate-200'
    const styleOutReight = 'btn flex items-center justify-end text-right h-16 p-2 text-xs drop-shadow-lg rounded-lg  bg-slate-200 text-blue-700'

    const styleOverLeft = 'btn flex items-center justify-start text-left h-16 p-2 text-xs drop-shadow-lg rounded-lg bg-gray-600 text-slate-200'
    const styleOutLeft = 'btn flex items-center justify-start text-left h-16 p-2 text-xs drop-shadow-lg rounded-lg  bg-slate-200 text-blue-700'


    const navigate = useNavigate()

    botoesReight.forEach((botaoReight, index) => {
        botaoReight.addEventListener('mouseover', () => {
            botoesValorReight[index].className = styleOverReight
        })
        botaoReight.addEventListener('mouseout', () => {
            botoesValorReight[index].className = styleOutReight
        })
        botaoReight.addEventListener('click', () => {
            let direction = botoesValorReight[index].getAttribute('id')
            switch(direction){
                case 'saque':
                    navigate('/withdraw')
            }
            
        })
    })
    
    botoesLeft.forEach((botaoLeft, index) => {
        botaoLeft.addEventListener('mouseover', () => {
            botoesValorLeft[index].className = styleOverLeft
        })
        botaoLeft.addEventListener('mouseout', () => {
            botoesValorLeft[index].className = styleOutLeft
        })
    })


    return (
        <div className="bg-blue-700 h-full">
            <Header />

            <div className="mx-2 mt-4">
                <div className="grid grid-cols-2 gap-4">
                    <Button id="depos" variant="left" icon={<CaretLeft size={32} weight="fill" />}>Depósito</Button>

                    <Button id="saque" variant="right" icon={<CaretRight size={32} weight="fill" />}>Saques</Button>
                    
                    <Button id="pagar" variant="left" icon={<CaretLeft size={32} weight="fill" />}>Pagamento e Agendamento</Button>

                    <Button id="saldo" variant="right" icon={<CaretRight size={32} weight="fill" />}>Saldo e Extratos</Button>

                    <Button id="inves" variant="left" icon={<CaretLeft size={32} weight="fill" />}>Investimentos</Button>

                    <Button id="empre" variant="right" icon={<CaretRight size={32} weight="fill" />}>Empréstimos: CDC, cheque Especial e Consignação</Button>

                    <Button id="trnsf" variant="left" icon={<CaretLeft size={32} weight="fill" />}>Transferências</Button>

                    <Button id="outro" variant="right" icon={<CaretRight size={32} weight="fill" />}> <Plus size={32} weight="bold" width={50} className="text-orange-500 flex justify-start text-left hover:text-slate-200" />Outros Serviços</Button>
                </div>
            </div>
        </div>
    )
}
