export default function Component() {
    return (
      <div>
        next13
      </div>
    )
  }

  type Props = {
    params: { id: string };
    searchParams: { [key: string]: string | string[] | undefined };
  };

  // next13/main?query=url
  export async function generateMetadata ({params, searchParams}: Props) {
    const {id} = params;

    return {
      title: id + searchParams.query
    }
  };   
  
  // https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#step-3-migrating-nexthead