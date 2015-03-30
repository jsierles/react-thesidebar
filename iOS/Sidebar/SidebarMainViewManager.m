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
    NSLog(@"%i", [RCTConvert BOOL:json]);
    if ([RCTConvert BOOL:json]) {
        [view openLeftbar];
    } else {
        [view closeSidebar];
    }
}

@end