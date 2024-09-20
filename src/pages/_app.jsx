import '../styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import DefaultLayout from '@/components/layout/DefaultLayout'
import UseScrollToTop from '@/hooks/useScrollToTop'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [notificationShown, setNotificationShown] = useState(false)

  useEffect(() => {
    if (!notificationShown) {
      toast.info(
        <div>
          <span>This site is outdated. </span>
          <a
            href='https://jeffersonrj.com'
            onClick={() => (window.location.href = 'https://jeffersonrj.com')}
            className='text-teal-500 hover:underline'
            rel='noopener noreferrer'
          >
            Click here
          </a>{' '}
          to go to the new site.
        </div>,
        {
          autoClose: false, // will not close
          closeButton: false, // can't be close
          draggable: false, // cannot be drag
          position: 'bottom-center', // Position the toast at the bottom center
          style: {
            background: '#333',
            color: '#fff'
          },
          className: 'react-toastify-toast'
        }
      )
      setNotificationShown(true) // to avoid notification show twice
    }
  }, [notificationShown])

  return (
    <AnimatePresence>
      <div className='bg-jefferson-light dark:bg-primary-dark transition duration-300'>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
        <UseScrollToTop />
        <ToastContainer
          position='bottom-center' // Just to make sure its on bottom center
        />
      </div>
    </AnimatePresence>
  )
}

export default MyApp
