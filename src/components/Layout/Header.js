import React, { Fragment } from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/img/heroimg.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
	return (
		<Fragment>
			<header className={classes.header}>
				<h1>ReactMeals</h1>
				<HeaderCartButton onClick={props.onShowCart} />
			</header>
			<div className={classes["main-image"]}>
				<img src={mealsImage} alt='People sitting by table and eating.' />
			</div>
		</Fragment>
	);
};

export default Header;
