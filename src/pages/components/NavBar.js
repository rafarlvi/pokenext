import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from "../../styles/NavBar.module.css"

export default function NavBar() {
	return (
		<nav className={styles.navbar}>
			<div className={styles.logo}>
				<Image src='/img/pokeball.png' width="30" height='30' alt='PokeNext' />
				<h1>PokeNext</h1>
			</div>
			<ul className={styles.link_items}>
				<li>
					<Link href='/' legacyBehavior>
						<a>Home</a>
					</Link>
				</li>
				<li>
					<Link href='/about' legacyBehavior>
						<a>About</a>
					</Link>
				</li>
			</ul>
		</nav>
	)
}
