import { h } from 'preact';
import mdl from 'material-design-lite/material';
import { Spinner } from 'preact-mdl';
import style from './style';

function TrackList (props) {
	if (props.loading) {
		return (
			<div class={style.spinner}>
				<Spinner class={style['mdl-spinner']} active={props.loading} />
			</div>
		);
	}
	if (!props.loading) {
		return (
			<ul class={style.main}>
				{props.metadata.map(item => {
					return (
						<li><span>{item.trackName}</span><span>{item.trackDuration}</span></li>
					);
				})}
			</ul>
		);
	}
}

export default TrackList;