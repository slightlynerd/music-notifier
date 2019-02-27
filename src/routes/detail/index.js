import { h, Component } from 'preact';
import TrackList from '../../components/tracklist';
import style from './style';

class Detail extends Component {

	state = {
		loading: true,
		imageUrl: '',
		metadata: [],
		msg: ''
	};

	componentDidMount() {
		const artist = this.props.artist.split(' ').join('+');
		const album = this.props.album.split(' ').join('+');
		fetch(`https://rest-in-node.herokuapp.com/last-fm/${artist}/${album}`)
			.then(response => response.json())
			.then(res => {
				this.setState({ loading: false, metadata: res, imageUrl: res[res.length - 1].image.replace('174s', '300x300'), msg: 'Loaded data!' });
			})
			.catch(_ => this.setState({ loading: false, msg: 'error loading data' }));
	}
	
	render({ artist, album }, { props, state }) {
		const heroStyle = {
			backgroundImage: 'url(' + this.state.imageUrl + ')',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover'
		};
		return (
			<div class={style.main}>
				<div style={heroStyle} class={style.hero}>
					<div class={style.heroP}>
						<h2>{album}</h2>
						<p>{artist}</p>
					</div>
				</div>
				<div class={style.body}>
					<h4>Tracklist</h4>
					<TrackList loading={this.state.loading} metadata={this.state.metadata} />
				</div>
			</div>
		);
	}
}

export default Detail;
