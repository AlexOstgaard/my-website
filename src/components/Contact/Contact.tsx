import './Contact.css'
import { useTranslation } from "react-i18next"

import profilePic from "../../assets/pictures/profile.jpeg"
import githubIcon from "../../assets/contactIcons/github.svg"
import linkedinIcon from "../../assets/contactIcons/linkedin.svg"
import instagramIcon from "../../assets/contactIcons/instagram.svg"
import emailIcon from "../../assets/contactIcons/email.svg"

function Contact() {
    
    const { t } = useTranslation()


    return (
        <div className="pageContent">
            <div className="pageBackground" id="contactLeft"/>

            
            <div className="pageCenter">

                <h1>{t("contact.header")}</h1>

                <div className='contactInfoContainer'>

                    <div className='profiles'>

                        <a href='https://github.com/AlexOstgaard'>
                            <img src={githubIcon} className='contactIcon'/>
                            <h3>AlexOstgaard</h3>
                        </a>

                        <a href='https://linkedin.com/in/alexander-ramm-østgaard-19a016306/'>
                            <img src={linkedinIcon} className='contactIcon'/>
                            <h3>Alexander Ramm Østgaard</h3>
                        
                        </a>

                        <a href='https://instagram.com/alexostgaard/'>
                            
                            <img src={instagramIcon} className='contactIcon'/>
                            <h3>alexostgaard</h3>
                        
                        </a>


                        <a href='mailto: alexostgaard@gmail.com'>
                            
                            <img src={emailIcon} className='contactIcon'/>
                            <h3>alexostgaard@gmail.com</h3>

                        </a>

                    </div>

                    <img className="profilePic" src={profilePic} />

                </div>

            </div>



            <div className="pageBackground" id="contactRight" />
        </div>
    )
}

export default Contact