import React, { Component } from 'react';
import ButtonAppBar from './components/Header/Header';
import Middle from './components/Middle/Middle';
import HiddenPerson from "./components/Hidden/HiddenPerson";
import Persons from "./components/Persons/Persons";
import Items from "./components/Items/Items";
import Services from "./components/Services/Services";


class App extends Component {
    // create a state
    state = {
        category : [

            {id:1, name:"Persons"},
            {id:2,name:"Items"},
            {id:3,name:"Services"}
        ],

        persons: [
            {id:1 , name:"Sameera Perera" ,address:"Mathugama", img:"http://localhost:3000/Assests/image/sam.jpg"},
            {id:1 , name:"Kavindu Jayawardana" ,address:"Horana", img:"http://localhost:3000/Assests/image/kavi.jpg"},
            {id:1 , name:"Kisandu Vidujaya" ,address:"Kaluthara", img:"http://localhost:3000/Assests/image/kisa.jpg"},
            {id:1 , name:"Vidurajith Darshana" ,address:"Bulathsinhala", img:"http://localhost:3000/Assests/image/vidu.jpg"}
        ],

        items: [
            {id:1 , name:"Cheese" , img:"http://localhost:3000/Assests/image/items/cheese.png"},
            {id:1 , name:"Chicken" , img:"http://localhost:3000/Assests/image/items/chicken.png"},
            {id:1 , name:"Gowa" , img:"http://localhost:3000/Assests/image/items/gowa.png"},
            {id:1 , name:"Mango" , img:"http://localhost:3000/Assests/image/items/mango.png"}
        ],

        services: [
            {id:1 , name:"C-Care" , img:"http://localhost:3000/Assests/image/services/c-care.png"},
            {id:1 , name:"Delivery" , img:"http://localhost:3000/Assests/image/services/delivery.png"},
            {id:1 , name:"Discount" , img:"http://localhost:3000/Assests/image/services/discount.png"},
            {id:1 , name:"Loan" , img:"http://localhost:3000/Assests/image/services/loan.png"}
        ],
        viewItem: false,
        viewPerson:false,
        viewService:false,
        showDetails:false,
        index: ''


    }
    toggleDetails = (index) => {
        const doesShow = this.state.showDetails;
        this.setState({showDetails:!doesShow});
        this.setState({index:index});

    }

    removePerson =(personIndex) => {
        const persons=[...this.state.persons];
        persons.splice(personIndex,1);
        this.setState({persons: persons})
    }

    deleteDetails = (personIndex) => {
        // const paragraph=this.state.paragraph; ----> this.state.paragraph.slice(); ---> [...this.state.paragraph]
        const persons=[...this.state.persons];
        persons.splice(personIndex,1);
        this.setState({persons: persons})
    }


    editPerson =() => {

    }



    selectorChange = (event) => {
        let selectValue=event.target.value;
        let isShowPerson=this.state.viewPerson;
        let isShowItem=this.state.viewItem;
        let isShowService=this.state.viewService;

        if(this.state.category[0].name===selectValue) {
            this.setState({
                viewPerson:!isShowPerson,
                viewItem:false,
                viewService:false,

            })

        }

        if(this.state.category[1].name===selectValue) {
            this.setState({
                viewPerson:false,
                viewItem:!isShowItem,
                viewService:false,

            })

        }

        if(this.state.category[2].name===selectValue) {
            this.setState({
                viewPerson:false,
                viewItem:false,
                viewService:!isShowService,

            })

        }

    }





  render() {

      let showPerson = false;



      if(this.state.showDetails) {
          showPerson = (

              // ----------------------------- show hide details -----------------------------

              <div>
                         return <HiddenPerson
                              name={this.state.persons[this.state.index].name}
                              address={this.state.persons[this.state.index].address}
                              // click={() => this.removePerson(index)}
                              img={this.state.persons[this.state.index].img}

                              key={this.state.persons[this.state.index].id}
                          />

                      })


              </div>
          );



      }

      let persons=null;
      if(this.state.viewPerson) {
            persons=<Persons
                update={this.toggleDetails}
                remove = {this.deleteDetails}
                persons={this.state.persons}
            />

      }

      let items=null;
      if(this.state.viewItem) {
          items=<Items

              items={this.state.items}
          />

      }

      let services=null;
      if(this.state.viewService) {
          services=<Services

              services={this.state.services}
          />

      }


      return (
      <div className="App">
        <div>
          <ButtonAppBar />
        </div>
        <div>

          {/*this is a middle part (selector and persons)*/}
            <Middle
                change={this.selectorChange}
                category={this.state.category}

            />
            <div className="row">
                {persons}
                {items}
                {services}
            </div>

            {showPerson}

        </div>
      </div>
    );
  }
}

export default App;

/*
 <Middle
                change={this.selectorChange}
                category={this.state.category}
                clicked={this.clickButton}
                update={this.toggleDetails}
                remove = {this.deleteDetails}
                persons={this.state.persons}
            />


<br/><br/>
                <Card className={classes.card}>
                <CardContent>
                    <div className="row">
                        <Persons
                               update={props.update}
                               persons={props.persons}
                               remove={props.remove}
                        />

                    </div>
                </CardContent>
                <CardActions>

                </CardActions>
            </Card>
 */