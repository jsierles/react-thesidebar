#import "SidebarLeftViewManager.h"
#import "SidebarLeftView.h"

@implementation SidebarLeftViewManager

- (UIView *)view
{
    return [[SidebarLeftView alloc] init];
}

RCT_EXPORT_MODULE();

@end