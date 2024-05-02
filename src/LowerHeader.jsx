import React from "react";
import "./styles.scss";

const LowerHeader = () => {
	return (
		<nav className="lowerNav">
			<nav className="lowerHeader">
                <div className="nav-links">

                
				<img
					className="logo"
					alt="White Sparrow Logo"
					src="/Icons - Images/img-SparrowElectric-Logo-White.svg"
				/>
				<a> How We Help </a>
				<a> What We Offer </a>
				<a> Financial Help Center </a>
				<a> Why Sparrow Solar </a>
				<button className="quoteBtn">
					Request a Quote
					<img
						className="rightArrow"
						src="/Icons - Images/img-icon-ArrowRight.svg"
					/>
				</button>
                </div>
				<div className="popup">
					<img src="/Icons - Images/img-icon-Lightning.svg" />
					<p>Give us a call today and we will waive all financing fees.</p>
					<a className="underline" href="">
						{" "}
						See Details{" "}
					</a>
				</div>
                <div className="nav-heading">

				<h1>Are You Ready To Cut Your Energy Bill?</h1>
				<p>
					Sparrow Electric helps homeowners from coast to coast with the best
					solar financing options.
				</p>
                </div>
			</nav>
		</nav>
	);
};

export default LowerHeader;
