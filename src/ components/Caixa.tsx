import { Monitor } from "./Monitor";
import { TecladoNumerico } from "./TecladoNumerico";

export function Caixa() {
    return (
        <div>
            <div className="flex justify-center items-center p-10 gap-10">
                <Monitor />
                <TecladoNumerico />
            </div>
        </div>
        
    )
}