#import "SidebarContentViewManager.h"
#import "SidebarContentView.h"

@implementation SidebarContentViewManager

- (UIView *)view
{
    return [[SidebarContentView alloc] init];
}

RCT_EXPORT_MODULE();

@end