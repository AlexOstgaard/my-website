import "./Studies.css"

import { useTranslation } from "react-i18next"

function Studies() {
    
    const { t } = useTranslation()
    
    
    return (
        <div className="pageContent">
            <div className="pageBackground" id="studiesLeft"/>


            <div className="pageCenter">
                <h4>{t("maintenance")}</h4>
            </div>



            <div className="pageBackground" id="studiesRight" />
        </div>
    )
}

export default Studies