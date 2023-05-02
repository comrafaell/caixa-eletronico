import { Outlet } from "react-router-dom";
import { Button} from "./Button";

export function Monitor() {
    return (
        <div className="flex">
            <div className="left grid grid-cols-1 grid-rows-4 gap-4  pt-16 py-4">
                <Button disable={true} variant="blank"></Button>
                <Button disable={true} variant="blank"></Button>
                <Button disable={true} variant="blank"></Button>
                <Button disable={true} variant="blank"></Button>
            </div>

            <div className="bg-blue-700 border-2 h-96 w-96 mx-4 relative">
                <Outlet />
            </div>

            <div className="right grid grid-cols-1 grid-rows-4 gap-4 pt-16 py-4">
                <Button variant="blank"></Button>
                <Button variant="blank"></Button>
                <Button variant="blank"></Button>
                <Button variant="blank"></Button>
            </div>
        </div>
        
    )
}