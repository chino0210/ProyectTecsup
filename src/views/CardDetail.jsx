import { useParams } from "react-router-dom"
import useData from "../hooks/useAxios"
import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { db } from "../config/firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

export default function CardDetail() {
  const { id } = useParams();
  const { data } = useData(`${import.meta.env.VITE_ENDPOINT_BASE}/series/Series/${id}`);

  const [saved, setSaved] = useState(false);
  const { logOut, user } = UserAuth();

  const cardID = doc(db, "users", `${user?.email}`)

  const saveCard = async () => {
    if (user?.email) {
      setSaved(true);
      await updateDoc(cardID, {
        savedCards: arrayUnion({
          id: data.id,
          nombre: data.nombre,
          image: data.imagen,
          calificacion: data.calificacion,
          director: data.director,
          productora: data.productora,
        })
      })
    } else {
      alert('Plese log in to save Cards')
    }
  }

  return (
    <div className="bg-bunker-950 p-10">
      <div className="bg-white rounded-lg pb-10 space-y-10">
        <div className="rounded-t-lg bg-paprika-800 p-5">
          <div className="space-y-10">
            <div className="">
              <h2 className="text-center font-bold leading-7 text-4xl text-gray-900 sm:truncate sm:tracking-tight md:text-6xl">
                {data.nombre}
              </h2>
            </div>
            <div className="flex flex-1 justify-center items-center">
              <button
                onClick={saveCard}
                className="py-2 px-6 w-full md:w-2/3 justify-center rounded-md bg-yellowi-600 text-sm font-semibold leading-6
                  text-white shadow-sm hover:bg-yellowi-500 focus-visible:outline focus-visible:outline-2
                  focus-visible:outline-offset-2 focus-visible:outline-yellowi-600">
                Save Card
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 px-10 space-y-5 space-x-0 md:space-x-5 md:space-y-0">
          <div className="space-y-8 pt-6 text-lg md:text-xl">
            <div className="space-y-4">
              <div className="">
                <p className=""> <span className="font-bold text-blue-950"> Autor: </span> {data.director} </p>
                <p className=""> <span className="font-bold text-blue-950"> Estudio: </span> {data.productora} </p>
              </div>
              <div className="bg-blue-950 grid grid-cols-3 grid-rows-2 py-4 text-center text-white rounded-lg">
                <div className="text-2xl font-extrabold"> {data.capitulos} </div>
                <div className="text-2xl font-extrabold"> {data.estado} </div>
                <div className="text-2xl font-extrabold"> {data.calificacion} </div>
                <div className="text-sm font-extralight row-start-2">CAPITULOS</div>
                <div className="text-sm font-extralight row-start-2">ESTADO</div>
                <div className="text-sm font-extralight row-start-2">CALIFICACIÓN</div>
              </div>
              <div>
                <p> {data.descripcion}</p>
              </div>
            </div>
          </div>
          <div className="">
            <img
              src={data.imagen}
              alt=""
              className=" ring-bunker-800/50 w-full h-94 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}