import { Metadata, ResolvingMetadata } from 'next';

/**
 * title 잘 바뀝니다.
 * @returns 
 */
export default function Page() {
    return (
      <div>
        default page
      </div>
    )
  }

  type Props = {
    params: { id: string };
    searchParams: { [key: string]: string | string[] | undefined };
  };

  export async function generateMetadata({params, searchParams}: Props) {
    return {
      title: 'NEXT13 title'
    }
  };
   
  
  // https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#step-3-migrating-nexthead