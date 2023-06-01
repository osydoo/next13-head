
export default function Page() {
    return (
      <div>
        default page
      </div>
    )
  }


  export async function generateMetadata() {
    return {
      title: 'NEXT13 title'
    }
  };
   
  
  // https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#step-3-migrating-nexthead