
import { useTranslation } from "react-i18next"

function Music() {

    const { t } = useTranslation()

     
    return (
        <h1>{t("music")}</h1>
    )
}

export default Music