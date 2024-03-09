import useData from "../hooks/useAxios"
import CardSlice from "../components/CardSlice"

export default function CardAll() {
  const { data, error, isLoading } = useData(`${import.meta.env.VITE_ENDPOINT_BASE}/series/Series`)
  if (isLoading) {
    return <p> Cargando </p>
  }
  if (error) {
    return <p> {error} </p>
  }

  return (
    <div className="bg-bunker-950 pb-10">
      <div className="h-[10vh] p-10">
        <h1 className="text-4xl font-bold text-white"> Todas las entradas: </h1>
      </div>
      <div className="px-6 lg:px-14">
              <CardSlice data={data} />
      </div>
    </div>
  )
}
