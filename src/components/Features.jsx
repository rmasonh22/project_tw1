import React from 'react'
import JTH from '../assets/jt.jpg'
import Solo from '../assets/JT3.jpg'
import Cello from '../assets/cello-lesson.jpg'

function Features() {
  return (
    <section className="container mx-auto px-6 p-10">
  <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
    Features
  </h2>
  <div className="flex items-center flex-wrap mb-20">
    <div className="w-full md:w-1/2">
      <h4 className="text-3xl text-gray-800 font-bold mb-3">Jacqueline</h4>
      <p className="text-gray-600 mb-8">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi et facilis obcaecati labore modi explicabo, fugiat aspernatur omnis ipsa repudiandae.
      </p>
    </div>
    <div className="w-full md:w-1/2">
      <img src={JTH} alt="Monitoring" />
    </div>
  </div>
  <div className="flex items-center flex-wrap mb-20">
    <div className="w-full md:w-1/2">
      <img src={Solo} alt="Reporting" />
    </div>
    <div className="w-full md:w-1/2 pl-10">
      <h4 className="text-3xl text-gray-800 font-bold mb-3">Preparing for a Solo</h4>
      <p className="text-gray-600 mb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, similique eveniet. Repudiandae culpa, eaque dolorem soluta quam facilis. Explicabo, porro?
      </p>
    </div>
  </div>
  <div className="flex items-center flex-wrap mb-20">
    <div className="w-full md:w-1/2">
      <h4 className="text-3xl text-gray-800 font-bold mb-3">Private Cello Lessons</h4>
      <p className="text-gray-600 mb-8">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus quae, quas voluptates fugit veritatis illum vel neque. Voluptates consequatur vel perspiciatis nemo quas sint doloremque laudantium qui unde! Nisi, provident.
      </p>
    </div>
    <div className="w-full md:w-1/2">
      <img src={Cello} alt="Syncing" />
    </div>
  </div>
</section>

  )
}

export default Features
