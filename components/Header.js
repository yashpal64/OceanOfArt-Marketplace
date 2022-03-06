import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import openseaLogo from '../assets/oceanofart.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'
import { useWeb3 } from '@3rdweb/hooks'
import { useEffect } from 'react'
import { client } from '../lib/sanityClient'

const style = {
  wrapper: `bg-[#04111d] w-screen px-[1.2rem] py-[0.8rem] flex `,
  logoContainer: `flex items-center cursor-pointer`,
  logoText: ` ml-[0.8rem] text-white font-normal font-family: ui-sans-serif text-2xl font-style: italic hover:font-bold`,
  searchBar: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]`,
  searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
  searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
  headerItems: ` flex items-center justify-end`,
  headerItem: `flex items-center justify-end dropdown-menu text-white px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer`,
  headerIcon: `flex items-center justify-end text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer`,
  Button: 'dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-paddingborder-none'
  
}


const Header = () => {
  return (
    <div className={style.wrapper}>
      <Link href="/">
        <div className={style.logoContainer}>
          <Image src={openseaLogo} height={50} width={50} />
          <div className={style.logoText}>Ocean of Art</div>
        </div>
      </Link>
      <div className={style.searchBar}>
        <div className={style.searchIcon}>
          <AiOutlineSearch />
        </div>
        <input
          className={style.searchInput}
          placeholder="Search items, collections, and accounts"
        />
      </div>
      
        <Link href="/collections/0x1D7C27Bd9E37CE31bD4c4bb66440F67DFf92354F">
          <div className={style.headerItem}> Collections </div>
        </Link>
        <Link href="/resource">
        <div className={style.headerItem} > Resources </div>
        </Link> 
        <Link href="/profile">       
        <div className={style.headerIcon} > <CgProfile /> </div>
        </Link>
        <Link href="https://rinkeby.etherscan.io/address/0xe79ffa00c9e6c954c107788acfa65dd08e948c5d">
        <div className={style.headerIcon}>
          <MdOutlineAccountBalanceWallet />
        
      </div>
      </Link>
      
    </div>
  )
}

export default Header
