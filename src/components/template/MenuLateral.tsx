import { IconeAjustes, IconeCasa, IconeSair, IconeSino, } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";


export default function MenuLateral() {
    return(
        <aside className={`flex flex-col
        bg-gray-200 text-gray-700
        dark:bg-gray-900 dark:text-gray-200
        `}>
            <div className={`
            flex flex-col items-center justify-center
            bg-gradient-to-r from-orange-300 to-orange-500
            h-20 w-20`}>
                <Logo />

            </div>
            <ul className="flex-grow">
                <MenuItem url="/" texto="Início" icone={IconeCasa}/>
                <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes}/>
                <MenuItem url="/notificacoes" texto="Notificações" icone={IconeSino}/>
            </ul>
            <ul>
                <MenuItem texto="Sair" icone={IconeSair}
                onClick={() => console.log('Saiu')}
                className={`
                text-red-600 dark:text-red-400 dark:hover:bg-gray-800
                hover:bg-orange-400 hover:text-white
                `}
                
                /> 
            </ul>
        </aside>
    )
}