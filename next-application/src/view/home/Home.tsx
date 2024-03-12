import Products from './products/Products'
import Title from '@/src/components/titles/Title'
import ContactUs from '../contactUs/ContactUs'
import Categories from '@/src/components/categories/Categories'

const HomePage = () => {
  return (
    <div className='flex gap-y-[50px] flex-wrap w-full'>
      <Categories />
      <ContactUs/>
      <div className='w-full' style={{ backgroundColor: '#f6f9fb' }}>
        <Title title='Bestsellers' subTitle='Choose a quality one' />
        <Products />
      </div>
    </div>
  )
}

export default HomePage