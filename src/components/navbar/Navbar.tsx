import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
     <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <Link to='/home' className='text-2xl font-bold uppercase'>Blog Pessoal</Link>

            <div className='flex gap-4'>
              <Link to='/home' className='hover:underline'>Postagens</Link>
              <div className='hover:underline cursor-pointer'>Temas</div>
              <div className='hover:underline cursor-pointer'>Cadastrar Tema</div>
              <div className='hover:underline cursor-pointer'>Perfil</div>
              
              <Link to='/login' className='hover:underline'>Sair</Link>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar