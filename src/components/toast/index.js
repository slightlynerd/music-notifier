import { h } from 'preact';
import mdl from 'material-design-lite/material';
import { Spinner } from 'preact-mdl';
import style from './style';

function Toast (props) {
	if (props.msg === 'error loading data') {
		return (
			<div class={style.error}>
				<p>{props.msg}</p>
			</div>
		);
	}
	if (props.loading) {
		return (
			<div class={style.spinner}>
				<Spinner class={style['mdl-spinner']} active={props.loading} />
			</div>
		);
	}
}

export default Toast;