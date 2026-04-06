import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {
  return (
    <div className="flex justify-center bg-indigo-900 text-white">
      <div className="container flex flex-col items-center py-4">
        <p className='text-xl font-bold'>Blog Pessoal Márcia Fogaça | Copyright: 2026</p>
        <p className='text-lg'>Acesse minhas redes sociais</p>

        <div className='flex gap-2'>
          <LinkedinLogo size={48} weight='bold' className='cursor-pointer' />
          <InstagramLogo size={48} weight='bold' className='cursor-pointer' />
          <FacebookLogo size={48} weight='bold' className='cursor-pointer' />
        </div>
      </div>
    </div>
  )
}

export default Footer