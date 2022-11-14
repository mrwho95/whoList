export const getStaticPaths = async () => {
    // fetch data first
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    const paths = data.map(v => {
        return {
            params: { id: v.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    console.log('context', context)
    const id = context.params.id
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    const data = await res.json()
    console.log('data',data)
    return {
        props: { who: data }
    }
}

const Details = ({ who }) => {
    return (
        <div>
            <h1>{who.name}</h1>
            <p>{who.email}</p>
            <p>{who.website}</p>
            <p>{who?.address.city}</p>
        </div>
    );
}

export default Details;