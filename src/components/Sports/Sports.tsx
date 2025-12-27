
import { useTranslation } from "react-i18next"

function Sports() {

    const { t } = useTranslation()


    return (
        <h1>{t("sports")}</h1>
    )
}

export default Sports