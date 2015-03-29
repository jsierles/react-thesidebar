var React = require('react-native');
var merge = require('merge');
var ReactIOSViewAttributes = require('ReactIOSViewAttributes');
var createReactIOSNativeComponentClass = require('createReactIOSNativeComponentClass');

var SidebarLeftView = createReactIOSNativeComponentClass({
    validAttributes: merge(
        ReactIOSViewAttributes.UIView, {
        menu: true,
        content: true
    }),
    uiViewClassName: 'SidebarLeftView',
});

var SidebarContentView = createReactIOSNativeComponentClass({
    validAttributes: merge(
        ReactIOSViewAttributes.UIView, {
        menu: true,
        content: true
    }),
    uiViewClassName: 'SidebarContentView',
});

var SidebarMainView = createReactIOSNativeComponentClass({
    validAttributes: merge(
        ReactIOSViewAttributes.UIView, {
        menu: true,
        content: true
    }),
    uiViewClassName: 'SidebarMainView',
});

var SideMenu = React.createClass({
    propTypes: {
        menuView: React.PropTypes.node,
        mainView: React.PropTypes.node
    },
    render: function() {
        return (
            <SidebarMainView>
                <SidebarLeftView>
                    {this.props.menuView}
                </SidebarLeftView>
                <SidebarContentView>
                    {this.props.mainView}
                </SidebarContentView>
            </SidebarMainView>
        );
    }
});

module.exports = SideMenu;