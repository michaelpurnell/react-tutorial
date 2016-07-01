/**
 * Created by ashleyclark on 6/25/16.
 */
/* My component returns hello world and react renders mycomponent
that is tied to the element id mount-point */

var MyComponent = React.createClass({
  render: function(){
    return (
        <div className="comps">
      <h1>Hello World</h1>
      </div>
    );
  }
});

ReactDOM.render(
  <MyComponent/>,
  document.getElementById("mountDiv1")
);
////////////////

var MyComponent2 = React.createClass({
  render: function(){
    return (
    <h1>Hello, {this.props.name}!</h1>
    );
  }
});

ReactDOM.render(
  <MyComponent2 name="Handsome" />,
  document.getElementById('mountDiv2')
);

//////////////////

var MyComponentState = React.createClass({
  getInitialState: function(){
    return {
      count: 5
    }
  },
  render: function(){
    return (
      <h1>{this.state.count}</h1>
    )
  }
});

ReactDOM.render(
<MyComponentState/>,
  document.getElementById("mountDiv3")
);

///////////////////////
var Counter = React.createClass({
  incrementCount: function(){
    this.setState({
      count: this.state.count + 1
    })
  },
  getInitialState:function(){
    return {
      count:0
    }
  },
  render:function(){
    return(
      <div className="my-component">
        <h1>Count:{this.state.count}</h1>
        <button type="button" onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
});

ReactDOM.render(<Counter/>, document.getElementById('mountDiv4'));

////////////////////////
var FilteredList = React.createClass({
    filterList: function(event){
      var updatedList = this.state.initialItems;
      updatedList = updatedList.filter(function (item){
        return item.toLowerCase().search(
          event.target.value.toLowerCase()) !== -1;
      });
      this.setState({items:updatedList});
    },
  getInitialState: function(){
    return {
      initialItems:[
        "Apples",
        "Broccoli",
        "Chicken",
        "Duck",
        "Eggs",
        "Fish",
        "Granola",
        "Hash Browns"
      ],
      items:[]
    }
  },
  componentWillMount:function(){
    this.setState({items: this.state.initialItems})
  },
  render:function(){
    return(
      <div className="filter-list">
        <input type="text" placeholder="Search" onChange={this.filterList}/>
        <List items={this.state.items}/>
      </div>
    );
  }
});

var List = React.createClass({
  render: function(){
    return (
      <ul>
      {
        this.props.items.map(function(item){
        return <li key={item}>{item}</li>
      })
      }
    </ul>
    )
  }
});

ReactDOM.render(<FilteredList/>, document.getElementById('mountDiv5'));

//
//
// var FilteredList = React.createClass({
//   filterList: function(event){
//     var updatedList = this.state.initialItems;
//     updatedList = updatedList.filter(function(item){
//       return item.toLowerCase().search(
//           event.target.value.toLowerCase()) !== -1;
//     });
//     this.setState({items: updatedList});
//   },
//   getInitialState: function(){
//     return {
//       initialItems: [
//         "Apples",
//         "Broccoli",
//         "Chicken",
//         "Duck",
//         "Eggs",
//         "Fish",
//         "Granola",
//         "Hash Browns"
//       ],
//       items: []
//     }
//   },
//   componentWillMount: function(){
//     this.setState({items: this.state.initialItems})
//   },
//   render: function(){
//     return (
//       <div className="filter-list">
//       <input type="text" placeholder="Search" onChange={this.filterList}/>
//     <List items={this.state.items}/>
//     </div>
//     );
//   }
// });
//
// var List = React.createClass({
//   render: function(){
//     return (
//       <ul>
//       {
//         this.props.items.map(function(item) {
//         return <li key={item}>{item}</li>
//       })
//   }
//     </ul>
//     )
//   }
// });
//
// ReactDOM.render(<FilteredList/>, document.getElementById('mountDiv5'));
///////////////////////
// var myProps = React.createClass({
//   render:function(){
//     let txt = this.props.txt
//     return <h1>{txt}</h1>
//   }
// });
// myProps.protoTypes = {
//   txt: React.ProtoTypes.string,
//   cat: React.ProtoType.number.isRequired
// };
// myProps.defaultProps = {
//   txt: 'this is the default text'
// }
//
// ReactDom.render(
//   <myProps cat={5}/>,
//   document.getElementById('mount-point')
// )
 ////////////////////////

// var Binding = React.createClass({
//   changeText: function(e){
//     this.setState({
//       text: e.target.value
//     })
//   },
//   getInitialState:function(){
//     return {
//       text:'this is the initial text state'
//     }
//   },
//   render:function(){
//     return(
//       <div>
//           <input type="text" onChange={this.changeText.bind(this)} />
//           <h1>{this.state.text}</h1>
//       </div>
//     );
//   }
// });
//
// ReactDom.render(
// <Binding/>,
//   document.getElementById('mountDiv5')
// );

