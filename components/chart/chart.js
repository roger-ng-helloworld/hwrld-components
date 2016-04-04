import React, {Component} from 'react';
import ChartistGraph from 'react-chartist';
import styleable from 'react-styleable';
import coreStyles from '../../css/core.scss';
import css from './chart.scss';
import matchMedia from 'match-media';

@styleable(css)
export default class Chart extends Component {

    render() {
        const offset = {
            weather: {
                min: 2,
                max: 1
            },
            price: {
                min: 20,
                max: 10
            },
            popularity: {
                min: 2,
                max: 1
            },
        }

        var chartData = {
            labels: this.props.chart.items.map((val) => new Date(val.x).toDateString().substring(4,7).toUpperCase()),
            series: [
              this.props.chart.items.map((val) => val.y)
            ]
        };

        var chartOptions = {
            high: Math.max(...this.props.chart.items.map((val) => val.y)) + offset[this.props.options.content].max,
            low: Math.min(...this.props.chart.items.map((val) => val.y)) - offset[this.props.options.content].min,
            showArea: true,
            showLine: true,
            showPoint: true,
            fullWidth: true,
            axisX: {
                labelInterpolationFnc: function(value, index) {
                    return index % 2 === 0 ? value : '';
                }
            },
            axisY: {
                showLabel: false,
                offset: 30
            },
            chartPadding: {
                top: 40,
                right: 0,
                bottom: 0,
                left: 0
            },

            lineSmooth: false,
            height: 160

        };

        var chartType = 'Line'

        return (
      <div className={'hwrld ' + this.props.css['hwrld'] + ' ' + this.props.css[this.props.options.content] }>

        <div className={this.props.css.title}>{this.props.options.content}
        </div>

        <div className={this.props.css['y-axis']}>
            <div className={this.props.css['icon'] + ' ' + this.props.css['top-icon']}></div>
            <div className={this.props.css['icon'] + ' ' + this.props.css['bottom-icon']}></div>
        </div>   

        <ChartistGraph data={chartData} options={chartOptions} type={chartType} />
      </div>

     		
		);
	}
}