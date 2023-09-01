export const runtime = 'edge';

type PageProps = { params: { name: string } };

export default async function Page({ params }: PageProps) {
    const decodedUsername = decodeURIComponent(params.name);

    return (
      <div>
        <h2>Welcome {decodedUsername}</h2>
      </div>
    );
  }