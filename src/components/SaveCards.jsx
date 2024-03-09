import React, { useState, useEffect } from 'react'
import { UserAuth } from '../context/AuthContext'
import { db } from '../config/firebase'
import { updateDoc, doc, onSnapshot } from 'firebase/firestore'
import { Link } from 'react-router-dom'

export default function SaveCards() {
  const [cards, setCards] = useState([]);
  const { user } = UserAuth();
  const cardRef = doc(db, "users", `${user?.email}`);

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setCards(doc.data()?.savedCards);
    })
  }, [user?.email]);

  const deleteCard = (passedID) => {
    try {
      const result = cards.filter((item) => item.id !== passedID)
      updateDoc(cardRef, {
        savedCards: result
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {/* id, nombre,, image, calificacion */}
      <div className='space-y-14'>
        {cards.map((item) => (
          <div key={item.id}
            className='space-y-5'>
            <div className="bg-white rounded-lg p-10 space-y-5">
              <Link
                to={`/detail/${item.id}`}>
                <div className='rounded-lg bg-paprika-800 p-5'>
                  <h2 className='text-center font-bold leading-7 text-4xl text-gray-900 sm:truncate sm:tracking-tight md:text-6xl'> {item.nombre} </h2>
                </div>
              </Link>
              <div>
                <div className="grid text-2xl grid-cols-1 md:grid-cols-2 grid-rows-1 gap-4">
                  <div>
                    <p>
                      <span className='font-bold text-blue-950'>
                        Director:
                      </span> {item.director}
                    </p>
                    <p>
                      <span className='font-bold text-blue-950'>
                        Productora:
                      </span> {item.productora}
                    </p>
                    <p>
                      <span className='font-bold text-blue-950'>
                        Calificacion:
                      </span> {item.calificacion}
                    </p>
                  </div>
                  <div>
                    <img
                      src={item.image}
                      alt=""
                      className="w-full h-24 md:w-full md:h-36 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 justify-center items-center">
              <button
                onClick={() => deleteCard(item.id)}
                className="py-2 px-6 w-full md:w-1/3 justify-center rounded-md bg-yellowi-600 text-sm font-semibold leading-6
                  text-white shadow-sm hover:bg-yellowi-500 focus-visible:outline focus-visible:outline-2
                  focus-visible:outline-offset-2 focus-visible:outline-yellowi-600">
                Delete Card
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}