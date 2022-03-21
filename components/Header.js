import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../assets/logo/md-logo-1.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'


const style = {
    wrapper: `bg-[#9046CF] w-screen px-[1.2rem] py-[0.8rem] flex`,
    logoContainer: `flex items-center cursor-pointer`,
    logoText: `ml-[0.8rem] text-white font-semibold text-2xl`,
    searchBar: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#B396CC] rounded-[0.8rem] hover:bg-[#AB8EC3]`,
    searchIcon: `text-[#E4EEF8] mx-3 font-bold text-lg`,
    searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#E4EEF8]`,
    headerItems: `flex items-center justify-end`,
    headerItem: `text-white px-4 font-bold text-[#E4EEF8] hover:text-white cursor-pointer`,
    headerIcon: `text-[#E4EEF8] text-3xl font-black px-4 hover:text-white cursor-pointer`,
}

const Header = () => {
    return (
        <div className={style.wrapper}>
            <Link href="/">
                <div className={style.logoContainer}>
                    <Image src={logo} height={50} width={50}></Image>
                    <div className={style.logoText}>Raindropz</div>
                </div>
            </Link>
            <div className={style.searchBar}>
                <div className={style.searchIcon}>
                    <AiOutlineSearch />
                </div>
                <input type="text" className={style.searchInput}
                placeholder="Search items, collections, and accounts"
                />
            </div>
            <div className={style.headerItems}>
                <Link href="/collections/0x1FCcd369382497A6b5D2DccF175fff2408e7c526">
                    <div className={style.headerItem}> Collections </div>
                </Link>
                <Link href="/stats">
                    <div className={style.headerItem}> Stats </div>
                </Link>
                <Link href="/resources">
                    <div className={style.headerItem}> Resources </div>
                </Link>
                <Link href="/create">
                    <div className={style.headerItem}> Create </div>
                </Link>
                <Link href="/profile">
                    <div className={style.headerIcon}>
                        <CgProfile />
                    </div>
                </Link>
                <Link href="/wallet">
                    <div className={style.headerIcon}>
                        <MdOutlineAccountBalanceWallet />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header