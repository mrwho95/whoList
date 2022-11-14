import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                {/* <h1>MrWho List</h1> */}
                <Image src ="/who.jpg" width={128} height={77}/>
            </div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/mrwho">MrWho Listing</Link>
        </nav>
    )
} 

export default Navbar