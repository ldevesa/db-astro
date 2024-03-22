import { db, User, Category, Todo } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(User).values([
		{
			id: "sof@fox888",
			email: "pepe@gmail.com",
			username: "Pepe"
		},
		{
			id: "sof@fox999",
			email: "susi@gmail.com",
			username: "Susi"
		}
	]);

	await db.insert(Category).values([
		{
			id: 'ppdf',
			label: 'Software'
		},
		{
			id: 'kflg',
			label: 'Marketing'
		}
	]);

	await db.insert(Todo).values([
		{
			id: 'ggtt2',
			title: 'Crear función de fecha',
			description: 'Crear funcion que adapte las fechas',
			category_id: 'kflg',
			user_id: 'sof@fox888'
		},
		{
			id: 'ggtt3',
			title: 'Crear anuncio',
			description: 'Crear anuncio producto',
			category_id: 'ppdf',
			user_id: 'sof@fox999'
		}
	])
}
