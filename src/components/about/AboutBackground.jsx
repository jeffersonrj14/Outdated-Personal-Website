import Link from 'next/link'

const InlineLink = ({ href, children }) => (
  <Link
    href={href}
    passHref
    target='a_blank'
    className='decoration-wavy decoration-2 underline-offset-4 transition-all hover:underline text-jefferson-maindark dark:text-jefferson-main hover:text-jefferson-dark hover:dark:text-jefferson-light'
  >
    <span className='relative skew-y-3'>{children}</span>
  </Link>
)

function AboutBackground() {
  return (
    <div className='flex flex-col'>
      <h1 className='font-header text-4xl font-bold tracking-tight text-left'>Background</h1>
      <div className='my-10 '>
        <p className='mb-4 text-xl font-medium leading-8 tracking-tight'>
          Back in high school, I only had a basic understanding of HTML and CSS, and I wasn&apos;t
          sure what career path I wanted to take after graduation. Studying abroad in Japan gave me
          the opportunity to consider my career path. While there, I learned Japanese and pursued a
          diploma in Web Systems. Despite all of the obstacles I had to overcome, I developed a
          strong interest in this field and am actively seeking more knowledge online.
        </p>
        <p className='mb-4 text-xl font-medium leading-8 tracking-tight'>
          Although I lack professional experience, I consistently focus on learning and building
          projects to strengthen my skills.
        </p>
      </div>
    </div>
  )
}
export default AboutBackground
