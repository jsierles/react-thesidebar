# React Native - TheSidebar Component
Implementation of the magnificient [TheSidebarcontroller](https://github.com/jondanao/TheSidebarController) in react-native
Not sure yet what's the best way of releasing react-native components with mixed js and Obj-C code so for now an example project will do.  

<img src="https://raw.githubusercontent.com/dzannotti/react-thesidebar/master/closed.png"/>
<img src="https://raw.githubusercontent.com/dzannotti/react-thesidebar/master/open.png"/>

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
The MIT License (MIT)

Copyright (c) 2015 Daniele Zannotti

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.



# Thanks
Without @tadeuzagallo invaluable help this would have not happened
