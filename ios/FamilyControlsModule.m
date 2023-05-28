//
//  FamilyControlsModule.m
//  quizlr
//
//  Created by Satya Prakash Goyal on 21/05/23.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(FamilyControlsModule, NSObject)

RCT_EXTERN_METHOD(requestAuthorization)
RCT_EXTERN_METHOD(selectAppsToDiscourage)
RCT_EXTERN_METHOD(selectAppsToEncourage)
RCT_EXTERN_METHOD(setMonitorActivitySchedule: (int) thresholdInSeconds)

@end
