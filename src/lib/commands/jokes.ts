import type { Command } from '$lib/types/command';

const jokes = [
	{
		question: 'Why do programmers prefer dark mode?',
		answer: 'Because light attracts bugs.'
	},
	{
		question: 'Why do Java developers wear glasses?',
		answer: "Because they don't C#."
	},
	{
		question: 'A SQL query walks into a bar, walks up to two tables and asks:',
		answer: '"Can I join you?"'
	},
	{
		question: 'Why did the developer go broke?',
		answer: 'Because he used up all his cache.'
	},
	{
		question: 'Why did the computer go to the doctor?',
		answer: 'Because it had a virus.'
	},
	{
		question: 'Why do programmers hate nature?',
		answer: 'It has too many bugs.'
	},
	{
		question: 'Why did the Wi-Fi break up with the computer?',
		answer: 'Because they had no connection.'
	},
	{
		question: 'Why was the JavaScript developer sad?',
		answer: "Because he didn't Node how to Express himself."
	},
	{
		question: 'Why was the computer cold?',
		answer: 'Because it left its Windows open.'
	},
	{
		question: 'Why do programmers need coffee?',
		answer: 'Because without it, they can’t Java.'
	},
	{
		question: 'What is a programmer’s favourite snack?',
		answer: 'Cookies.'
	}
];

export const jokesCommand: Command = {
	name: 'jokes',
	description: 'Tell a random programming joke',
	execute: () => {
		const randomIndex = Math.floor(Math.random() * jokes.length);
		const randomJoke = jokes[randomIndex];

		return {
			type: 'joke',
			question: randomJoke.question,
			answer: randomJoke.answer
		};
	}
};
