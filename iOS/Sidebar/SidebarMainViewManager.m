#import "SidebarMainViewManager.h"
#import "SidebarMainView.h"
#import "RCTView.h"

@implementation SidebarMainViewManager

- (UIView *)view
{
    return [[SidebarMainView alloc] init];
}

RCT_CUSTOM_VIEW_PROPERTY(open, BOOL, SidebarMainView)
{
    NSLog(@"HI");
}

@end