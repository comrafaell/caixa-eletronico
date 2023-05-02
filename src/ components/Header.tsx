export function Header() {
    return(
        <div className="bg-slate-200 mx-2 h-12 flex items-center rounded-b">
            <img className="p-2 w-28 h-10" src="src/assets/imgs/logo-caixa-economica-federal.svg" alt="" />
            <div className="border-l-2 h-8 border-blue-700"></div>
            <span className="text-blue-700 m-2 uppercase text-sm font-black">O banco do exemplo</span>
        </div>
    )
}