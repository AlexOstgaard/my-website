import './Contact.css'
import { useTranslation } from "react-i18next"

import profilePic from "../../assets/pictures/profile.jpeg"
import githubIcon from "../../assets/contactIcons/github.svg"
import linkedinIcon from "../../assets/contactIcons/linkedin.svg"
import instagramIcon from "../../assets/contactIcons/instagram.svg"
import emailIcon from "../../assets/contactIcons/email.svg"

function Contact() {
    
    const { t } = useTranslation()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); //Making sure site refreshes

        const form = event.currentTarget;
        const formData = new FormData(form);

        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            subject: formData.get("subject"),
            content: formData.get("content")
        };

        console.log(data);
    }


    return (
        <div className="pageContent">
            <div className="pageBackground" id="contactLeft"/>

            
            <div className="pageCenter">

                <h1>{t("contact.header")}</h1>

                <div className='contactInfoContainer'>

                    <div className='profiles'>

                        <a href='https://github.com/AlexOstgaard'>
                            <img src={githubIcon} className='contactIcon'/>
                            <h3>github.com/AlexOstgaard</h3>
                        </a>

                        <a href='https://linkedin.com/in/alexander-ramm-østgaard-19a016306/'>
                            <img src={linkedinIcon} className='contactIcon'/>
                            <h3>Alexander Ramm Østgaard</h3>
                        
                        </a>

                        <a href='https://instagram.com/alexostgaard/'>
                            
                            <img src={instagramIcon} className='contactIcon'/>
                            <h3>@alexostgaard</h3>
                        
                        </a>


                        <a href='mailto: alexostgaard@gmail.com'>
                            
                            <img src={emailIcon} className='contactIcon'/>
                            <h3>alexostgaard@gmail.com</h3>

                        </a>

                    </div>

                    <img className="profilePic" src={profilePic} />

                </div>

                <div className='contactFormContainer'>
                    <h3>{t("contact.mailingHeader")}</h3>
                    <br />
                    <form onSubmit={handleSubmit} >                          
                        <label>
                            <span>{t("contact.name")} <span className='optional'>({t("contact.optional")})</span>: </span>
                            <input type='text' name='name' />
                        </label>
                        <br />
                        <label>
                            <span>{t("contact.email")}: </span>
                            <input type='email' name='email' required />
                        </label>
                        <br />
                        <label>
                            <span>{t("contact.subject")} <span className="optional">({t("contact.optional")})</span>: </span>
                            <input type='text' name='subject' />
                        </label>
                        <br />
                        <label>
                            <span>{t("contact.message")}:</span>
                            <textarea name='message' rows={5} required />
                        </label>
                        <br />
                        <button type="submit">{t("contact.send")}</button>
                    </form>

                </div>

            </div>

            <div className="pageBackground" id="contactRight" />
        </div>
    )
}

export default Contact