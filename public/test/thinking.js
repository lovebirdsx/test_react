/* eslint-disable no-undef */
class ProductTable extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const okProducts = this.props.products.filter((product) => {
      if (!product.name.includes(this.props.search.filter)) {
        return false;
      }

      if (this.props.search.stocked && !product.stocked) {
        return false;
      }
      
      return true;
    });
    
    const productLists = okProducts.map((product) => {
      if (product.stocked) {
        return <li key={product.name}>{product.name} {product.price}</li>
      } else {
        return <li key={product.name}><b style={{color:'red'}}>{product.name}</b> {product.price}</li>
      }
    });
    return (
      <div>
        <b>{this.props.category}</b>
        <ol>{productLists}</ol>
      </div>
    );
  }
}

class SearchBar extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  handleFilterChange = (event) => {
    this.props.onSearchChanged(event.target.value);
  }
  
  handleStockedChange = (event) => {
    this.props.onStockChanged(event.target.checked);
  }

  render() {
    return (
      <div>
        <form>
          <input 
            type={'text'}
            placeholder="Search..."
            value={this.props.search.filter}
            onChange={this.handleFilterChange}
          >
          </input>
          <br/>
          <input
            type={'checkbox'}
            value={this.props.search.stocked}
            onChange={this.handleStockedChange}
          >
          </input>
          {' '} Only show products in stock
        </form>
      </div>
    );
  }
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search:{
        filter: '',
        stocked: false
      },
      categoryMap: this.createProductTableByData(props.data)
    }
  }

  createProductTableByData(data) {
    let result = new Map();
    for (const row of data) {
      let category = result.get(row.category);
      if (!category) {
        category = []
        result.set(row.category, category);
      }

      category.push(
        {
          name: row.name,
          price: row.price,
          stocked: row.stocked,
        }
      );
    }
    return result;
  }

  onSearchChanged = (value) => {
    this.setState({
        search:{
          filter: value,
          stocked: this.state.search.stocked,
        }
      }
    );
  }

  onStockChanged = (value) => {
    this.setState({
        search:{
          filter: this.state.search.filter,
          stocked: value,
        }
      }
    );
  }

  render() {
    const productTables = [];
    for (const [category, products] of this.state.categoryMap) {
      productTables.push(
        <ProductTable
          key={category}
          category={category}
          products={products}
          search={this.state.search}
        />
      );
    }

    return (
      <div>
        <SearchBar 
          search={this.state.search}
          onSearchChanged={this.onSearchChanged}
          onStockChanged={this.onStockChanged}
        />
        <div><b>Name Price</b></div>
        <div>{productTables}</div>
      </div>
    );
  }
}

const PRODUCTS = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

// eslint-disable-next-line no-undef
ReactDOM.render(
  (
    <div>
      <FilterableProductTable data={PRODUCTS}/>
    </div>
  ),
  document.getElementById('thinking')
);
