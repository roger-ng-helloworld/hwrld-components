import React, {Component} from 'react';
import styleable from 'react-styleable';
import coreStyles from '../../css/core.scss';
import css from './footer.scss';
import SearchSite from './search-site/search-site';


@styleable(css)
export default class Footer extends Component {   

	render() {
		return (
			<div className='hwrld'>
				<div className={this.props.css.hwrld}>
					<div className={this.props.css['main-nav']}>
						<a href="#" alt="">Hotel</a>
						<a href="#" alt="">Packages</a>
						<a href="#" alt="">Flights</a>
						<a href="#" alt="">Car hire</a>
						<a href="#" alt="">Deals</a>
						<a href="#" alt="">Cruises</a>
						<a href="#" alt="">Activities</a>
					</div>

					<div className={this.props.css['main-content']}>
						<div className={this.props.css.left}>
							<div className={this.props.css['inner-left']}>
								<div className={this.props.css['inner-title']}>Helloworld online</div>

								<ul>
									<li><a href="#" alt="">Online Booking Terms & Conditions</a></li>
									<li><a href="#" alt="">Hotel Price Promise</a></li>
									<li><a href="#" alt="">Terms of Use</a></li>
									<li><a href="#" alt="">Privacy Policy</a></li>
									<li><a href="#" alt="">Contact Us</a></li>
									<li><a href="#" alt="">Advertise With Us</a></li>
								</ul>

								<div className={this.props.css['inner-title']}>Payment accepted from</div>
								<div>
									<a href="#" alt="" className={this.props.css['visa'] + ' ' + this.props.css['third-party-icon']}></a>
									<a href="#" alt="" className={this.props.css['mastercard'] + ' ' + this.props.css['third-party-icon']}></a>
									<a href="#" alt="" className={this.props.css['american-express'] + ' ' + this.props.css['third-party-icon']}></a>
								</div>

							</div>
							<div className={this.props.css['inner-right']}>
								<div className={this.props.css['inner-title']}>helloworld in store</div>

								<ul>
									<li><a href="#" alt="">Customer Charter</a></li>
									<li><a href="#" alt="">Find a Store</a></li>
									<li><a href="#" alt="">In Store Experience</a></li>
									<li><a href="#" alt="">About Us</a></li>
									<li><a href="#" alt="">Who are helloworld</a></li>
									<li><a href="#" alt="">Investor Centre</a></li>
								</ul>

								<div className={this.props.css['inner-title']}>Member of</div>
								<div>
									<a href="#" alt="" className={this.props.css.iata + ' ' + this.props.css['third-party-icon']}></a>
									<a href="#" alt="" className={this.props.css.atas + ' ' + this.props.css['third-party-icon']}></a>
								</div>
							</div>

						</div>

						<div className={this.props.css.right}>
							<div className={this.props.css['inner-left']}>
								<div className={this.props.css['inner-title']}>Free app</div>
								<p className={this.props.css['app-download-text']}>Download our free app for up to 75% off hotels.</p>

								<a href="#" alt="" className={this.props.css.ios + ' ' + this.props.css['app-download-btn']}></a>

								<a href="#" alt="" className={this.props.css.android + ' ' + this.props.css['app-download-btn']}></a>
								

								<div className={this.props.css['inner-title']}>Secured by</div>
								<a href="#" alt="" className={this.props.css.norton}></a>
							</div>

							<div className={this.props.css['inner-right']}>
								<div className={this.props.css['inner-title']}>Awarded</div>
								<p className={this.props.css['app-download-text']}>Winner, Best Australian Travel Agency Group 2014.</p>
								<a href="#" alt="" className={this.props.css.afta}></a>

								<div className={this.props.css['inner-title']}>Search site</div>
								<SearchSite />
							</div>
						</div>
					</div>

					<div className={this.props.css['social-container']}>
						<a href="#" alt="" className={this.props.css.facebook + ' ' + this.props.css.social}></a>
						<a href="#" alt="" className={this.props.css.instagram + ' ' + this.props.css.social}></a>
						<a href="#" alt="" className={this.props.css.twitter + ' ' + this.props.css.social}></a>
						<a href="#" alt="" className={this.props.css.google + ' ' + this.props.css.social}></a>
						<a href="#" alt="" className={this.props.css.youtube + ' ' + this.props.css.social}></a>
					</div>

					<div className={this.props.css.disclaimer}>
						© 2015 Helloworld Limited. Stella Travel Services (Australia) Pty Limited (ABN 84 003 237 296) trading as helloworld online
					</div>

				</div>
			</div>
		);
	};
}