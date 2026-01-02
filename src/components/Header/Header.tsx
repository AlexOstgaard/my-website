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
              to="/" 
              className={({isActive}) => isActive ? "headerLink active" : "headerLink"}
              id="homeButton"
            > 
                <img className="headerIcon" src={homeIcon} />
                <span>{t("header.home")}</span>
            </NavLink>


            <NavLink 
              to="/studies" 
              className={({isActive}) => isActive ? "headerLink active" : "headerLink"}
            >
                <img className="headerIcon" src={studyIcon} />
                <span>{t("header.studies")}</span>
            </NavLink>

            <NavLink 
              to="/sports" 
              className={({isActive}) => isActive ? "headerLink active" : "headerLink"}
            >
                <img className="headerIcon" src={sportIcon} />
                <span>{t("header.sports")}</span>
            </NavLink>


            <NavLink 
              to="/music" 
              className={({isActive}) => isActive ? "headerLink active" : "headerLink"}
            >
                <img className="headerIcon" src={musicIcon} />
                <span>{t("header.music")}</span>
            </NavLink>


            <NavLink 
              to="/contact" 
              className={({isActive}) => isActive ? "headerLink active" : "headerLink"}
            >
                <img  className="headerIcon" src={contactIcon} />
                <span>{t("header.contact")}</span>
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
