import Link from "next/link";

interface MenuItemProps {
    texto: string;
    icone: any;
    url?: string;
    className?: string
    onClick?: (evento: any) => void
}

export default function MenuItem(props: MenuItemProps) {

    function renderizarLink() {
      return (
        <a className={`
        flex flex-col justify-center items-center 
        w-full h-20 ${props.className} text-gray-600
        `}>
        {props.icone}
          <span className={`text-xs font-light`}>{props.texto}</span>
        </a>
      )
    }
  return (
    <li onClick={props.onClick} className={` hover:bg-gray-400 cursor-pointer`}>
        {props.url ? (
      <Link href={props.url}>
          {renderizarLink()}
      </Link>
        ): (
            renderizarLink()
        )}
    </li>
  );
}
