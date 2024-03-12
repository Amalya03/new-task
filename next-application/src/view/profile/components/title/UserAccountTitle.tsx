import Title from "@/src/components/titles/Title"

const UserAccountTitle = () => {
    return (
        <div className='flex flex-wrap max-w-2xl justify-start w-full'>
        <Title title="My Account" className="text-left" />
        <div className='w-full hover:cursor-pointer' style={{ borderBottom: '2px solid #64748B' }} />
    </div>
    )
}

export default UserAccountTitle