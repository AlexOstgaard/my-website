
import { useTranslation } from "react-i18next"

function Studies() {
    
    const { t } = useTranslation()
    
    
    return (
        <h1>{t("studies")}</h1>
    )
}

export default Studies