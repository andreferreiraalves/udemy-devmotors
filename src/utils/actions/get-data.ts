
export async function getHomeData() {
    try {
        const res = await fetch(`${process.env.NEX_PUBLIC_API_URL}/objects/6946e67d8e077d184f351276?pretty=true&read_key=${process.env.READ_KEY}&props=slug,title,metadata,type`)

        if (!res.ok)
            throw new Error('Failed to fetch data')

        return res.json();
    }
    catch(err) {
        throw new Error('Failed to fetch data')
    }
}