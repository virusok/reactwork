import Link from "next/link";

export default function DishesPage() {
	return (
		<main>
			Не выбраны меню. Вернитесь в ресторан.
			<br /> <Link href='/restaurants'>Рестораны</Link>
		</main>
	);
}
