const MyLinks = ({ href, text, rel }) => {
  return (
    <a
      href={href}
      rel={rel}
      target='a_blank'
      className='decoration-wavy decoration-2 underline-offset-4 transition-all hover:underline hover:text-jefferson-maindark hover:dark:text-jefferson-main'
    >
      {text}
    </a>
  )
}
const CourseList = ({ href, text, rel }) => {
  return (
    <li className='my-2'>
      <a
        href={href}
        rel={rel}
        target='a_blank'
        className='font-medium decoration-wavy decoration-2 underline-offset-4 transition-all hover:underline text-jefferson-maindark dark:text-jefferson-main hover:text-jefferson-dark hover:dark:text-jefferson-light active:text-jefferson-main active:dark:text-jefferson-maindark'
      >
        {text}
      </a>
    </li>
  )
}

function CourseWork() {
  return (
    <div>
      <h1 className='font-header text-4xl font-bold tracking-tight text-left'>CourseWork</h1>

      <div className='grid grid-cols-1 md:grid-cols-6 my-10'>
        <div className='flex flex-col col-span-2 mb-4 md:mb-0'>
          <h5 className='text-xl md:text-2xl  font-bold'>Web Development</h5>
          <h6 className='text-lg font-bold'>
            <MyLinks
              href='https://zerotomastery.io'
              text='Zero To Mastery'
              rel='noopener noreferrer'
            />
          </h6>
          <p className='font-medium'>Self-Paced Online Course (Present)</p>
        </div>
        <div className='flex flex-col col-span-4 text-xl'>
          <div>
            <span className='font-semibold text-jefferson-dark dark:text-jefferson-light'>
              Course:
            </span>
            <CourseList
              href='https://zerotomastery.io/courses/coding-bootcamp/'
              text='The Complete Web Developer in 2024: Zero to Mastery'
              rel='noopener noreferrer'
            />
            <CourseList
              href='https://zerotomastery.io/courses/learn-data-structures-and-algorithms/'
              text='Master the Coding Interview: Data Structures + Algorithms'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default CourseWork
