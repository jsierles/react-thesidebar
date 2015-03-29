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
            <View style={styles.container}>
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
        this.setState({open: !this.state.open});
    },
    render: function() {
        var menu = <SideBarView/>;
        var content = <ContentView menuOpen={this.onMenuOpen}/>;
        return (
            <SideMenu open={this.state.open} menu={menu} content={content}/>
        );
    }
});


var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
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
