interface PropsMoney {
    imgFront: string,
    imgBack: string,
    have: boolean,
}

export function Money({imgFront, imgBack, have} : PropsMoney) {
    if(have) {
        return (
            <div>
                <div className="w-20 h-10 bg-transparent cursor-pointer group perspective">
                    <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                        <div className="absolute backface-hidden w-full h-full">
                            <img src={imgFront} className="w-full h-full" />
                        </div>
                        <div className="absolute my-rotate-y-180 backface-hidden w-full h-full">
                            <img src={imgBack} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}