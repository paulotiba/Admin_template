import { IconeSol } from "../icons"

interface BotaoAlternarTemaProps {
    tema: string
    alternarTema: () => void

}
export default function BotaoAlternarTema(props: BotaoAlternarTemaProps) {
    return props.tema === 'dark' ? (
        <div onClick={props.alternarTema} className={`
        hidden   sm:flex items-center cursor-pointer
        bg-gradient-to-r from-yellow-300 to-yellow-600
        w-14 lg:w-28 h-8 p-1 rounded-full
        `}>
            <div className={`
            
            `}>
                {IconeSol}
            </div>
            <div className={`
            
            `}>
                <span>Claro</span>
            </div>

        </div>
    ) : (
        <div>

        </div>

    )

}