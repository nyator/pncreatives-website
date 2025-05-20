import { Helmet } from "react-helmet-async";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 Not Found | PN Creatives</title>
      </Helmet>
      <div className='h-screen w-screen bg-black'>
        <div className="max-w-2xl mx-auto text-center flex items-center justify-center h-svh gap-2 ">
          <h2 className="text-clamp_name font-cBold text-red-600 ">404</h2>
          <span className='text-white/50'>|</span>
          <h2 className="text-clamp_text font-cRegular text-white/50 ">This page could not be found</h2>
        </div>
      </div>
    </>
  )
}

export default NotFound