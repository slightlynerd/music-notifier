import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

function Albumlist (props) {
	return (
		<div class={style.album}>
			{props.metadata.map((item) => {
				return (
					<div class={style['album-container']}>
						<img class={style['album-image']} src={item.coverArt} alt={item.title} />
						<Link activeClassName={style.active} href={`/album/${item.artist}/${item.title}`}>
							<h4 class={style['album-header']}>{item.title}</h4>
						</Link>
						<p class={style['album-artist']}>{item.artist}</p>
						<p class={style['album-date']}>{item.releaseDate}</p>
					</div>
				);
			})}
		</div>
	);
}

export default Albumlist;