import './App.css'
import video from './assets/bakground/video.mp4'

function App() {
  const glass = "w-full bg-[#283E94]  bg-clip-padding backdrop-filter backdrop-blur- [50%] bg-opacity-70 text-white shadow"


  return (
    <section className="flex flex-col items-center justify-center w-full h-[100vh] relative" id='landing'>
      <video autoPlay loop muted className='w-full h-full object-cover border blur-sm'> 
      <source src={video} type="video/mp4" />
    </video>

    <div className={`${glass} absolute w-full h-full flex items-center justify-center flex-col`}>
    <article className='w-[600px] flex flex-col items-center justify-center max-[600px]:w-full '>
    <h1 className="text-white text-4xl  py-1 max-[600px]:text-2xl max-[400px]:text-xl">
      Tu alternativa <strong>accesible</strong> para una 
    </h1>
    <h2 className='text-white text-4xl py-1 max-[600px]:text-2xl max-[400px]:text-xl'>
    cobertura <strong>integral de salud</strong> 
    </h2>
    </article>


    <article className='w-[600px] flex flex-col items-center justify-center mt-10 max-[800px]:w-full'>
    <h3 className="text-white text-xl  py-1  max-[600px]:text-sm">
      Planes accesibles, atencion personalizada y
    </h3>
    <h3 className='text-white text-xl py-1 max-[600px]:text-sm'>
    tecnologia de vanguardia para cuidar tu salud
    </h3>
    </article>
    </div>
   
    </section>
  )
}

export default App
