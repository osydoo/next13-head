
export default function Page() {
    return (
      <div>
        default page
      </div>
    )
  }

  export async function generateMetadata () {
    const data = await getData();
    
    return {
      title: data
    }
  };

  const getData = () => new Promise((resolve) => resolve('SSR-DYNAMIC'));
   
  
  // https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#step-3-migrating-nexthead