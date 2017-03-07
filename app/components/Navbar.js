import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { filterByBrew } from 'APP/app/reducers/products';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterType: '',
      filterName: '',
    };
    this.onBrewTypeChange = this.onBrewTypeChange.bind(this);
    this.onFlavorChange = this.onFlavorChange.bind(this);
    this.onOriginChange = this.onOriginChange.bind(this);
    this.onBreweryChange = this.onBreweryChange.bind(this);
  }

  onBrewTypeChange(evt) {
    evt.persist();
    this.setState({
      filterType: 'brewType',
      filterName: evt.target.value});
  }

  onFlavorChange(evt) {
    evt.persist();
    this.setState({
      filterType: 'flavor',
      filterName: evt.target.value});
  }

  onOriginChange(evt) {
    this.setState({
      filterType: 'state',
      filterName: evt.target.value});
  }

    onBreweryChange(evt) {
    evt.persist();
    this.setState({
      filterType: 'brewery',
      filterName: evt.target.value});
  }
//create setState functions to correspond with selected filter option

  render () {

    const filterByBrew = this.props.filterByBrew;

    return (
      <div className="row pad10 nav">
        {/* <form> how do we want to have these work options or something else*/}
          <div className="col-sm-12 col-lg-2">
            <select onChange={this.onBrewTypeChange}className="form-control brown btxt">
              <option>Brew Type</option>
              {this.props.brews.map(brew => (
                <option key={brew.id}>{brew.name}</option>))
              }
            </select>
          </div>
          <div className="col-sm-12 col-lg-2">
            <select onChange={this.onFlavorChange} className="form-control brown btxt">
            <option>Flavors</option>
              {this.props.flavors.map(flavor => (
                <option key={flavor.id}>{flavor.name}</option>))
              }
            </select>
          </div>
          <div className="col-sm-12 col-lg-2">
            <select onChange={this.onOriginChange} className="form-control brown btxt">
              <option>Origins</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="col-sm-12 col-lg-2">
            <select onChange={this.onBreweryChange} className="form-control brown btxt">
              <option>Brewery</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="col-sm-12 col-lg-2">
            <button onClick={evt => {
              evt.preventDefault();
              filterByBrew(this.props.allProducts, this.state.filterName)}}><span className="glyphicon glyphicon-search brown" aria-hidden="true"></span></button>
          </div>

          <div className="col-sm-12 col-lg-2">
          </div>
        {/*</form>*/}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    filterByBrew(allProducts, filterName){
      dispatch(filterByBrew(allProducts, filterName));
      browserHistory.push(`/products/brewType-${filterName}`);
    }
  };
};

export default connect(
  state => ({
    allProducts: state.products.allProducts,
  }),
  mapDispatchToProps
)(Navbar);
