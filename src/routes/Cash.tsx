import { useNavigate } from "react-router-dom"
import { Button } from "../ components/Button"
import { Header } from "../ components/Header"

export function Cash() {

    const botoesReight = document.querySelectorAll('.right button')
    const botoesLeft = document.querySelectorAll('.left button')

    const botoesValorReight = document.querySelectorAll('[variant="right"]')
    const botoesValorLeft = document.querySelectorAll('[variant="left"]')

    const styleOver = 'btn flex items-center justify-end text-right h-16 p-2 text-xs drop-shadow-lg rounded-lg bg-gray-600 text-slate-200'
    const styleOut = 'btn flex items-center justify-end text-right h-16 p-2 text-xs drop-shadow-lg rounded-lg  bg-slate-200 text-blue-700'


    const navigate = useNavigate()

    botoesReight.forEach((botaoReight, index) => {
        botaoReight.addEventListener('mouseover', () => {
            botoesValorReight[index].className = styleOver
        })
        botaoReight.addEventListener('mouseout', () => {
            botoesValorReight[index].className = styleOut
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
            botoesValorLeft[index].className = styleOver
        })
        botaoLeft.addEventListener('mouseout', () => {
            botoesValorLeft[index].className = styleOut
        })
    })


    return (
        <div className="bg-blue-700 h-full">
            <Header />

            <div className="mx-2 mt-4">
                <div className="grid grid-cols-2 gap-4">
                    <Button id="depos" variant="left">Depósito</Button>
                    <Button id="saque" variant="right">Saques</Button>
                    
                    <Button id="pagar" variant="left">Pagamento e Agendamento</Button>
                    <Button id="saldo" variant="right">Saldo e Extratos</Button>

                    <Button id="inves" variant="left">Investimentos</Button>
                    <Button id="empre" variant="right">Empréstimos: CDC, cheque Especial e Consignação</Button>

                    <Button id="trnsf" variant="left">Transferências</Button>
                    <Button id="outro" variant="right">Outros Serviços</Button>
                </div>
            </div>
        </div>
    )
}
