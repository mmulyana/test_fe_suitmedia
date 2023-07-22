import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useState } from 'react'
const MediaQuery = dynamic(() => import('react-responsive'), { ssr: false })
import { BiMenuAltRight } from 'react-icons/bi'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  function handleMenu() {
    setIsOpen(!isOpen)
  }

  return (
    <div className='fixed top-0 left-0 w-full h-16 bg-white z-50'>
      <div className='w-full h-full flex justify-between items-center max-w-[1200px] mx-auto px-4 lg:px-0'>
        <Link href='/' className='text-lg text-gray-900'>
          Company
        </Link>

        <MediaQuery minWidth={786}>
          <nav className='flex gap-4 items-center'>
            <div className='group relative inline-block' tabIndex={-1}>
              <button className='text-gray-600 active:bg-gray-100 focus-within:bg-gray-100 px-3 py-1 rounded'>
                About
              </button>
              <div className='invisible opacity-0 transform origin-top right-0 group-focus-within:visible group-focus-within:opacity-100 absolute bg-white p-2 rounded shadow-lg w-48'>
                <Link
                  href='/'
                  className='hover:bg-gray-100 w-full px-3 py-1 block rounded'
                >
                  History
                </Link>
                <Link
                  href='/'
                  className='hover:bg-gray-100 w-full px-3 py-1 mt-2 block rounded'
                >
                  Vision Mission
                </Link>
              </div>
            </div>
            <Link
              href='/'
              className='text-gray-600 active:bg-gray-100 focus-within:bg-gray-100 px-3 py-1 rounded'
            >
              Our Work
            </Link>
            <Link
              href='/'
              className='text-gray-600 active:bg-gray-100 focus-within:bg-gray-100 px-3 py-1 rounded'
            >
              Our team
            </Link>
            <Link
              href='/'
              className='text-gray-600 active:bg-gray-100 focus-within:bg-gray-100 px-3 py-1 rounded'
            >
              Contact
            </Link>
          </nav>
        </MediaQuery>
        <MediaQuery maxWidth={786}>
          <button className='text-gray-800 text-2xl' onClick={handleMenu}>
            <BiMenuAltRight />
          </button>
          {!!isOpen && (
            <div className='w-full h-full fixed left-0 top-16 bg-white z-40 px-4'>
              <nav className='flex flex-col gap-4 items-start'>
                <div className='group relative' tabIndex={-1}>
                  <button className='text-gray-600 active:bg-gray-100 focus-within:bg-gray-100 px-3 py-1 rounded text-3xl'>
                    About
                  </button>
                  <div className='hidden opacity-0 transform origin-top left-4 group-focus-within:block group-focus-within:opacity-100 relative bg-white p-2'>
                    <Link
                      href='/'
                      className='hover:bg-gray-100 w-full px-3 py-1 block rounded text-xl'
                    >
                      History
                    </Link>
                    <Link
                      href='/'
                      className='hover:bg-gray-100 w-full px-3 py-1 mt-2 block rounded text-xl'
                    >
                      Vision Mission
                    </Link>
                  </div>
                </div>
                <Link
                  href='/'
                  className='text-gray-600 active:bg-gray-100 focus-within:bg-gray-100 px-3 py-1 rounded text-3xl'
                >
                  Our Work
                </Link>
                <Link
                  href='/'
                  className='text-gray-600 active:bg-gray-100 focus-within:bg-gray-100 px-3 py-1 rounded text-3xl'
                >
                  Our team
                </Link>
                <Link
                  href='/'
                  className='text-gray-600 active:bg-gray-100 focus-within:bg-gray-100 px-3 py-1 rounded text-3xl'
                >
                  Contact
                </Link>
              </nav>
            </div>
          )}
        </MediaQuery>
      </div>
    </div>
  )
}
