import React from 'react';
import Title from '../Title';
import Option from '../Option';
import '../../Colors.css';
import PropTypes from 'prop-types'


/**
 * A section contains the available options for the user to choose.
 */
class Section extends React.Component {
    static propTypes = {
        /**
         * The section title.
         */
        title: PropTypes.string,
        /**
         * Options parameters to render.
         */
        options: PropTypes.arrayOf(PropTypes.shape({
            /** Unique option identification as key index. */
            key: PropTypes.string.isRequired,
            /** CSS class name to customize styles, if present. */
            className: PropTypes.string,
            /** On-click event to fire on user selection. */
            onClick: PropTypes.func.isRequired,
            /** Option name to show. */
            text: PropTypes.string.isRequired
        }))
    }

    constructor(props) {
        super(props);
        this.state = this.props;
    }

    render() {
        let title;
        if (this.state.title !== undefined) { 
            title = (<div className="row">
                <Title className="col-sm-12 bg-color-secondary-2-0">{this.state.title}</Title>
            </div>);
        }

        let section = (<div key="section" className="row">
            {this.state.options.map((option, key) => {
                return <Option key={'option-' + key} { ...option } />
            })}
        </div>)

        return <div>{title}{section}</div>;
    }
}

export default Section;
