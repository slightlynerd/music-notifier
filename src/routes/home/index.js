import { h, Component } from 'preact';
import mdl from 'material-design-lite/material';
import { Dialog } from 'preact-mdl';
import Albumlist from '../../components/albumlist';
import Toast from '../../components/toast';
import style from './style';

class Home extends Component {

	state = {
		loading: false,
		// metadata: [],
		metadata: [
			{ title: 'I, The Mask',
				coverArt: 'https://lastfm-img2.akamaized.net/i/u/300x300/d5fc67f0812abf1b5b209420acc282aa.jpg',
				artist: 'In Flames',
				releaseDate: '28 February 2019'
			},
			{ title: 'placeholder',
				coverArt: 'https://lastfm-img2.akamaized.net/i/u/300x300/41421144e53f67a934a19b748b4a8c2b.jpg',
				artist: 'Hand Habits',
				releaseDate: '28 February 2019'
			},
			{ title: 'Shine A Light',
				coverArt: 'https://lastfm-img2.akamaized.net/i/u/300x300/a429533b2d4ce5c17370cc89e1bc1c35.jpg',
				artist: 'Bryan Adams',
				releaseDate: '28 February 2019'
			},
			{	title: 'Peace',
				coverArt: 'https://lastfm-img2.akamaized.net/i/u/300x300/8d8df7a23584d6d96a637c965d5051e0.jpg',
				artist: 'Demon Hunter',
				releaseDate: '28 February 2019'
			}
		],
		msg: 'Loading data...'
	};

	componentDidMount() {
		// fetch(this.props.URL)
		// 	.then(response => response.json())
		// 	.then(res => {
		// 		this.setState({ loading: false, metadata: res, msg: 'Loaded data!' });
		// 	})
		// 	.catch(_ => this.setState({ loading: false, msg: 'error loading data' }));
	}

	render(props, state) {

		return (
			<div class={style.home}>
				<h2>Coming Soon</h2>
				<Albumlist metadata={state.metadata} />
				<Toast msg={state.msg} loading={state.loading} />
			</div>
		);
	}
}

export default Home;
