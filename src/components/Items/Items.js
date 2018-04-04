import React,{Component} from 'react';
import Item from "./Item/Item";


class Items extends Component{
    render(){
        return this.props.items.map((e,index) =>

            <Item
                key={e.id}
                img={e.img}
                name={e.name}

            />
        )
    }
}

export default Items;