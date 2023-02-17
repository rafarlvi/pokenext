import React from 'react'
import Image from 'next/image'

import styles from '../styles/About.module.css'

export default function
	About() {
	return (
		<div className={styles.about}>
			<h1>Sobre o projeto</h1>
			<p>Essa é uma pokedex feita com o Next.js, esse é o meu primeiro projeto feito com ele. Next.js é uma estrutura da web de desenvolvimento front-end React de código aberto criada por Vercel que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para aplicativos da web baseados em React. É uma tecnologia muito útil para melhorar o seo e a performance de sites grandes feitos em React.</p>
			<Image src='/img/charizard.png' width='300' height='300' alt='charizard' />
		</div>
	)
}
