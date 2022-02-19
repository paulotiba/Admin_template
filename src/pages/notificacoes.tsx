import Layout from "../components/template/Layout";
import useAppData from "../data/hook/useAppData";


export default function Notificacoes() {
  const { alternarTema } = useAppData()

  return (
    <Layout titulo="Notificações" 
    subtitulo="Aqui você ira gerenciar as suas notificações">
      <button onClick={alternarTema}>AlternarTema!</button>

    </Layout>
  )
}
