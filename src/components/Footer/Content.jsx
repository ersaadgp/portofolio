import React from 'react'

export default function Content() {
  return (
    <div className="bg-[#4E4E5A] py-8 px-12 h-full w-full flex flex-col justify-between">
      <Section1 />
      <Section2 />
    </div>
  )
}

const Section1 = () => {
  return (
    <div>
      <Nav />
    </div>
  )
}

const Section2 = () => {
  return (
    <div className="flex justify-between items-end">
      <h1 className="text-[14vw] leading-[0.8] mt-10 text-white">
        Frontend Developer
      </h1>
      <p className="text-gray-200 font-thin">2025©copyright</p>
    </div>
  )
}

const Nav = () => {
  return (
    <div className="flex shrink-0 gap-20 pt-10">
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-[#ffffff80]">Companies</h3>
        <p className="text-gray-200 font-thin">
          Bank Rakyat Indonesia | Since 2021
        </p>
        <p className="text-gray-200 font-thin">Telkomsel | Since 2023</p>
        <p className="text-gray-200 font-thin">Sinarmas Mining | 2022 - 2023</p>
        <p className="text-gray-200 font-thin">Binar Academy | 2022 - 2024</p>
        <p className="text-gray-200 font-thin">Bee Solution Partner | 2021</p>
        <p className="text-gray-200 font-thin">Eigen Tri Mathema | 2021</p>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-[#ffffff80]">Education</h3>
        <p className="text-gray-200 font-thin">Widyatama University</p>
        <p className="text-gray-200 font-thin">
          Bandung State Polytechnic (POLBAN)
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-[#ffffff80]">Social Media</h3>
        <a
          className="text-gray-200 font-thin"
          href="https://www.linkedin.com/in/ersaadgp/"
        >
          LinkedIn
        </a>
        <a
          className="text-gray-200 font-thin"
          href="https://www.instagram.com/ersaadgp/"
        >
          Instagram
        </a>
        <a className="text-gray-200 font-thin" href="/docs/resume.pdf" download>
          Download My Resume
        </a>
      </div>
    </div>
  )
}
