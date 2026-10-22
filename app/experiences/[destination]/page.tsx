
type DestinationPageProps= {
    params: Promise<{destination: string}>
}

export default async function DestinationPage({params}: DestinationPageProps){
    const {destination} = await params;
    return <main>

        Yooo it is {destination}
    </main>
}