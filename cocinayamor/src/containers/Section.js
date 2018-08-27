import React from 'react';
import Title from '../components/Title';
import Option from '../components/Option';


class Section extends React.Component {
    render() {
        let data = this.props.data;
        let title;
        if (data.title != undefined) { 
            title = <Title data={data.title} />;
        }
        let section = <div key="section" className="row row-full">
            {data.options.map((option, key) => {
                return <Option key="option-{key}" data=option />
            })}
        </div>;
        return [title, section];
    }
}
