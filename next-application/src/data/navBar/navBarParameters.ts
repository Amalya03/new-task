
const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

export const data = [
  {
    name: 'ABOUT US',
    link: 'about'
  },
  {
    name: 'CONTACT US',
    link: '#contact'
  },
  {
    name: 'PROFILE',
    link: token ?'user-account' : ''
  },
]