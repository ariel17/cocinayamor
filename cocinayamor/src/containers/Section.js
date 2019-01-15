import React from 'react';
import Title from '../components/Title';
import Option from '../components/Option';
import styled from 'styled-components';


const Div = styled.div`
    min-height: 130%;
`

class Section extends React.Component {

    render() {
        let data = this.props.data;
        let title;

        if (data.title !== undefined) { 
            title = <Title>{data.title}</Title>;
        }

        let section = (<Div key="section" className="row">
            {data.options.map((option, key) => {
                return <Option key={'option-' + key} data={option} />
            })}
        </Div>)

        return [title, section];
    }
}

export default Section;
