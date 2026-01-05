import './Music.css'
import { useTranslation } from "react-i18next"

function Music() {

    const { t } = useTranslation()

     
    return (
        <div className="pageContent">
            <div className="pageBackground" id="musicLeft"/>


            <div className="pageCenter">
                <h4>{t("maintenance")}</h4>
            </div>



            <div className="pageBackground" id="musicRight" />
        </div>
    )
}

export default Music