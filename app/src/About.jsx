import React from 'react'

const About = () => {
  return (
    <div>
      <section className='flex jusfity-center items-center min-h-screen bg-gray-50 px-6 py-12'>
        <div className='mx-w-6xl flex flex-col md:flex-row itens-center gap-16'>

            <div className='flex-1 flex justify-center'>
                <img src="about.png" className='w-90 h-auto'></img>
            </div>
            <div className='flex-1 text-center md:text-left space-y-6'>
                <h2 className='text-4xl font-bold text-gray-800'>LET'S INTEROUCE ABOUT MYSELF</h2>
                <p className='text-lg text-gray-500'>
                Hello! I'm Baljinder Kaur, a passionate web developer with a knack for creating elegant solutions in the digital space. With a background in [mention relevant experience or education], I specialize in crafting responsive and user-friendly websites and applications. My journey in web development has equipped me with skills in [list relevant skills like frontend development, backend development, frameworks, etc.]. Beyond coding, I thrive on challenges that push my creativity and problem-solving abilities. Let's collaborate and bring your ideas to life!
                </p>
                <a href="/cv.pdf"
                className='inline-block bg-purple-600 text-white font-semibold py-4 px-8 rounded-lg shadow hover:bg-purple-700 transition-color'
                >
                    DOWNLOAD CV
                </a>
            </div>
        </div>
      </section>
    </div>
  )
}

export default About
