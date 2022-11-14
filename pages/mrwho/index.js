import Link from 'next/link';
import style from '../../styles/MrWho.module.css'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();

    return {
        props: { who: data }
    }
}

const mrwho = ({ who }) => {
    return (
        <div>
            <h1>Mr Who</h1>
            {who.map(w => (
                <Link href={'/mrwho/' + w.id} key={w.id}>
                    <div className={style.single}>
                        <h3>{w.name}</h3>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default mrwho;