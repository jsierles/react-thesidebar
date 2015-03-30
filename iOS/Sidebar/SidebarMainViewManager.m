#import "SidebarMainViewManager.h"
#import "SidebarMainView.h"
#import "RCTView.h"
#import "RCTConvert.h"

@implementation SidebarMainViewManager

- (UIView *)view
{
    return [[SidebarMainView alloc] init];
}

RCT_CUSTOM_VIEW_PROPERTY(open, BOOL, SidebarMainView)
{
    if ([RCTConvert BOOL:json]) {
        [view openLeftbar];
    } else {
        [view closeSidebar];
    }
}

RCT_CUSTOM_VIEW_PROPERTY(transitionStyle, NSString, SidebarMainView)
{
    [view setTransitionStyle:[RCTConvert NSString:json]];
}

@end