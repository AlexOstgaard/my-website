import './Contact.css'
import { useTranslation } from "react-i18next"

function Contact() {
    
    const { t } = useTranslation()


    return (
        <div className="pageContent">
            <div className="pageBackground" id="contactLeft"/>


            <div className="pageCenter">
                <h4>{t("maintenance")}</h4>
            </div>



            <div className="pageBackground" id="contactRight" />
        </div>
    )
}

export default Contact