
import { useTranslation } from "react-i18next"

function Sports() {

    const { t } = useTranslation()


    return (
        <h4>{t("maintenance")}</h4>
    )
}

export default Sports