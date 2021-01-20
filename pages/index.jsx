import Head from 'next/head';
import Link from 'next/link';
import style from '../styles/index.module.css';
import Typed from '../components/typed';

export default function Home() {
	return (
		<>
			<Head>
				<link rel='icon' href='/favicon.ico' />
				<title>Bespoke Website Design</title>
			</Head>
			<main className={style.main}>
				<nav className={style.nav}>
					<p>Logo</p>
					<p>Brand Name</p>
					<ul>
						<li>
							<Link href=''>
								<a>Home</a>
							</Link>
						</li>
						<li>
							<Link href=''>
								<a>Portfolio</a>
							</Link>
						</li>
						<li>
							<Link href=''>
								<a>Contact</a>
							</Link>
						</li>
					</ul>
				</nav>
				<section className={style.box}>
					<div className={style.left}>
						<p>Balanced</p>
						<p>Inovative</p>
						<Typed
							words={['Matimilian', 'Modern', 'Responsive', 'Impressive', 'Unique']}
							textInsertion
						/>
						<p>Connected</p>
						<p>Bespoke</p>
					</div>
					<h1>Design</h1>
				</section>
			</main>
		</>
	);
}
