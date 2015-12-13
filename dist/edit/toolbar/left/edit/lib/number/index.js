var React = require('react');
var InputNumber = require('antd/lib/input-number');

const normalWidth = 150;

module.exports = React.createClass({
    displayName: 'exports',

    getInitialState: function () {
        return {
            item: this.props.item
        };
    },

    componentWillReceiveProps: function (nextProps) {
        if (this.state.item !== nextProps.item) {
            this.setState({
                item: nextProps.item
            });
        }
    },

    onChange: function (value) {
        let newItem = this.state.item;
        newItem.value = value;

        this.setState({
            item: newItem
        }, function () {
            this.props.onChange(this.state.item, {
                name: `修改 ${ this.state.item.desc } 为 ${ this.state.item.value }`
            });
        });
    },

    render: function () {
        return React.createElement(
            'div',
            { className: 'ant-form-item' },
            React.createElement(
                'label',
                { htmlFor: 'control-input',
                    className: 'col-8' },
                this.state.item.desc
            ),
            React.createElement(
                'div',
                { className: 'col-16' },
                React.createElement(InputNumber, { type: 'text',
                    value: this.state.item.value,
                    style: { width: normalWidth },
                    onChange: this.onChange,
                    className: 'ant-input',
                    id: 'control-input' })
            )
        );
    }
});