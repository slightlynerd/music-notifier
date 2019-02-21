import { h } from 'preact';
import { Link } from 'preact-router/match';
import mdl from 'material-design-lite/material';
import { Icon } from 'preact-mdl';
import style from './style';

const Header = () => (
	<header class={style.header}>
		<h1>Muzify</h1>
		<nav>
			<Link activeClassName={style.active} href="/">
				<Icon icon="home" />
				<span>Home</span>
			</Link>
			<Link activeClassName={style.active} href="/profile">
				<Icon icon="bookmark" />
				<span>Bookmarks</span>
			</Link>
			<Link activeClassName={style.active} href="/profile">
				<Icon icon="search" />
				<span>Search</span>
			</Link>
		</nav>
	</header>
);

export default Header;
