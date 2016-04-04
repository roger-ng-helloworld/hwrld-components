import React, {Component} from 'react';
import { GoogleMapLoader, GoogleMap, InfoWindow, Marker } from 'react-google-maps';
import styleable from 'react-styleable';
import coreStyles from '../../css/core.scss';
import css from './hotel-map.scss';
import StarRating from '../star-rating/star-rating';


@styleable(css)
export default class HotelMap extends Component {
    constructor(prop) {
        super(prop);
        this.state = {};
        this.state.center = prop.mapInfo.general.center;
        this.state.zoom = prop.mapInfo.general.zoom;
        this.state.markers = prop.mapInfo.items;
    }

    handleMarkerClick(marker) {
        marker.showInfo = true;
        this.setState(this.state);
    }
  
    handleMarkerClose(marker) {
        marker.showInfo = false;
        this.setState(this.state);
    }
  
    renderInfoWindow(ref, marker) {
         return (
            <InfoWindow 
                key={`${ref}_info_window`}
                onCloseclick={this.handleMarkerClose.bind(this, marker)} > 
                <div className={this.props.css['info-window']}>
                    <a href={marker.cta} className={this.props.css.cta}></a>               
                    <div>
                        <div className={this.props.css['img-panel']}>   
                            <img src={marker.img} alt={marker.title} />
                        </div>  
                    </div>
                    <div className={this.props.css.desc}>
                        <div className={this.props.css.title}>{marker.title}</div>
                        <div>
                            <StarRating rating={marker.rating} />
                        </div>           
                    </div>  
                    <div className={this.props.css['price-container']}>
                        <div className={this.props.css['arrow-panel']}>
                            <i></i>
                        </div>
                        <div className={this.props.css['price-panel']}>
                            <div className={this.props.css['top-aggregator']}>{marker.price.topAggregator}</div>
                            <div className={this.props.css.price}>${marker.price.price}*</div>
                            <div className={this.props.css['bottom-aggregator']}>{marker.price.bottomAggregator}</div>
                        </div>
                        
                    </div>
                </div>
            </InfoWindow>      
        );    
    }

    render() {
        return (      
            <GoogleMapLoader
                containerElement={
                    <div 
                        {...this.props}
                        className={'hwrld ' + this.props.css['hwrld']}>
                    </div>
                }
                googleMapElement={
                    <GoogleMap 
                        center={this.state.center}
                        defaultZoom={this.state.zoom}
                        ref='map'>
                        
                        {this.state.markers.map((marker, index) => {
                            const ref = `marker_${index}`;
                            let image = {
                                url: '/l/Images/hwrld-widget/helloworld-marker.png',
                                size: new google.maps.Size(19, 23),
                                origin: new google.maps.Point(0,0),
                                anchor: new google.maps.Point(9, 11)
                                },
                                shape = {
                                    coords: [0, 0, 0, 23, 19, 23, 19 , 0],
                                    type: 'poly'
                                };

                            return ( 
                                <Marker
                                    icon={image}
                                    shape={shape}
                                    key={index}
                                    ref={ref}
                                    position={marker.position}
                                    onClick={this.handleMarkerClick.bind(this, marker)} 
                                    animation={google.maps.Animation.DROP}>    
                                    {}
                                    {marker.showInfo ? this.renderInfoWindow(ref, marker):null}

                                </Marker>
                            );                
                        })}          
                    </GoogleMap>
                }
      
            />         
        );
    }
}