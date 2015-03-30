var React = require('react-native');
var StyleSheet = React.StyleSheet;
var merge = require('merge');
var ReactIOSViewAttributes = require('ReactIOSViewAttributes');
var createReactIOSNativeComponentClass = require('createReactIOSNativeComponentClass');

var styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
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
    validAttributes: merge(ReactIOSViewAttributes.UIView, {
        open: true,
        transitionStyle: true
    }),
    uiViewClassName: 'SidebarMainView',

});

var SideMenu = React.createClass({
    render: function() {
        var transitionStyle = "facebook";
        if(this.props.transitionStyle !== undefined) {
            transitionStyle = this.props.transitionStyle;
        }
        return (
            <SidebarMainView open={this.props.open} transitionStyle={transitionStyle} style={styles.container}>
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
