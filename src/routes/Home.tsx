import { AvailableMoney } from "../ components/AvailableMoney";

export function Home() {
    return (
        <div className="flex justify-between align-text-bottom bg-home">
            <div>
                
                <AvailableMoney />
            </div>
        </div>
    )
}