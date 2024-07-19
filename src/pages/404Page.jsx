import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center w-full h-screen'>
        <h1 className='font-extrabold text-9xl'>404</h1>
        <p className='text-2xl italic'>Unable to find this page on the server.</p>
        <Link to='/' className='mt-5 underline hover:text-red-400 transition-colors'>Go back to the home page</Link>
    </div>
  )
}

export default ErrorPage