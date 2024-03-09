import { Link } from "react-router-dom";

export default function Card({
  card: { id, imagen, nombre, director, productora, descripcion, capitulos, estado, calificacion }
}) {
  return (
    //card
    <div className="rounded-lg ring-smalt-blue-200 hover:ring-2">
      <Link to={`/detail/${id}`}>
        <div className="bg-white rounded-lg ">
          <div className="rounded-lg bg-white overflow-hidden relative min[200px]:p-2 lg:p-10">
            <img
              src={imagen}
              alt=""
              className="w-full min-[200px]:h-32 md:h-48 lg:h-72 xl:h-80 object-cover rounded"
            />
          </div>
          <div className="p-4 bg-white">
            <div>
              <h4 className="text-center font-extrabold text-4xl py-4"> {nombre} </h4>
            </div>
            <div className="p-5 space-y-3">
              <div className="px-6">
                <p className="text-sm "> <span className="font-bold text-blues-950"> Autor: </span> {director} </p>
                <p className="text-sm"> <span className="font-bold text-blues-950"> Estudio: </span> {productora} </p>
              </div>
            </div>
          </div>
          <div className="bg-blues-500 grid grid-cols-3 grid-rows-2 py-4 text-center text-white rounded-b-lg">
            <div className="text-2xl font-extrabold"> {capitulos} </div>
            <div className="text-2xl font-extrabold"> {estado} </div>
            <div className="text-2xl font-extrabold"> {calificacion} </div>
            <div className="text-sm font-extralight row-start-2">CAPITULOS</div>
            <div className="text-sm font-extralight row-start-2">ESTADO</div>
            <div className="text-sm font-extralight row-start-2">CALIFICACIÓN</div> 
          </div>
        </div>
      </Link>
    </div>


  );
}