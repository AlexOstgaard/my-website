import './Sports.css'

import { useTranslation } from "react-i18next"

function Sports() {

    const { t } = useTranslation()


    return (
        <div className="pageContent">
            <div className="pageBackground" id="sportsLeft"/>


            <div className="pageCenter">
                <h4>{t("maintenance")}</h4>
            </div>



            <div className="pageBackground" id="sportsRight" />
        </div>
    )
}

export default Sports