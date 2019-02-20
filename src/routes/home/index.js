import { h, Component } from 'preact';
import style from './style';

function Toast (props) {
	if (props.loading) {
		return (
			<div id="toast" class={style.toast}>{props.msg}</div>
		);
	}
}

export default class Home extends Component {
	state = {
		loading: true,
		metadata: [],
		msg: 'Loading data...'
	};

	async componentWillMount() {
		try {
			const response = await fetch('https://rest-in-nodejs.herokuapp.com/last-fm');
			const json = await response.json();
			this.setState({ loading: false, metadata: json, msg: 'Loaded data!' });
		}
		catch (err) {
			this.setState({ msg: 'error loading data' });
		}
	}

	render(props, state) {
		const list = state.metadata.map((item) => {
			
			return (
				<div class={style.upcomingContainer}>
					<img class={style.img} src={item.coverArt} alt={item.title} />
					<h4>{item.title}</h4>
				</div>
			);
		});

		return (
			<div class={style.home}>
				<h1>Home</h1>
				<div class={style.upcoming}>
					{list}
				</div>
				<Toast msg={state.msg} loading={state.loading} />
			</div>
		);
	}
}
