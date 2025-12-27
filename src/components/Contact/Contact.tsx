
import { useTranslation } from "react-i18next"

function Contact() {
    
    const { t } = useTranslation()


    return (
        <h4>{t("maintenance")}</h4>
    )
}

export default Contact