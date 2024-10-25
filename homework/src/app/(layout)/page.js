import Link from "next/link";

export default function MainLayoutPage() {
	return (
		<main>
			Main Page <Link href='/restaurants'>Рестораны</Link>
		</main>
	);
}
