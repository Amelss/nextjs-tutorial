import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return ( 
        <div>
            <nav>
                <div className="logo">
                    <Image src="/sweet.png" alt="logo" width={120} height={128} />
                </div>
                <ul>
                   <Link href={'/'}>Home</Link> 
                   <Link href={'/about'}>About</Link> 
                    <Link href={'/users'}>Users</Link> 
                </ul>
            </nav>
        </div>
     );
}
 
export default Navbar;