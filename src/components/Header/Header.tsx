import "./Header.css"

import homeIcon from "../../assets/headerIcons/home.svg"
import studyIcon from "../../assets/headerIcons/study.svg"
import sportIcon from "../../assets/headerIcons/sport.svg"
import musicIcon from "../../assets/headerIcons/music.svg"
import contactIcon from "../../assets/headerIcons/contact.svg"

import norwayIcon from "../../assets/headerIcons/languages/norway.svg"
import britainIcon from "../../assets/headerIcons/languages/britain.svg"

import { useTranslation } from "react-i18next"

import { NavLink } from "react-router-dom"


function Header() {

    const { i18n, t } = useTranslation();

    const changeLanguage = (lang: "no" | "en") => {
      i18n.changeLanguage(lang)
      localStorage.setItem("language", lang)
    }

    return (

        <div id="background">
        
            <NavLink 
              to="/my-website/" 
              className={({isActive}) => isActive ? "headerLink active" : "headerLink"}
            > 
                <img className="headerIcon" src={homeIcon} />
                {t("header.home")}
            </NavLink>


            <NavLink 
              to="/my-website/Studies" 
              className={({isActive}) => isActive ? "headerLink active" : "headerLink"}
            >
                <img className="headerIcon" src={studyIcon} />
                {t("header.studies")}
            </NavLink>

            <NavLink 
              to="/my-website/Sports" 
              className={({isActive}) => isActive ? "headerLink active" : "headerLink"}
            >
                <img className="headerIcon" src={sportIcon} />
                {t("header.sports")}
            </NavLink>


            <NavLink 
              to="/my-website/Music" 
              className={({isActive}) => isActive ? "headerLink active" : "headerLink"}
            >
                <img className="headerIcon" src={musicIcon} />
                {t("header.music")}
            </NavLink>


            <NavLink 
              to="/my-website/Contact" 
              className={({isActive}) => isActive ? "headerLink active" : "headerLink"}
            >
                <img  className="headerIcon" src={contactIcon} />
                {t("header.contact")}
            </NavLink>
                

            <div id="languages">
                <button 
                  className={i18n.language === "no" ? "active" : ""} 
                  onClick={() => changeLanguage("no")}
                >
                    <img src={norwayIcon} />
                </button>

                <button 
                  className={i18n.language === "en" ? "active" : ""}
                  onClick={() => changeLanguage("en")}
                >
                    <img src={britainIcon} />
                </button>
            </div>

        </div>
  )
}

export default Header
