import React, {Component} from 'react';
import styleable from 'react-styleable';
import css from './change-store.scss';
import { connect } from 'react-redux';
import { handleActivation, getKeyValue, getAgentDetailsFromPostcode, getAgent } from './change-store-action';
import { bindActionCreators } from 'redux';
import Autosuggest from 'react-autosuggest';

@styleable(css)
class ChangeStore extends Component {
  constructor() {
    super();

    this.onChange = this.onChange.bind(this);
    this.onSuggestionsUpdateRequested = this.onSuggestionsUpdateRequested.bind(this);
    this.getSuggestionValue = this.getSuggestionValue.bind(this);
    this.renderSuggestion = this.renderSuggestion.bind(this);
    this.onSuggestionSelected = this.onSuggestionSelected.bind(this);
  }

  activateChangeStore() {
    this.props.handleActivation(this.props.changeStoreActivationReducer);
  }

  onChange(event, { newValue, method }) {
    this.props.getKeyValue(newValue);
  }

  onSuggestionsUpdateRequested(value) {
    if (value.value.length > 3) {
      this.props.getAgentDetailsFromPostcode(this.props.options.postcodeDataUrl, {location: value.value});
    }
  }

  getSuggestionValue(suggestion) {
    this.props.getAgent(suggestion);
    return suggestion.storeName;
  }

  renderSuggestion(suggestion) {
    return (
      <div>
        <div className='suggest-store-name'>{suggestion.storeName}</div>
        <div>{suggestion.address}</div>
      </div>
    );
  }
  onSuggestionSelected(suggestion, evt) {
    this.activateChangeStore();
    this.props.getKeyValue('');
  }

  render() {
    const value = this.props.valueReducer,
      suggestions = this.props.suggestionsReducer,
      inputProps = {
        placeholder: 'Enter a suburb or postcode',
        value,
        onChange: this.onChange
      }

    return (
      <div className={this.props.css.hwrld + ' ' + this.props.css[this.props.changeStoreActivationReducer]}>
        <div className={this.props.css['btn-text']}
          onClick={()=>this.activateChangeStore()}
        >
          Change store <i className={this.props.css['arrow']}></i>
        </div>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsUpdateRequested={this.onSuggestionsUpdateRequested}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          onSuggestionSelected={this.onSuggestionSelected}
          inputProps={inputProps}
          focusInputOnSuggestionClick={false}
        />
        <div className={this.props.css['btn-change-agent']}></div>
      </div>
    );
  }
}

function mapStateToProps(state) {
	return {
    changeStoreActivationReducer: state.changeStoreActivationReducer,
    suggestionsReducer: state.suggestionsReducer,
    valueReducer: state.valueReducer
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
    handleActivation,
    getKeyValue,
		getAgentDetailsFromPostcode,
    getAgent
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeStore);
