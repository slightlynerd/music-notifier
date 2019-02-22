import { h, Component } from 'preact';
import PropTypes from 'prop-types';
import mdl from 'material-design-lite/material';
import { Dialog } from 'preact-mdl';
import Toast from '../../components/toast';
import style from './style';

class Home extends Component {

	state = {
		loading: true,
		metadata: [],
		msg: 'Loading data...'
	};

	moreInfo = e => {
		// this.refs.dialog.showModal();
	};

	componentDidMount() {
		fetch(this.props.URL)
			.then(response => response.json())
			.then(res => {
				this.setState({ loading: false, metadata: res, msg: 'Loaded data!' });
			})
			.catch(_ => this.setState({ loading: false, msg: 'error loading data' }));
	}

	render(props, state) {
		const list = state.metadata.map((item) => {
			let obj = item;
			return (
				<div class={style['album-container']}>
					<img class={style['album-image']} src={obj.coverArt} alt={obj.title} />
					<a onClick={this.moreInfo}>
						<h4 class={style['album-header']}>{obj.title}</h4>
					</a>
					<p class={style['album-artist']}>{obj.artist}</p>
					<p class={style['album-date']}>{obj.releaseDate}</p>
				</div>
			);
		});

		return (
			<div class={style.home}>
				<h2>Coming Soon</h2>
				<Dialog />
				<div class={style.album}>
					{list}
				</div>
				<Toast msg={state.msg} loading={state.loading} />
			</div>
		);
	}
}

Home.propTypes = {
	URL: PropTypes.string
};

export default Home;
