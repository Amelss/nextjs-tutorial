import Link from "next/link";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>Ooopppsss...</h1>
            <h2>This page doesn't exist</h2>
           <Link href={'/'}><button className="nf-btn">Go Back Home</button></Link> 
            
        </div>
     );
}
 
export default NotFound;