import { Button } from "../ components/Button";
import { Header } from "../ components/Header";

export function Withdraw() {

    const botoesRight = document.querySelectorAll('.right button')
    const botoesValor = document.querySelectorAll('[id]')
    const botaoEntra = document.querySelector('[variant="confirm"]')
    const input = document.querySelector('input')
    const aviso = document.querySelector('h1')
            
    const styleOver = 'btn flex items-center justify-end text-right h-16 p-2 text-xs drop-shadow-lg rounded-lg bg-gray-600 text-slate-200'
    const styleOut = 'btn flex items-center justify-end text-right h-16 p-2 text-xs drop-shadow-lg rounded-lg  bg-slate-200 text-blue-700'

    
    botaoEntra?.addEventListener('click', () => {
        if(input.value !== 0) {
            console.log('Entrou')
        } else {
            aviso.innerHTML = 'Você não inseriu um valor! Informe um valor por, favor!'
        }
    })
    
    botoesRight.forEach((botaoRight, index) => {
        botaoRight.addEventListener('mouseover', () => {
            botoesValor[index+1].className = styleOver
        })
        botaoRight.addEventListener('mouseout', () => {
            botoesValor[index+1].className = styleOut
        })
        botaoRight.addEventListener('click', () => {
            let valor = botoesValor[index+1].getAttribute('id')
            input.value = valor
        })
    })
    


    return(
        <div>
            <Header />

            <div className="grid grid-rows-3 grid-flow-col mx-2 my-4 gap-4 bg-purple-600 h-full">

                <div className="flex h-16 pl-2 rounded-md bg-slate-200 text-blue-700">
                    <label htmlFor="money" className="flex items-center">R$</label>
                    <input type="number" name="money" className="ml-1 bg-transparent" value={0.00} />
                </div>

                <div className="row-span-2 pl-2 bg-yellow-400">
                    <h1>Insira um valor</h1>
                </div>
                
                <div className="row-span-4 grid gap-4 text-lg bg-green-400">
                    <Button className="cursor-none" id="150" variant="right">R$150</Button>
                    <Button className="cursor-none" id="200" variant="right">R$200</Button>
                    <Button className="cursor-none" id="400" variant="right">R$400</Button>
                    <Button className="cursor-none" id="600" variant="right">R$600</Button>
                </div>
            </div>

        </div>
    )
}
