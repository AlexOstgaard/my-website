import "./Home.css"

import wideProfile from "../../assets/pictures/wide.jpeg"


import { useTranslation } from "react-i18next"

function Home() {

    const { t } = useTranslation()


    return (
        <div id="homeContainer">
            <br />
            <img src={wideProfile} alt="Mitt bilde" id="wideProfile" />
            <h1 className="accent">{t("home.welcome")}</h1>
            <p>
                {t("home.welcomeParagraph")} 
                <span className="accent">{t("home.someInterests")}</span>
                <br />
                &rarr; {t("home.interests")}
                <br />
                &rarr; {t("home.pics")}
                <br />
                &rarr; {t("home.experience")}
                <br />
                &rarr; {t("home.api")}
                <br />
                <br />
                {t("home.conclusion")}
                <br />
                <br />
                <i>{t("home.language")}</i>
            </p>
        </div>
    )
}

export default Home