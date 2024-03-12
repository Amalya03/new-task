import Title from "@/src/components/titles/Title"
import { EMAIL, PHONENUMBER } from "@/src/constants/Constants"
import ContactUsCard from "@/src/components/card/contactUs/ContactUsCard"

const ContactUs = () => {
    const value = [EMAIL, PHONENUMBER]
const data = { 'Email':`mailto:${EMAIL}`, 'Phone': `tel:${PHONENUMBER}`,}

    return (
        <div className="w-full flex justify-center gap-8 flex-wrap">
            <Title subTitle="HAVE QUESTIONS? GET IN TOUCH" title="HAPPY TO HELP YOU"/>
            {Object.keys(data).map((item, index) => {
                return (
                    <div key={item} id='contact' className="justify-center flex">
                        {/* @ts-ignore */}
                        <ContactUsCard src={`/assets/contacts/contact${item}.svg`} link={data[item]} value={value[index]} title={item}/>
                    </div>
                )

            })}
        </div>
    )
}

export default ContactUs