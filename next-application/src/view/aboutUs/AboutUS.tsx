import Image from "next/image"
import Title from "@/src/components/titles/Title"

const AboutUs = () => {
    return (
        <div className="flex w-full justify-center flex-wrap p-8">
            <Title title="THE KEY OF YOUR SUCCESS" className="text-slate-500 !important" />
            <div className="flex p-10 gap-10 max-w-[1300px]">
                <Image src={'/assets/kingCode/kingCode.jpg'} alt="" width={200} height={200} className="w-full h-[400px] max-w-[600px]" />
                <div className="flex items-center">
                    <span className="text-center text-2xl">KinGCode is a custom software development company. We design and develop mobile and web applications for clients across the globe . Your goals are also our goals.Trust. Trust is a solid ground for successful collaboration.</span>
                </div>
            </div>
        </div>
    )
}

export default AboutUs