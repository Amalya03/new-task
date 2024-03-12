import HomePage from '@/src/view/home/Home';

// import type { InferGetStaticPropsType, GetStaticProps } from 'next'
 
// type Repo = {
//   name: string
//   stargazers_count: number
// }
 
// export const getStaticProps = (async (context) => {
//   const res = await axios('https://api.github.com/repos/vercel/next.js')
//   const repo = await res.json()
//   return { props: { repo } }
// }) satisfies GetStaticProps<{
//   repo: Repo
// }>
 
export default function Home(
//   {
//   repo,
// }: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <HomePage />
  )
}
