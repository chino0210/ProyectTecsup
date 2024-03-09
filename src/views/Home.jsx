import CardSlice from "../components/CardSlice";
import useData from "../hooks/useAxios"
import SaveCards from "../components/SaveCards";
import { UserAuth } from '../context/AuthContext'

export default function Home() {
  const { user, logOut } = UserAuth()


  const { data, error, isLoading } = useData(`${import.meta.env.VITE_ENDPOINT_BASE}/series/Series`)
  if (isLoading) {
    return <p> Cargando </p>
  }
  if (error) {
    return <p> {error} </p>
  }

  return (
    <div className="bg-bunker-950 pb-10">
      {user?.email ? (
        <div className="h-[10vh] p-10">
          <h1 className="text-4xl font-bold text-white text-center"> BIENVENIDO DE VUELTA </h1>
        </div>
      ) : (
        <div className="h-[10vh] p-10">
          <h1 className="text-4xl font-bold text-white text-center"> BIENVENIDO </h1>
        </div>
      )}
      <div className="">
        <div className="h-[10vh] p-10">
          <h1 className="text-4xl font-bold text-white"> Entradas Populares: </h1>
        </div>
        <div className="px-10">
          <CardSlice data={data.slice(data.length - 4, data.length)} />
        </div>
      </div>
      {user?.email ? (
        <div>
          <div className="h-[10vh] p-10">
            <h1 className="text-4xl font-bold text-white"> Ultimas entradas guardadas: </h1>
          </div>
          <div className="px-10">
            <SaveCards data={data.slice(data.length - 4, data.length)} />
          </div>
        </div>
      ) : null}
    </div>

  );
}
