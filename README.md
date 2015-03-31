# React Native - TheSidebar Component
Implementation of the magnificient [TheSidebarcontroller](https://github.com/jondanao/TheSidebarController) in react-native
Not sure yet what's the best way of releasing react-native components with mixed js and Obj-C code so for now an example project will do.  

<img src="http://imgur.com/TABIpki,NWFyrwz#1"/>
<img src="http://imgur.com/TABIpki,NWFyrwz#0"/>

No support for right hand side sidebar at the moment.

# Example of usage
```
var SideMenu = require("./sidemenu.js");
<SideMenu menu={menu} content={content} open={this.state.open} transitionStyle={this.state.transitionStyle}/>


menu = can be any component
content = can be any component
open = true/false boolean flag which represent if to open or not the sidebar
transitionStyle = transition style to show the sidebar
   valid values:
        "facebook"
        "airbnb"
        "luvocracy"
        "feedly"
        "flipboard"
        "wunderlist"

```  
See the attached example for more details (not the best written example, will clean up in time)

# Licence
MIT

# Thanks
Without @tadeuzagallo invaluable help this would have not happened
