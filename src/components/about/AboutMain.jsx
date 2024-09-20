import AboutMe from './AboutMe'
import AboutBackground from './AboutBackground'
import AboutEducation from './AboutEducation'
import AboutContact from './AboutContact'
import CourseWork from './CourseWork'

function AboutMain() {
  return (
    <div className='pt-20 container mx-auto relative text-jefferson-dark dark:text-jefferson-light '>
      <AboutMe />
      <AboutBackground />

      <section>
        <AboutEducation />
      </section>

      <hr className='dark:border-primary-light border-primary-dark rounded-2xl mx-20' />
      <section className=' pt-10'>
        <CourseWork />
      </section>

      <section>
        <AboutContact />
      </section>
    </div>
  )
}

export default AboutMain
