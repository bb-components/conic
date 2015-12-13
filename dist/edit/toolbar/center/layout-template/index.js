const React = require('react');
const classNames = require('classnames');
const settingAction = require('../../../actions/setting-action');
const editAction = require('../../../actions/edit-action');
const historyAction = require('../../../actions/history-action');
const treeAction = require('../../../actions/tree-action');
const viewAction = require('../../../actions/view-action');
const _ = require('lodash');
require('./index.scss');

const leftPxRightAuto = require('./data/left-px-right-auto.json');
const companyHome = require('./data/company-home.json');

const templateDatas = [{
    name: 'left-px-right-auto',
    description: '左固定右自适应',
    data: leftPxRightAuto
}, {
    name: 'company-home',
    description: '企业官网',
    data: companyHome
}];

module.exports = React.createClass({
    displayName: 'exports',

    onClick: function (data) {
        settingAction.changeTree(_.cloneDeep(data));
        editAction.selectComponent(null);
        historyAction.clearHistory();
        viewAction.closeView();

        setTimeout(() => {
            treeAction.refreshTree();
        });
    },

    render: function () {
        let templates = templateDatas.map((item, index) => {
            let imageClass = classNames({
                img: true,
                [item.name]: true
            });
            return React.createElement(
                'div',
                { key: index,
                    onClick: this.onClick.bind(this, item.data),
                    className: 'select-box' },
                React.createElement('div', { className: imageClass }),
                React.createElement(
                    'div',
                    { className: 'description' },
                    item.description
                )
            );
        });

        return React.createElement(
            'div',
            { className: '_namespace',
                style: { height: '100%' } },
            React.createElement(
                'div',
                { className: 'layout' },
                templates
            )
        );
    }
});