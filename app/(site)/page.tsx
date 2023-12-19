import getSongs from '@/actions/getSongs';
import Header from '@/components/Header'
import ListItem from '@/components/ListItem'
import PageContent from './components/PageContent';

export const revalidate = 0;

export default async function Home() {

  const songs = await getSongs();


  return (
    <div className='bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto
    '>
      <Header>
        <div className='mb-2'>
          <h1 className='text-white text-3xl font-semibold'>
            Welcome Back
          </h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4'>
            <ListItem image="/images/liked.png" name="Liked Songs" href='liked' />

          </div>

        </div>
      </Header>
      <div className='mt-2 mb-7 px-6'>
        <div className='flex justify-between items-center'>
          <h1 className='text-white text-2xl font-semibold'>
            Newest Songs
          </h1>
        </div>
        <div>
          <PageContent songs={songs} />
        </div>
      </div>
    </div>
  )
}


/*
npm i react-icons
npm i tailwind-merge
supbase commands various from video

npm install @supabase/auth-helpers-nextjs
npm install @supabase/auth-helpers-react
npm install stripe
npm install @radix-ui/react-dialog
npm install zustand
npm install @supabase/auth-ui-react
npm install @supabase/auth-ui-shared
npm install react-hot-toast
npm install react-hook-form
npm install uniqid
npm install -D @types/uniqid
npm install query-string
npm install @radix-ui/react-slider
npm install use-sound
npm install react-spinners
npm install @stripe/stripe-js
npm install @supabase/supabase-js

*/
