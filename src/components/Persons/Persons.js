import React,{Component} from 'react';
import Person from "./Person/Person";

class Persons extends Component{
    render(){
         return this.props.persons.map((e,index) =>

                 <Person
                    key={e.id}
                    img={e.img}
                    address={e.address}
                    name={e.name}
                    remove={this.props.remove.bind(this,index)}
                    update={this.props.update.bind(this,index)}
                 />
         )
    }
}

export default Persons;