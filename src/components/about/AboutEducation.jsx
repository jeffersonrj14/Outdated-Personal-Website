const MyLinks = ({ href, text, rel }) => {
  return (
    <a
      href={href}
      rel={rel}
      target='a_blank'
      className='decoration-wavy decoration-2 underline-offset-4 transition-all hover:underline hover:text-jefferson-maindark hover:dark:text-jefferson-main '
    >
      {text}
    </a>
  )
}

function AboutEducation() {
  return (
    <div>
      <h1 className='font-header text-4xl font-bold tracking-tight text-left'>Education</h1>
      {/*  */}
      <div className='grid grid-cols-1 md:grid-cols-6 my-10'>
        <div className='flex flex-col col-span-2 mb-4 md:mb-0'>
          <h5 className='text-xl md:text-2xl  font-bold'>Diploma Web System</h5>
          <h6 className='text-lg font-bold'>
            <MyLinks
              href='https://ncp.ac.jp'
              text='Nihon Computer Professional Training College'
              rel='noopener noreferrer'
            />
          </h6>
          <p className='font-medium'>Apr 2021 - Mar 2023 (Osaka, Japan)</p>
        </div>
        <div className='flex flex-col col-span-4 text-xl'>
          <div>
            <ul>
              <li className='my-2 font-medium'>Grade: Cumulative GPA: 3.7/4.0</li>
              <li className='my-2 font-semibold decoration-wavy decoration-2 underline-offset-4 hover:underline text-jefferson-maindark dark:text-jefferson-main hover:text-jefferson-dark hover:dark:text-jefferson-light'>
                Relevant Courses
              </li>
              <ul className='font-medium'>
                <li className='my-2'>1. Web System - Javascript, PHP, Python, Java, C, API</li>
                <li className='my-2'>2. Web Design - HTML, CSS, Jquery</li>
                <li className='my-2'>3. Database - MariaDB (MySQL)</li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  )
}
export default AboutEducation
