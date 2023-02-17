import styles from "../styles/Home.module.css"

import Image from "next/image"

import Card from "./components/Card"

export async function getStaticProps(context) {

  const maxPokemons = 251
  const api = 'https://pokeapi.co/api/v2/pokemon'

  const res = await fetch(`${api}/?limit=${maxPokemons}`)

  const data = await res.json();

  data.results.forEach((item, index) => {
    item.id = index + 1
  })

  return {
    props: {
      pokemons: data.results
    }
  }

}

export default function Home({ pokemons }) {
  return (
    <div>
      <div className={styles.title_container}>
        <h1 className={styles.title}>Poke<span>Next</span></h1>
        <Image src="/img/pokeball.png" width='50' height="50" alt='pokenext' />
      </div>
      <div className={styles.pokemon_container}>
        {
          pokemons.map((pokemon) => {
            return <Card pokemon={pokemon} key={pokemon.id} />
          })
        }
      </div>
    </div>
  )
}
