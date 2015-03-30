#import "SidebarMainView.h"

@implementation SidebarMainView

- (void)insertReactSubview:(UIView *)view atIndex:(NSInteger)atIndex
{
    if ([view isKindOfClass:[SidebarLeftView class]]) {
        _leftComponent = (SidebarLeftView *)view;
        [self _update];
    } else if ([view isKindOfClass:[SidebarContentView class]]) {
        _mainComponent = (SidebarContentView *)view;
        [self _update];
    } else {
        RCTLogError(@"Unknown child of type: %@", NSStringFromClass([view class]));
    }
}

- (void)_update
{
    if (_leftComponent && _mainComponent) {
        UIViewController *leftController = [[UIViewController alloc] init];
        leftController.view = _leftComponent;
        UIViewController *mainController = [[UIViewController alloc] init];
        mainController.view = _mainComponent;
        _controller = [[TheSidebarController alloc] initWithContentViewController:mainController leftSidebarViewController:leftController];
        [self addSubview:[_controller view]];
    }
}

- (void)openLeftbar
{
    [_controller presentLeftSidebarViewController];
}

@end