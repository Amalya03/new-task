import Image from "next/image";
import Link from "next/link";
import Title from "../../titles/Title";
import Text from "../products/components/text/Text";

interface IContactCard {
    src: string,
    link: string,
    value: string,
    title: string,
}

const ContactUsCard = (props: IContactCard) => {
    const { src, link, value, title } = props

    return (
        <div className={`flex items-center gap-4 justify-center flex-wrap bg-slate-500 opacity-[0.5] shadow-xl w-[350px] rounded-xl h-[200px] p-3`}>
            <div className={`flex justify-start w-full flex-wrap gap-6`} >
                <div className={`flex items-center w-full justify-start`}>
                    <Image className={''} src={src} alt='' width={60} height={60} />
                </div>
                <div className={`flex items-center w-full flex-wrap gap-1`}>
                    <Text className="text-white text-left text-xl"  text={title}/>
                    <Link
                        className={`w-full  text-white no-underline text-xl`}
                        href={link}
                    >
                        {value}
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ContactUsCard