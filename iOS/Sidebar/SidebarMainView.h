#import "TheSidebarController.h"
#import "SidebarLeftView.h"
#import "SidebarContentView.h"

@interface SidebarMainView : UIView {
    TheSidebarController *_controller;
    SidebarLeftView      *_leftComponent;
    SidebarContentView   *_mainComponent;
    SidebarTransitionStyle _transitionStyle;
    
}

- (void)openLeftbar;
- (void)closeSidebar;
- (void)setTransitionStyle: (NSString *)style;

@end