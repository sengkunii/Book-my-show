'use strict';

// Movies Data List
const moviesArry = [
	{
		title: 'Agak Laen',
		year: 2024,
		ticketPrice: 40000,
		posterURL:
			'./images/1.jpeg',
	},
	{
		title: 'Hitman',
		year: 2024,
		ticketPrice: 40000,
		posterURL:
			'./images/2.jpeg',
	},
	{
		title: 'Kingdom Planet Apes',
		ticketPrice: 40000,
		posterURL:
			'./images/3.jpeg',
	},
	{
		title: 'Boneyard',
		year: 2024,
		ticketPrice: 400000,
		posterURL:
			'./images/4.jpeg',
	},
	{
		title: 'Fighter',
		year: 2024,
		ticketPrice: 40000,
		posterURL:
			'./images/5.jpeg',
	},
	{
		title: 'Escape',
		year: 2024,
		ticketPrice: 40000,
		posterURL:
			'./images/6.jpeg',
	},
	{
		title: 'Crow',
		year: 2024,
		ticketPrice: 40000,
		posterURL: './images/7.jpeg',
	},
	{
		title: 'Captain Marvel',
		year: 2024,
		ticketPrice: 45000,
		posterURL:
			'./images/8.jpeg',
	},
	{
		title: 'Art of Eight Limbs',
		year: 2024,
		ticketPrice: 45000,
		posterURL:
			'./images/9.jpeg',
	},
	{
		title: 'Godzila Vs Kong',
		year: 2024,
		ticketPrice: 45000,
		posterURL:
			'./images/10.jpeg',
	},
	{
		title: 'Lights Out',
		year: 2024,
		ticketPrice: 45000,
		posterURL:
			'./images/11.jpeg',
	},
	{
		title: 'Captain Amerika',
		year: 2019,
		ticketPrice: 45000,
		posterURL:
			'./images/12.jpeg',
	},
	{
		title: 'Fall Guy',
		year: 2024,
		ticketPrice: 45000,
		posterURL:
			'./images/13.jpeg',
	},
	{
		title: 'Amaran',
		year: 2024,
		ticketPrice: 40000,
		posterURL:
			'./images/14.jpeg',
	},
	{
		title: 'Damaged',
		year: 2018,
		ticketPrice: 45000,
		posterURL:
			'./images/15.jpeg',
	},
	{
		title: 'Boku no Hero Academia',
		year: 2012,
		ticketPrice: 45000,
		posterURL:
			'./images/16.jpg',
	},
	{
		title: 'Conan',
		year: 2009,
		ticketPrice: 40000,
		posterURL:
			'./images/17.jpg',
	},
	{
		title: 'Despicable me',
		year: 2024,
		ticketPrice: 40000,
		posterURL:
			'./images/18.jpg',
	},
	{
		title: 'Dragonball Z',
		year: 2019,
		ticketPrice: 40000,
		posterURL:
			'./images/19.jpg',
	},
	{
		title: 'Conan : Detective',
		year: 2024,
		ticketPrice: 40000,
		posterURL:
			'./images/20.jpg',
	},
	{
		title: 'Top Gun America',
		year: 2024,
		ticketPrice: 40000,
		posterURL:
			'./images/21.jpg',
	},
	{
		title: 'IF',
		year: 2024,
		ticketPrice: 49000,
		posterURL:
			'./images/22.jpg',
	},
	{
		title: 'One Piece : Kaido',
		year: 2024,
		ticketPrice: 45000,
		posterURL:
			'./images/23.jpeg',
	},
	{
		title: 'Naruto : The Last Movie',
		year: 2024,
		ticketPrice: 40000,
		posterURL:
			'./images/24.jpg',
	},
	{
		title: 'One Piece : The RED',
		year: 2024,
		ticketPrice: 40000,
		posterURL:
			'./images/25.jpg',
	},
	{
		title: 'Bleach The Movie',
		year: 2020,
		ticketPrice: 40000,
		posterURL:
			'./images/26.jpg',
	},
	{
		title: 'Rubikon',
		year: 2024,
		ticketPrice: 40000,
		posterURL:
			'https://www.torrentbd.com/posters/TniRZHKO0nZv09JCa8RLZQYY13829262.jpg',
	},
	{
		title: 'Into the Deep',
		year: 2024,
		ticketPrice: 40000,
		posterURL:
			'https://www.torrentbd.com/posters/zZnz5m2SkIqmwjuRjgwMCAYY11005128.jpg',
	},
	{
		title: 'Take the Night',
		year: 2024,
		ticketPrice: 40000,
		posterURL:
			'https://www.torrentbd.com/posters/Ci0Z2AARW9I8CPIn6jev4wYY10680838.jpg',
	},
	{
		title: 'Monstrous',
		year: 2024,
		ticketPrice: 40000,
		posterURL:
			'https://m.media-amazon.com/images/M/MV5BNmJhZDJkMGEtYzQxMC00MDA0LTk4NWItMjljNDRjNTJmNjY1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
	},
	{
		title: 'Little Ukraine',
		year: 2024,
		ticketPrice: 40000,
		posterURL:
			'https://www.torrentbd.com/posters/2QuXs4NbZNZ5XhjOJlyv2QYY11511518.jpg',
	},
	{
		title: 'Cadaver',
		year: 2024,
		ticketPrice: 45000,
		posterURL:
			'https://www.torrentbd.com/posters/uSjfX4CobqC3o0LZ7FDNiQYY11102262.jpg',
	},
	{
		title: "Pil's Adventures",
		year: 2024,
		ticketPrice: 45000,
		posterURL:
			'https://www.torrentbd.com/posters/RMg470prsaRlrM6OzzLonQYY15091284.jpg',
	},
	{
		title: 'The Art of Passion',
		year: 2024,
		ticketPrice: 45000,
		posterURL:
			'https://www.torrentbd.com/posters/kJ8XyJDdxZZ6Pe0kqGmwfAYY19380876.jpg',
	},
	{
		title: 'Prey',
		year: 2024,
		ticketPrice: 45000,
		posterURL:
			'https://www.torrentbd.com/posters/DegyyZ5ZNP7LoOiVvnoN1AYY11866324.jpg',
	},
	{
		title: 'Luck',
		year: 2024,
		ticketPrice: 45000,
		posterURL:
			'https://www.torrentbd.com/posters/5qzrfqkStIP3flwZ4ihYGQYY7214954.jpg',
	},
	{
		title: 'Carter',
		year: 2024,
		ticketPrice: 45000,
		posterURL:
			'https://www.torrentbd.com/posters/6TxRWSmE3HIDvnGZ0pS1ZAYY21237030.jpg',
	},
	{
		title: 'Carma',
		year: 2024,
		ticketPrice: 45000,
		posterURL:
			'https://www.torrentbd.com/posters/CjLfdksflPNI4aqNFf5SFAYY14992864.jpg',
	},
	{
		title: 'The Moderator',
		year: 2024,
		ticketPrice: 45000,
		posterURL:
			'https://www.torrentbd.com/posters/e2xU0RqLZ4LVuoD3Nj4XHwYY12810902.jpg',
	},
	{
		title: 'The Princess',
		year: 2024,
		ticketPrice: 45000,
		posterURL:
			'https://www.torrentbd.com/posters/ARNOJg3bwASSfJ7cCveoKAYY13406136.jpg',
	},
	{
		title: 'Revealer',
		year: 2024,
		ticketPrice: 45000,
		posterURL:
			'https://www.torrentbd.com/posters/b4mgPbm1On6r6lS5zfLowAYY14661252.jpg',
	},
	{
		title: 'Anchor',
		year: 2024,
		ticketPrice: 45000,
		posterURL:
			'https://www.torrentbd.com/posters/VGEM3CadFzZPTbGwUDVIrwYY19245482.jpg',
	},
	{
		title: 'The Witch: Part 2',
		year: 2024,
		ticketPrice: 45000,
		posterURL:
			'https://www.torrentbd.com/posters/boHrz7AZFY4N6SQknw2ZdQYY13721828.jpg',
	},
	{
		title: 'Vikram',
		year: 2024,
		ticketPrice: 45000,
		posterURL:
			'https://www.torrentbd.com/posters/idJqYus6zjdGAoERtKkLAAYY9179430.jpg',
	},
];

//Display Movies From Movie list Data
function displayMovies() {
	const moviesElement = document.querySelector('.movies');
	for (let i = 0; i < moviesArry.length; i++) {
		const movieElement = document.createElement('div');
		movieElement.classList.add(
			'movie',
			'card',
			'p-0',
			'col',
			'shadow',
			'border-0',
			'rounded-3'
		);
		movieElement.innerHTML = `
            <div class="movie-poster">
							<img src="${moviesArry[i].posterURL}" />
						</div>
						<div class="card-body">
							<h5 class="card-title fw-bold">
							${moviesArry[i].title}(${moviesArry[i].year})
							</h5>
							<h5 class="text-danger fw-bold price"> Rp. ${moviesArry[i].ticketPrice}</h5>
							<button class="btn btn-dark book-ticket fw-bold">
								Book Ticket
							</button>
						</div>`;
		moviesElement.append(movieElement);
	}
}
displayMovies();

//Display Modal
function displayModals() {
	const bookTicketBtn = document.querySelectorAll('.book-ticket');
	const modalWindow = document.querySelector('.modal-window');
	for (let i = 0; i < bookTicketBtn.length; i++) {
		bookTicketBtn[i].addEventListener('click', function () {
			for (let j = 0; j < moviesArry.length; j++) {
				if (i === j) {
					const movieTitle = moviesArry[j].title;
					const ticketPrice = moviesArry[j].ticketPrice;
					const movieYear = moviesArry[j].year;
					const movieVat = (ticketPrice * 7) / 100;
					const subtTotal = movieVat + ticketPrice;
					// showing modal window
					modalWindow.style.opacity = '1';
					modalWindow.style.transform =
						'translate(-50%, -50%) scale(1)';
					//Modal Showing
					modalWindow.innerHTML = `
        <span class="close-btn">❌</span>
				<h2 class="fw-bold mt-3">${movieTitle} (${movieYear})</h2>
				<h5><strong>Price:</strong> Rp. ${ticketPrice} </h5>
				<h5><strong>Pajak:</strong> Rp. ${movieVat} </h5>
				<h3><strong>Subtotal:</strong> Rp. ${subtTotal} </h3>
				<button class="btn btn-danger fw-bold mt-4 buy-now">
					Buy Now
				</button>`;
					//Modal Hiding
					const modalCloseBtn = document.querySelector('.close-btn');
					modalCloseBtn.addEventListener('click', function () {
						modalWindow.style.opacity = '0';
						modalWindow.style.transform =
							'translate(-50%, -50%) scale(0)';
					});
					//Purchase Modal Showing
					const purchaseModalWindow = document.querySelector(
						'.purchase-modal-window'
					);
				}
			}
		});
	}
}
displayModals();
