import { ButtonHTMLAttributes, ReactElement, ReactNode, cloneElement } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode
    icon?: ReactElement
    variant?: 'default' | 'confirm' | 'correct' | 'cancel' | 'left' | 'right' | 'blank'
    defaultStyle?: string
    disable?: boolean
}

export function Button(props: ButtonProps) {
    const { variant } = props

    const style = `btn bg-gray-400 p-2 text-xs drop-shadow-lg shadow-dark rounded
                   hover:bg-gray-600 hover:text-slate-200`

    switch(variant) {
        case 'confirm':
            return <ConfirmButton {...props} defaultStyle={style} disable={props.disable ?? false} />
        case 'correct':
            return <CorrectButton {...props} defaultStyle={style} disable={props.disable ?? false} />
        case 'cancel':
            return <CancelButton {...props} defaultStyle={style} disable={props.disable ?? false} />
        case 'right':
            return <RightButton {...props} defaultStyle={style} disable={props.disable ?? false} />
        case 'left':
            return <LeftButton {...props} defaultStyle={style} disable={props.disable ?? false} />
        case 'blank':
            return <BlankButton {...props} defaultStyle={style} disable={props.disable ?? false} children={props.children ?? '    '} />
        default:
            return <DefaultButton {...props} defaultStyle={style} disable={props.disable ?? false} />
    }
}

export function DefaultButton(props: ButtonProps) {
    let { children, icon, defaultStyle, disable } = props
    if(disable) { defaultStyle += ' cursor-not-allowed' }

    return (
        <button
        {...props}
        className={`${defaultStyle}`}
    >
        <span>{children}</span>
        {icon && cloneElement(icon, {className: 'fill-white w-7 h-7'})}
    </button>
    )
}

export function ConfirmButton(props: ButtonProps) {
    let { children, defaultStyle, disable } = props
    if(disable) { defaultStyle += ' cursor-not-allowed' }

    return (
        <button {...props} className={`${defaultStyle}`}>
            <div className='flex justify-end'>
                <div className='bg-green-700 h-4 w-12 p-2 rounded shadow'></div>
            </div>
            <div className='text-xs p-2'>
                <span className='flex justify-center items-center uppercase'>{children}</span>
            </div>
        </button>
    )
}

export function CorrectButton(props: ButtonProps) {
    let { children, defaultStyle, disable } = props
    if(disable) { defaultStyle += ' cursor-not-allowed' }

    return (
        <button {...props} className={`${defaultStyle}`}>
            <div className='flex justify-end'>
                <div className='bg-yellow-600 h-4 w-12 p-2 rounded shadow'></div>
            </div>
            <div className='text-xs p-2'>
                <span className='flex justify-center items-center uppercase'>{children}</span>
            </div>
        </button>
    )
}


export function CancelButton(props: ButtonProps) {
    let { children, defaultStyle, disable } = props
    if(disable) { defaultStyle += ' cursor-not-allowed' }

    return (
        <button {...props} className={`${defaultStyle}`}>
            <div className='flex justify-end'>
                <div className='bg-red-700 h-4 w-12 p-2 rounded shadow'></div>
            </div>
            <div className='text-xs p-2'>
                <span className='flex justify-center items-center uppercase'>{children}</span>
            </div>
        </button>
    )
}


export function RightButton(props: ButtonProps) {
    let { children, icon, defaultStyle, disable } = props
    if(disable) { defaultStyle += ' cursor-not-allowed' }

    return (
        <button {...props} className={`${defaultStyle} flex items-center justify-end text-right h-16 text-blue-700 bg-slate-200`}>
            <span className="font-bold uppercase text-xs">{children}</span>
            <i>{icon && cloneElement(icon, {className: 'w-7 h-7'})}</i>
        </button>
    )
}

export function LeftButton(props: ButtonProps) {
    let { children, icon, defaultStyle, disable } = props
    if(disable) { defaultStyle += ' cursor-not-allowed' }

    return (
        <button {...props} className={`${defaultStyle} flex items-center justify-start text-left h-16 text-blue-700 bg-slate-200`}>
            {icon && cloneElement(icon, {className: 'w-7 h-7'})}
            <span className="font-bold uppercase text-xs">{children}</span>
        </button>
    )
}

export function BlankButton(props: ButtonProps) {
    let { defaultStyle, disable } = props
    if(disable) { defaultStyle += ' cursor-not-allowed' }

    return (
        <button {...props} className={`${defaultStyle} h-16 w-16`}></button>
    )
}
