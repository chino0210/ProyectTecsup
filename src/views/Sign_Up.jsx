import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Sign_Up() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, signUp } = UserAuth();
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const ERRORS = {
    "auth/email-already-exists":
      "El correo ya tiene una cuenta asociada, utilice otro correo por favor",
    "auth/email-already-in-use":
      "El correo ya tiene una cuenta asosiaca, utilice otro correo por favor",
    "auth/wrong-password": "La contraseña incorrecta, verifiquela por favor",
    "auth/invalid-email":
      "El correo indicado es inválido, verifique sus datos por favor",
    "auth/missing-password": "La contraseña esta vacia, indiquela por favor",
    "auth/invalid-credential":
      "Credenciales inválidas, verifique sus datos por favor",
    "auth/network-request-failed":
      "Error de red, verifique su conexión a internet",
  };

  const notify = (msg) => toast(msg);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signUp(email, password)
      navigate('/')
    } catch (error) {
      console.log("Error", error.code);
      notify(ERRORS[error.code]);
      throw error;
    }
  };


  return (
    // div total
    <div className="absolute top-0 z-40 w-full h-dvh">
      {/* div de la imagen */}
      <img
        src="https://images.unsplash.com/photo-1585779034823-7e9ac8faec70?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="brightness-50 saturate-50 absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      {/* div del login */}
      <div className="w-full h-full py-20">
        <div className="h-full min-[200px]:w-11/12 md:w-10/12 lg:w-2/3 mx-auto bg-bunker-950/50 text-white">
          <div className='w-2/3 mx-auto space-y-5 pt-20'>
            <div className=''>
              <h1 className='text-3xl font-bold'>
                Crear Cuenta
              </h1>
            </div>
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
            {/* error */}
            <form
              onSubmit={handleSubmit}
              className='w-full flex flex-col space-y-5'
            >
              <div className='w-full flex flex-col px-2 md:px-12'>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className='p-4 my-2 bg-east-bay-950 rouded'
                  type='email'
                  placeholder='Email'
                  autoComplete='email'
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className='p-4 my-2 bg-east-bay-950 rouded'
                  type='password'
                  placeholder='Contraseña'
                  autoComplete='current-password'
                />
              </div>
              <div className='flex justify-between items-center text-sm text-smalt-blue-200 px-8 md:px-24'>
                <p className=''>
                  <input className='mr-2' type='checkbox' />
                  Le gustaria resivir notificacion?
                </p>
              </div>
              <button className='bg-smalt-blue-700 bg- py-4 my-6 rounded font-bold'>
                Crear cuenta
              </button>
              <div className='flex justify-between items-center text-sm text-smalt-blue-200 px-4 md:px-24'>
                <p>
                  <input className='mr-2' type='checkbox' />
                  Mantener conectado
                </p>
                <p>Necesitas ayuda?</p>
              </div>
              <div className='px-10'>
                <p className='py-8'>
                  <span className='text-smalt-blue-200'>
                    Tienes una cuenta?
                  </span>
                  <Link to='/login'> Inicia Sesion </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}