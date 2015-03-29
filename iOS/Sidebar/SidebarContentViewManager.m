#import "SidebarContentViewManager.h"
#import "SidebarContentView.h"

@implementation SidebarContentViewManager

- (UIView *)view
{
    return [[SidebarContentView alloc] init];
}

@end