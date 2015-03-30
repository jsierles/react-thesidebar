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
    [_controller presentLeftSidebarViewControllerWithStyle:_transitionStyle];
}

- (void)closeSidebar
{
    [_controller dismissSidebarViewController];
}

- (void)setTransitionStyle:(NSString *)style
{
    if([style isEqual:@"facebook"]) {
        _transitionStyle = SidebarTransitionStyleFacebook;
    }
    else if([style isEqual:@"airbnb"]) {
        _transitionStyle = SidebarTransitionStyleAirbnb;
    }
    else if([style isEqual:@"luvocracy"]) {
        _transitionStyle = SidebarTransitionStyleLuvocracy;
    }
    else if([style isEqual:@"feedly"]) {
        _transitionStyle = SidebarTransitionStyleFeedly;
    }
    else if([style isEqual:@"flipboard"]) {
        _transitionStyle = SidebarTransitionStyleFlipboard;
    }
    else if([style isEqual:@"wunderlist"]) {
        _transitionStyle = SidebarTransitionStyleWunderlist;
    }
}

@end