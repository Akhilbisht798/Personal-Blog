
export async function getData() { 
    const res = await fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=" + process.env.API_KEY) 
    const data = await res.json()
    return data
}

export default async function Blogs() {
    const data = await getData()
    console.log(data)
    return (
        <div>
            Hi, I am BLog
        </div>
    )
}
