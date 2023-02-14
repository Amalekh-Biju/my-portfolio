import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTelegram} from 'react-icons/bs'


const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/amalekh-biju-50500b222" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/Amalekh-Biju" target="_blank"><BsGithub /></a>
            <a href="https://t.me/CYGNUSYT" target="_blank"><BsTelegram /></a>
        </div>
    )
}

export default HeaderSocials
