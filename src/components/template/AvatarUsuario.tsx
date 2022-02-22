import Link from "next/link";
import useAuth from "../../data/hook/useAuth";



export default function AvatarUsuario() {
    const { usuario } = useAuth()
    return (
        <Link href="/perfil">

        </Link>

    )
}