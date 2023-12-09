import { useContext } from "react";
import "./SwitchButtons.css";
import Mac from './logos/Mac.svg';
import Windows from './logos/Windows.svg';
import appleBlack from "./logos/appleBlack.svg"
import { AppContext } from "../../context/AppData";
import { IoLogoWindows } from "react-icons/io5";

const SwitchButtons = () => {

    const { isMac, setIsMac } = useContext(AppContext)

    return (
        <>
            <div className='btn-box'>
                <button className={`mac-btn ${(isMac) ? "active_os" : ""}`} onClick={() => setIsMac(true)}>
                    <img src={(isMac) ? Mac : appleBlack} alt="" />
                </button>
                <button className={`window-btn ${(!isMac) ? "active_os" : ""}`} onClick={() => setIsMac(false)}>
                    {isMac ? <img src={Windows} alt="" />
                        :
                        <IoLogoWindows color="white" fontSize={26} />
                    }
                </button>
            </div>
        </>
    )
}

export default SwitchButtons;