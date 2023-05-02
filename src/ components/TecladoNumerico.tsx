import { Button } from "./Button";

export function TecladoNumerico() {
    return (
        <div>
            <div className="grid grid-cols-4 grid-rows-4 gap-4 pt-16 py-4">
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <Button variant="cancel">Cancela</Button>

                <Button>4</Button>
                <Button>5</Button>
                <Button>6</Button>
                <Button variant="correct">Corrige</Button>

                <Button>7</Button>
                <Button>8</Button>
                <Button>9</Button>
                <Button variant="confirm">Entra</Button>

                <Button>    </Button>
                <Button>0</Button>
                <Button>    </Button>
                <Button>    </Button>
            </div>
        </div>
    )
}