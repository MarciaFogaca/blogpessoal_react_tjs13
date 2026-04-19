import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {
  return (
    <div className="flex justify-center bg-indigo-900 text-white">
      <div className="container flex flex-col items-center py-4" translate="no">
        
        <p className='text-xl font-bold'>
            Blog Pessoal Márcia Fogaça | Copyright: 2026
        </p>

        <p className='text-lg'>Acesse minhas redes sociais</p>

        <div className='flex gap-2'>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <LinkedinLogo size={48} weight='bold' className='hover:text-indigo-400 transition-colors duration-200' />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <InstagramLogo size={48} weight='bold' className='hover:text-indigo-400 transition-colors duration-200' />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FacebookLogo size={48} weight='bold' className='hover:text-indigo-400 transition-colors duration-200' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer