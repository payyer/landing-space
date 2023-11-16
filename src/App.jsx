import { useState } from 'react'
import MyNav from './components/NavBar/MyNav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <MyNav />
        <section className=' w-full h-720px bg-header object-fit: fill text-white relative before:absolute before:left-0 before:top-0 before:h-full before:w-full before:z-10 before:bg-rgba'>
          <div className=' max-w-6xl  mx-auto flex items-center pt-32 '>
            <div className='w-2/3 flex flex-col gap-6 z-20'>
              <p className='font-light'>POSTED ON <span className='font-bold'>STARTUP</span></p>
              <h1 className=' text-6xl font-bold'>Step-by-step guide to choosing great font pairs</h1>
              <p>By <span className=' text-yellow-400'>James West</span> |  May 23, 2022 </p>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
              <a href=""
                className='flex items-center justify-center hover:opacity-80 rounded-md font-bold text-xl mt-6 h-14 w-52 bg-yellow-300 text-black'>
                Read more {`>`}
              </a>
            </div>
          </div>
        </section>
      </header>

      <main className=' max-w-6xl mx-auto h-fit mt-32'>
        <section className='flex w-full'>
          <div className='w-2/3'>
            <p className='font-bold text-3xl'>Featured Post</p>
            <div className=' mt-16 mx-8 flex flex-col gap-4'>
              <div className=' h-80 shadow-md'>
                <img src="img/home1.jpg" alt="Fetured picture" className=' h-full w-full object-cover' />
              </div>
              <p className=' font-medium'>By <span className=' text-purple-900'>John Doe</span>  l   May 23, 2022</p>
              <h2 className='text-3xl font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h2>
              <p className=' opacity-75'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
              <a href=""
                className='flex items-center justify-center hover:opacity-80 rounded-md font-bold text-xl mt-6 h-14 w-52 bg-yellow-300 text-black'>
                Read more {`>`}
              </a>
            </div>
          </div>
          <div className='w-1/3'>
            <div className='flex flex-col'>
              <div className='flex  justify-between items-end'>
                <p className='font-bold text-3xl'>All Post </p>
                <span className=' text-right'><a href='#' className=' text-purple-700 hover:opacity-75'>View All</a></span>
              </div>
              <div className='flex flex-col justify-around mt-8'>
                <div className='pt-8 pb-6 px-8'>
                  <p className='font-normal'>By <span className=' text-purple-700'>John Deo</span>   l   Aug 23, 2021 </p>
                  <h3 className='font-bold text-xl mt-2'>8 Figma design systems that you can download for free today.</h3>
                </div>
                <div className='pt-8 pb-6 px-8 bg-pink-50'>
                  <p className='font-normal'>By <span className=' text-purple-700 '>John Deo</span>   l   Aug 23, 2021 </p>
                  <h3 className='font-bold text-xl mt-2'>8 Figma design systems that you can download for free today.</h3>
                </div><div className='pt-8 pb-6 px-8'>
                  <p className='font-normal'>By <span className=' text-purple-700'>John Deo</span>   l   Aug 23, 2021 </p>
                  <h3 className='font-bold text-xl mt-2'>8 Figma design systems that you can download for free today.</h3>
                </div><div className='pt-8 pb-6 px-8'>
                  <p className='font-normal'>By <span className=' text-purple-700'>John Deo</span>   l   Aug 23, 2021 </p>
                  <h3 className='font-bold text-xl mt-2'>8 Figma design systems that you can download for free today.</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className=' mt-32 '>
          <div className='w-full h-6 flex '>
            <div className=' w-3/12'></div>
            <div className=' w-6/12 bg-yellow-300'></div>
            <div className=' w-3/12 bg-purple-800'></div>
          </div>
          <div className='flex  h-fit bg-gray-200 w-full'>
            <div className='flex flex-col gap-4 py-24 pl-20 w-1/2'>
              <p className=' text-xl'>About us</p>
              <h3 className='text-3xl font-bold'>We are a community of content writers who share their learnings</h3>
              <p className=' text-sm opacity-75'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <a href="#" className='font-semibold text-purple-700 hover:opacity-75  text-lg'>Read More {`>`}</a>
            </div>
            <div className='flex flex-col gap-4 w-1/2 mt-24 pl-16 pr-20'>
              <p className=' text-xl'>About us</p>
              <h3 className='text-2xl font-bold'>Creating valuable content for creatives all around the world</h3>
              <p className=' text-sm opacity-75'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </section>

        <section className='mt-32'>
          <h3 className=' text-3xl font-bold mb-12 text-center'>Choose A Catagory</h3>
          <div className='flex'>
            <div className='w-1/4 mr-8 h-fit border border-gray-300'>
              <div className='mt-8 ml-8 flex flex-col gap-2'>
                <div className=' w-12 h-12 bg-pink-100 rounded-xl'><img src="img/icon1.png" className=' shadow-sm rounded-xl' alt="icon1" /></div>
                <h4 className='text-2xl font-bold'>Business</h4>
                <p class='mb-8'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
              </div>
            </div>

            <div className='w-1/4 mr-8 h-fit bg-yellow-300 shadow-inner'>
              <div className='mt-8 ml-8 flex flex-col gap-2'>
                <div className=' w-12 h-12 bg-pink-100 rounded-xl flex justify-center items-center'><img src="img/icon5.png" className=' shadow-sm rounded-xl' alt="icon1" /></div>
                <h4 className='text-2xl font-bold'>Business</h4>
                <p class='mb-8'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
              </div>
            </div>
            <div className='w-1/4 mr-8 h-fit border border-gray-300'>
              <div className='mt-8 ml-8 flex flex-col gap-2'>
                <div className=' w-12 h-12 bg-pink-100 rounded-xl '><img src="img/icon3.png" className=' shadow-sm rounded-xl' alt="icon1" /></div>

                <h4 className='text-2xl font-bold'>Business</h4>
                <p class='mb-8'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
              </div>
            </div>
            <div className='w-1/4 mr-8 h-fit border border-gray-300'>
              <div className='mt-8 ml-8 flex flex-col gap-2'>
                <div className=' w-12 h-12 bg-pink-100 rounded-xl '><img src="img/icon4.png" className=' shadow-sm rounded-xl' alt="icon1" /></div>
                <h4 className='text-2xl font-bold'>Business</h4>
                <p class='mb-8'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
              </div>
            </div>
          </div>
        </section>

        <section className='mt-32'>
          <div className=' relative w-full'>
            <img src="img/home2.png" alt="home3" className=' object-contain ' />
            <div className=' absolute bottom-0 right-0 max-w-3xl h-fit bg-white'>
              <div className=' px-20 pl-20 pt-20 max-w-xl shadow-sm'>
                <p className=' font-medium mb-6'>Why we started </p>
                <h3 className=' text-3xl leading-10 font-bold mb-4'>It started out as a simple idea and evolved into our passion</h3>
                <p className=' text-sm opacity-75 mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                <a href=""
                  className='flex items-center justify-center hover:opacity-80 rounded-md font-bold text-xl mb-20 h-14 w-72 bg-yellow-300 text-black'>
                  Discover our story {`>`}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className='mt-32 flex flex-col items-center justify-center'>
          <h3 className='font-bold text-3xl'>List of Authors</h3>
          <div className=' mt-12 w-full flex'>
            <div className='w-1/4 flex flex-col items-center justify-center bg-gray-100'>
              <div className=' pt-10 pb-5'><img src="img/author1.png" alt="author 1" /></div>
              <h3 className=' font-bold text-2xl'>Floyd Miles</h3>
              <p className=' pb-5'>Content Writer @Company</p>
              <div className=' flex justify-between w-5/12 mx-auto pb-10'>
                <i class="fa-brands fa-square-facebook w-8 h-6"></i>
                <i class="fa-brands fa-twitter w-8 h-6"></i>
                <i class="fa-brands fa-instagram w-8 h-6"></i>
                <i class="fa-brands fa-linkedin w-8 h-6"></i>
              </div>
            </div>

            <div className='w-1/4 ml-8 flex flex-col items-center justify-center bg-pink-100'>
              <div className=' pt-10 pb-5'><img src="img/author2.png" alt="author 1" /></div>
              <h3 className=' font-bold text-2xl'>Dianne Russell</h3>
              <p className=' pb-5'>Content Writer @Company</p>
              <div className=' flex justify-between w-5/12 mx-auto pb-10'>
                <i class="fa-brands fa-square-facebook w-8 h-6"></i>
                <i class="fa-brands fa-twitter w-8 h-6"></i>
                <i class="fa-brands fa-instagram w-8 h-6"></i>
                <i class="fa-brands fa-linkedin w-8 h-6"></i>
              </div>
            </div>

            <div className='w-1/4 ml-8 flex flex-col items-center justify-center bg-gray-100'>
              <div className=' pt-10 pb-5'><img src="img/author3.png" alt="author 1" /></div>
              <h3 className=' font-bold text-2xl'>Jenny Wilson</h3>
              <p className=' pb-5'>Content Writer @Company</p>
              <div className=' flex justify-between w-5/12 mx-auto pb-10'>
                <i class="fa-brands fa-square-facebook w-8 h-6"></i>
                <i class="fa-brands fa-twitter w-8 h-6"></i>
                <i class="fa-brands fa-instagram w-8 h-6"></i>
                <i class="fa-brands fa-linkedin w-8 h-6"></i>
              </div>
            </div>

            <div className='w-1/4 ml-8 flex flex-col items-center justify-center bg-gray-100'>
              <div className=' pt-10 pb-5'><img src="img/author4.png" alt="author 1" /></div>
              <h3 className=' font-bold text-2xl'>Leslie Alexander</h3>
              <p className=' pb-5'>Content Writer @Company</p>
              <div className=' flex justify-between w-5/12 mx-auto pb-10'>
                <i class="fa-brands fa-square-facebook w-8 h-6"></i>
                <i class="fa-brands fa-twitter w-8 h-6"></i>
                <i class="fa-brands fa-instagram w-8 h-6"></i>
                <i class="fa-brands fa-linkedin w-8 h-6"></i>
              </div>
            </div>
          </div>
        </section>

        <section className='mt-32 w-full h-14 flex justify-between items-center'>
          <div className='2/12'>
            <div className=' text-md opacity-50'>
              We are
            </div>
            <div className=' text-2xl font-bold opacity-50'>
              Featured in
            </div>
          </div>
          <div className='2/12'>
            <img src="img/logo1.png" alt="logo" />
          </div>
          <div className='2/12'>
            <img src="img/logo2.png" alt="logo" />
          </div>
          <div className='2/12'>
            <img src="img/logo3.png" alt="logo" />
          </div>
          <div className='2/12'>
            <img src="img/logo4.png" alt="logo" />
          </div>
          <div className='2/12'>
            <img src="img/logo6.png" alt="logo" />
          </div>
        </section>

        <section className='mt-32 bg-pink-50 flex'>
          <div className=' w-3/5 mt-24 pl-28 pb-24 mb-16 pr-20 flex flex-col justify-center gap-3 border-r-2 border-gray-300'>
            <p className=' font-semibold text-xl'>TESTIMONIALs</p>
            <h3 className='text-3xl font-bold'>What people say about our blog</h3>
            <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
          <div className=' ml-24 mt-20 '>
            <p className='font-bold pr-44 text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className='flex mt-28'>
              <div><img src="img/author5.png" alt="author" /></div>
              <div className='flex flex-col'>
                <h3 className='font-bold text-xl'>Jonathan Vallem</h3>
                <p className='text-sm  opacity-70'>New york, USA</p>
              </div>
            </div>
          </div>
        </section>

        <section className='mt-32 flex flex-col gap-3 mb-32'>
          <h3 className='text-center w-1/3 mx-auto font-bold text-3xl'>Join our team to be a part of our story</h3>
          <p className='text-center w-1/3 mx-auto opacity-70 text-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          <div className=' w-1/3 mx-auto flex justify-center'>
            <a href="#" className=' py-2 px-8 bg-yellow-400 font-bold'>Join Now</a>
          </div>
        </section>
      </main>

      <footer className='w-full h-fit'>

      </footer>
    </>
  )
}

export default App
