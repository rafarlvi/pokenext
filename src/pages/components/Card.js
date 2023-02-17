import Image from "next/image"
import Link from "next/Link"

import styles from "../../styles/Card.module.css"

export default function Card({ pokemon }) {
	return (
		<div className={styles.card}>
			<Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} width='150' height='150' alt={pokemon.name} />
			<p className={styles.id}>#{pokemon.id}</p>
			<h3 class={styles.title}>{pokemon.name}</h3>
			<Link href={`/pokemon/${pokemon.id}`} legacyBehavior>
				<a className={styles.btn}>Detalhes</a>
			</Link>
		</div>
	)
}
