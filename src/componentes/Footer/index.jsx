import LogoAluraFLix from "../Logo"
import { ContainerEstilizado } from "../Header"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

const Footer = () => {
    const [buttonHome, setButtonHome] = useState(true)
    const [buttonNuevoVideo, setButtonNuevoVideo] = useState(false)


    
    return <ContainerEstilizado $tipo="footer" $home={buttonHome} $nuevoVideo={buttonNuevoVideo}>
        <LogoAluraFLix />
        <div className="container-botones">
            <Link className="link-home" onClick={() => {
                setButtonHome(true)
                setButtonNuevoVideo(false)
            }} to="/">
                <div>
                    <svg width="27" height="31" viewBox="0 0 27 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.99619 27.25H8.86364V18.5C8.86364 18.0042 9.01913 17.5885 9.33011 17.2531C9.64108 16.9177 10.0264 16.75 10.4861 16.75H16.9761C17.4358 16.75 17.8211 16.9177 18.1321 17.2531C18.4431 17.5885 18.5985 18.0042 18.5985 18.5V27.25H23.466V11.5L13.7311 3.625L3.99619 11.5V27.25ZM0.751221 27.25V11.5C0.751221 10.9458 0.866147 10.4208 1.096 9.925C1.32585 9.42917 1.64359 9.02083 2.04921 8.7L11.7841 0.825C12.352 0.358333 13.001 0.125 13.7311 0.125C14.4612 0.125 15.1102 0.358333 15.6781 0.825L25.413 8.7C25.8186 9.02083 26.1363 9.42917 26.3662 9.925C26.596 10.4208 26.711 10.9458 26.711 11.5V27.25C26.711 28.2125 26.3932 29.0365 25.7578 29.7219C25.1223 30.4073 24.3584 30.75 23.466 30.75H16.9761C16.5164 30.75 16.131 30.5823 15.82 30.2469C15.5091 29.9115 15.3536 29.4958 15.3536 29V20.25H12.1086V29C12.1086 29.4958 11.9531 29.9115 11.6421 30.2469C11.3312 30.5823 10.9458 30.75 10.4861 30.75H3.99619C3.10382 30.75 2.3399 30.4073 1.70443 29.7219C1.06896 29.0365 0.751221 28.2125 0.751221 27.25Z" fill="#2271D1" />
                    </svg>
                    <span>HOME</span>
                </div>

            </Link>

            <Link className="link-nuevo-video" onClick={() =>{
                setButtonNuevoVideo(true)
                setButtonHome(false)
            }} onLoad={()=>console.log("ya cargo")} to="/NuevoVideo">
                <div>
                    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.25 20.75V14C25.25 13.3625 25.0344 12.8281 24.6031 12.3969C24.1719 11.9656 23.6375 11.75 23 11.75C22.3625 11.75 21.8281 11.9656 21.3969 12.3969C20.9656 12.8281 20.75 13.3625 20.75 14V20.75H14C13.3625 20.75 12.8281 20.9656 12.3969 21.3969C11.9656 21.8281 11.75 22.3625 11.75 23C11.75 23.6375 11.9656 24.1719 12.3969 24.6031C12.8281 25.0344 13.3625 25.25 14 25.25H20.75L20.75 32C20.75 32.6375 20.9656 33.1719 21.3969 33.6031C21.8281 34.0344 22.3625 34.25 23 34.25C23.6375 34.25 24.1719 34.0344 24.6031 33.6031C25.0344 33.1719 25.25 32.6375 25.25 32L25.25 25.25L32 25.25C32.6375 25.25 33.1719 25.0344 33.6031 24.6031C34.0344 24.1719 34.25 23.6375 34.25 23C34.25 22.3625 34.0344 21.8281 33.6031 21.3969C33.1719 20.9656 32.6375 20.75 32 20.75L25.25 20.75ZM23 0.5C26.1125 0.5 29.0375 1.09063 31.775 2.27188C34.5125 3.45312 36.8938 5.05625 38.9188 7.08125C40.9437 9.10625 42.5469 11.4875 43.7281 14.225C44.9094 16.9625 45.5 19.8875 45.5 23C45.5 26.1125 44.9094 29.0375 43.7281 31.775C42.5469 34.5125 40.9437 36.8938 38.9188 38.9188C36.8938 40.9437 34.5125 42.5469 31.775 43.7281C29.0375 44.9094 26.1125 45.5 23 45.5C19.8875 45.5 16.9625 44.9094 14.225 43.7281C11.4875 42.5469 9.10625 40.9437 7.08125 38.9188C5.05625 36.8938 3.45312 34.5125 2.27188 31.775C1.09063 29.0375 0.5 26.1125 0.5 23C0.5 19.8875 1.09063 16.9625 2.27188 14.225C3.45313 11.4875 5.05625 9.10625 7.08125 7.08125C9.10625 5.05625 11.4875 3.45312 14.225 2.27188C16.9625 1.09063 19.8875 0.5 23 0.5ZM23 5C17.975 5 13.7188 6.74375 10.2313 10.2313C6.74375 13.7187 5 17.975 5 23C5 28.025 6.74375 32.2812 10.2313 35.7688C13.7188 39.2563 17.975 41 23 41C28.025 41 32.2812 39.2563 35.7688 35.7688C39.2563 32.2812 41 28.025 41 23C41 17.975 39.2563 13.7188 35.7688 10.2313C32.2813 6.74375 28.025 5 23 5Z" fill="white" />
                    </svg>
                    <span>NUEVO VIDEO</span>
                </div>

            </Link>
        </div>
    </ContainerEstilizado>
}

export default Footer