var React = require('react-native');
var StyleSheet = React.StyleSheet;
var merge = require('merge');
var ReactIOSViewAttributes = require('ReactIOSViewAttributes');
var createReactIOSNativeComponentClass = require('createReactIOSNativeComponentClass');

var styles = StyleSheet.create({
    container: {
        flex: 1
  }
});

var SidebarLeftView = createReactIOSNativeComponentClass({
    validAttributes: ReactIOSViewAttributes.UIView,
    uiViewClassName: 'SidebarLeftView',
});

var SidebarContentView = createReactIOSNativeComponentClass({
    validAttributes: ReactIOSViewAttributes.UIView,
    uiViewClassName: 'SidebarContentView',
});

var SidebarMainView = createReactIOSNativeComponentClass({
    validAttributes: ReactIOSViewAttributes.UIView,
    uiViewClassName: 'SidebarMainView',
});

var SideMenu = React.createClass({
    render: function() {
        return (
            <SidebarMainView style={styles.container}>
                <SidebarLeftView style={styles.container}>
                    {this.props.menu}
                </SidebarLeftView>
                <SidebarContentView style={styles.container}>
                    {this.props.content}
                </SidebarContentView>
            </SidebarMainView>
        );
    }
});

module.exports = SideMenu;