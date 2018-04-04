import React,{Component} from 'react';
import Service from "./Service/Service";


class Services extends Component{
    render(){
        return this.props.services.map((e,index) =>

            <Service
                key={e.id}
                img={e.img}
                name={e.name}

            />
        )
    }
}

export default Services;