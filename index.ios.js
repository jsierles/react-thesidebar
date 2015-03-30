/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    TouchableHighlight,
    TouchableWithoutFeedback,
    Text,
    View,
    Navigator
} = React;

var SideMenu = require("./sidemenu.js");


var ContentView = React.createClass({
    render: function() {
      return (
        <View style={styles.container}>
            <Text style={styles.welcome}>
                Welcome to React Native!
            </Text>
            <TouchableHighlight onPress={this.props.menuOpen}>
                <Text style={styles.instructions}>Open Sidebar</Text>
            </TouchableHighlight>
        </View>
      );
    }
});


var SideBarView = React.createClass({
    render: function() {
        return (
            <View style={styles.sidebar}>
                <Text style={styles.welcome}>
                    Sidebar
                </Text>
            </View>
        );
    }
});


var MainView = React.createClass({
    getInitialState: function() {
        return {
            open: false
        };
    },

    onMenuOpen: function() {
        this.setState({open: true});
    },

    onMenuClose: function() {
        console.log("closing");
        this.setState({open: false});
    },
    render: function() {
        var menu = (
            <TouchableWithoutFeedback onPress={this.onMenuClose}>
                <SideBarView/>
            </TouchableWithoutFeedback>
        );
        var content = (
            <TouchableWithoutFeedback onPress={this.onMenuClose}>
                <ContentView menuOpen={this.onMenuOpen}/>
            </TouchableWithoutFeedback>
        );
        return <SideMenu open={this.state.open} menu={menu} content={content}/>;
    }
});


var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    sidebar: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#323232',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
    }
});

AppRegistry.registerComponent('Sidemenu', () => MainView);
