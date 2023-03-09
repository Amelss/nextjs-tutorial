import Head from "next/head";
import styles from '../../styles/Users.module.css'
import Link from "next/link";

export const getStaticProps = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await res.json()

    return {
        props: { users: data}
    }
}

const Users = ({users}) => {
    return (
      <div>
        <Head>
          <title>Sweet Bite | Users </title>
          <meta name="keywords" content="sweet bite users" />
        </Head>
            <h1>All Users</h1>
            {users.map(user => (
                <Link href={`/users/${user.id}`} key={user.id}>
                    <div className={styles.single}>
                        <h3 >{user.name}</h3>
                    </div>
                        
                </Link>
            ))}
      </div>
    );
}
 
export default Users;