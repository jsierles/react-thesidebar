#import "TheSidebarController.h"
#import "SidebarLeftView.h"
#import "SidebarContentView.h"

@interface SidebarMainView : UIView {
    TheSidebarController *_controller;
    SidebarLeftView      *_leftComponent;
    SidebarContentView   *_mainComponent;
    
}

- (void)openLeftbar;

@end