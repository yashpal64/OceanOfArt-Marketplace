import React from 'react'

const style = {
  wrapper: `relative`,
  container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://img.freepik.com/free-photo/plain-smooth-maroon-paper-background_53876-128606.jpg?w=740')] before:bg-cover before:bg-center before:opacity-100`,
  contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
  copyContainer: `w-1/2`,
  title: `relative text-[#FFFFFF] text-[46px] font-semibold`,
  description: `text-[#CDCDCD] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
  ctaContainer: `flex`,
  accentedButton: ` hover:animate-bounce relative text-lg font-semibold px-10 py-4 bg-[#2181e2] rounded-lg mr-5 text-white cursor-pointer`,
  button: ` hover:animate-bounce relative text-lg font-semibold px-12 py-4 bg-black rounded-lg mr-5 text-[#FFFFFF] cursor-pointer`,
  cardContainer: `border-solid border-2 border-[#000000] rounded-[3rem] shadow-2xl`,
  infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
  author: `flex flex-col justify-center ml-4`,
  name: ``,
  infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
}

const Hero = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.contentWrapper}>
          <div className={style.copyContainer}>
            <div className={style.title}>
              Search, List and Trade NFTs.
            </div>
            <div className={style.description}>
              Ocean of Art is an extraordinary NFT marketplace.
            </div>
            <div className={style.ctaContainer}>
              <a href='/discover'>
              <button className={style.accentedButton}>Discover</button>
              </a>
              <a href='/profile'>
              <button className={style.button}>Create</button>
              </a>
            </div>
          </div>
          <div className={style.cardContainer}>
            <img class="hover:scale-110 transition duration-300 ease-in-out" alt="Louvre"
              className="rounded-t-lg"
              src="https://i.postimg.cc/Px8Bw52h/photo1645978214.jpg"
              
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
