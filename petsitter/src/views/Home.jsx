import React, { useState } from "react";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.webp";
import slide3 from "../assets/slide3.jpg";

export default function Home() {
	return (
		<>
			<div className="container mb-5">
				<div
					id="carouselExampleFade"
					className="carousel slide carousel-fade mt-5 mb-5"
					data-bs-ride="carousel"
				>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img
								src={slide1}
								className="d-block w-100 imgSlider  "
								alt="..."
								height={"700px"}
								style={{
									borderRadius: "1rem 1rem 1rem 1rem",
								}}
							/>
							<div
								className="carousel-caption d-none d-md-block"
								style={{ backgroundColor: "rgb(32 30 30 / 55%)" }}
							>
								<h5>Need a dog walker?</h5>
								<p>
									We don't do ordinary dog walking we also incorporate play
									activities! Because every dog is different.
								</p>
							</div>
						</div>
						<div className="carousel-item">
							<img
								src={slide2}
								className="d-block w-100 imgSlider"
								alt="..."
								height={"700px"}
								style={{ borderRadius: "1rem 1rem 1rem 1rem" }}
							/>
							<div
								className="carousel-caption d-none d-md-block"
								style={{ backgroundColor: "rgb(32 30 30 / 55%)" }}
							>
								<h5>Atention</h5>
								<p>
									We take care of your dog with responsibility making sure he
									has the atention he deserves.
								</p>
							</div>
						</div>
						<div className="carousel-item">
							<img
								src={slide3}
								className="d-block w-100 imgSlider "
								alt="..."
								height={"700px"}
								style={{ borderRadius: "1rem 1rem 1rem 1rem" }}
							/>
							<div
								className="carousel-caption d-none d-md-block"
								style={{ backgroundColor: "rgb(32 30 30 / 55%)" }}
							>
								<h5> Happy and healthy</h5>
								<p>
									Keep your happy and healthy by giving them space to play,
									excercise and socialize with other dogs.
								</p>
							</div>
						</div>
					</div>
					<button
						className="carousel-control-prev"
						type="button"
						data-bs-target="#carouselExampleFade"
						data-bs-slide="prev"
					>
						<span
							className="carousel-control-prev-icon"
							aria-hidden="true"
						></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button
						className="carousel-control-next"
						type="button"
						data-bs-target="#carouselExampleFade"
						data-bs-slide="next"
					>
						<span
							className="carousel-control-next-icon"
							aria-hidden="true"
						></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>

				<section class="page-section" id="services">
					<div class="container">
						<div class="text-center">
							<h2 class="section-heading text-uppercase">Services</h2>
							<h3 class="section-subheading text-muted">
								Lorem ipsum dolor sit amet consectetur.
							</h3>
						</div>
						<div class="row text-center">
							<div class="col-md-4">
								<span class="fa-stack fa-4x">
									<i class="fas fa-circle fa-stack-2x text-primary"></i>
									<i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
								</span>
								<h4 class="my-3">Dog walker</h4>
								<p class="text-muted">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Minima maxime quam architecto quo inventore harum ex magni,
									dicta impedit.
								</p>
							</div>
							<div class="col-md-4">
								<span class="fa-stack fa-4x">
									<i class="fas fa-circle fa-stack-2x text-primary"></i>
									<i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
								</span>
								<h4 class="my-3">Training</h4>
								<p class="text-muted">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Minima maxime quam architecto quo inventore harum ex magni,
									dicta impedit.
								</p>
							</div>
							<div class="col-md-4">
								<span class="fa-stack fa-4x">
									<i class="fas fa-circle fa-stack-2x text-primary"></i>
									<i class="fas fa-lock fa-stack-1x fa-inverse"></i>
								</span>
								<h4 class="my-3">Travel in comfort </h4>
								<p class="text-muted">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Minima maxime quam architecto quo inventore harum ex magni,
									dicta impedit.
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
