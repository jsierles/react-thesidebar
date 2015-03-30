/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

"use strict";

var React = require("react-native");
var {
    AppRegistry,
    StyleSheet,
    TouchableHighlight,
    TouchableWithoutFeedback,
    Text,
    View,
    ListView,
    Navigator
} = React;

var SideMenu = require("./sidemenu.js");

var ContentView = React.createClass({
    getInitialState: function() {
        return {
            styles: [
                {
                    title: "Facebook Style",
                    subtitle: "Content slides to reveal sidebar",
                    style: "facebook"
                },
                {
                    title: "Airbnb Style",
                    subtitle: "Content rotates in 3d space to reveal sidebar",
                    style: "airbnb"
                },
                {
                    title: "Luvocracy Style",
                    subtitle: "Content zooms out to reveal sidebar",
                    style: "luvocracy"
                },
                {
                    title: "Feedly Style",
                    subtitle: "Sidebar slides over content",
                    style: "feedly"
                },
                {
                    title: "Flipboard Style",
                    subtitle: "Sidebar slides over while content zooms out",
                    style: "flipboard"
                },
                {
                    title: "Wunderlist Style",
                    subtitle: "Sidebar and content slide making a parallax effect",
                    style: "wunderlist"
                }
            ]
        };
    },

    _pressRow: function(style) {
        if (this.props.onChangeActive) {
            this.props.onChangeActive(style);
        }
    },

    renderRow: function(rowData) {
        var rowStyle = styles.rowStyle;
        if (this.props.activeStyle === rowData.style) {
            rowStyle = styles.rowStyleActive;
        }
        return (
            <TouchableHighlight onPress={() => this._pressRow(rowData.style)}>
                <View style={rowStyle}>
                  <Text style={styles.rowTitle}>
                        {rowData.title}
                  </Text>
                  <Text style={styles.rowSubtitle}>
                        {rowData.subtitle}
                  </Text>
                </View>
            </TouchableHighlight>
        );
    },

    render: function() {
        var self = this;
        var rows = this.state.styles.map(function(row) {
            return self.renderRow(row);
        });
        return (
            <View style={styles.contentViewContainer}>
                <Text style={styles.welcomeText}>
                    The SidebarController
                </Text>
                <TouchableHighlight style={styles.openButton} onPress={this.props.menuOpen}>
                    <Text style={styles.openButtonText}>Open Sidebar</Text>
                </TouchableHighlight>
                {rows}
            </View>
        );
    }
});


var SideBarView = React.createClass({
    render: function() {
        return (
            <View style={styles.sidebarViewContainer}>
                <Text style={styles.sidebarTitle}>Sidebar</Text>
                <Text style={styles.sidebarElement}>Link 1</Text>
                <Text style={styles.sidebarElement}>Link 2</Text>
                <Text style={styles.sidebarElement}>Link 3</Text>
            </View>
        );
    }
});


var MainView = React.createClass({
    getInitialState: function() {
        return {
            open: false,
            style: "facebook"
        };
    },

    onMenuOpen: function() {
        this.setState({open: true});
    },

    onMenuClose: function() {
        this.setState({open: false});
    },

    onChangeActive: function(style) {
        this.setState({style: style});
    },

    render: function() {
        var menu = (
            <TouchableWithoutFeedback onPress={this.onMenuClose}>
                <View style={styles.sidebarContainer}>
                    <SideBarView/>
                </View>
            </TouchableWithoutFeedback>
        );
        var content = (
                <TouchableWithoutFeedback onPress={this.onMenuClose}>
                    <View style={styles.mainViewContainer}>
                        <ContentView activeStyle={this.state.style} onChangeActive={this.onChangeActive} menuOpen={this.onMenuOpen}/>
                    </View>
                </TouchableWithoutFeedback>
        );
        return <SideMenu open={this.state.open} transitionStyle={this.state.style} menu={menu} content={content}/>;
    }
});


var styles = StyleSheet.create({
    mainViewContainer: {
        flexDirection: "column",
        backgroundColor: "#ffffff",
        flex: 1
    },
    rowStyle: {
        flexDirection: "column",
        flex: 1,
        borderBottomWidth: 1,
        borderColor: "#a5a5a5",
    },
    rowStyleActive: {
        backgroundColor: "#f0fafe",
        borderBottomWidth: 1,
        borderColor: "#a5a5a5"
    },
    rowTitle: {
        fontSize: 18,
        marginTop: 5,
        marginBottom: 0,
        marginLeft: 10,
        color: "#323232"
    },
    rowSubtitle: {
        fontSize: 14,
        color: "#656565",
        marginTop: 3,
        marginLeft: 10,
        marginBottom: 8
    },
    contentViewContainer: {
        flexDirection: "column",
    },
    openButton: {
        borderWidth: 2,
        borderColor: "#d2effc",
        padding: 5,
        borderRadius: 5,
        margin: 15,
        marginBottom: 20,
        width: 110,
        alignSelf: "center"
    },
    openButtonText: {
        textAlign: "center"
    },
    welcomeText: {
        fontSize: 20,
        textAlign: "center",
        marginTop: 30
    },
    sidebarContainer: {
        flex: 1,
        paddingTop: 60,
        paddingLeft: 30,
        flexDirection: "column",
        backgroundColor: "#323232",
        justifyContent: "center",
        alignItems: "center"
    },
    sidebarViewContainer: {
        flexDirection: "column",

    },
    sidebarTitle: {
        fontSize: 22,
        color: "#e3e3e3",
        marginBottom: 10
    },
    sidebarElement: {
        margin: 5,
        fontSize: 16,
        color: "#e3e3e3"
    }
});

AppRegistry.registerComponent('Sidemenu', () => MainView);
