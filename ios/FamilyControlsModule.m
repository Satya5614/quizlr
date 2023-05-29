//
//  FamilyControlsModule.m
//  quizlr
//
//  Created by Satya Prakash Goyal on 21/05/23.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(FamilyControlsModule, NSObject)

RCT_EXTERN_METHOD(requestAuthorization: (RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock) reject)
RCT_EXTERN_METHOD(removeShield)
RCT_EXTERN_METHOD(selectAppsToShield)
RCT_EXTERN_METHOD(setMonitorActivitySchedule: (int) thresholdInSeconds)
RCT_EXTERN_METHOD(unsetActivitySchedule)
RCT_EXTERN_METHOD(isAppToShieldSelected: (RCTResponseSenderBlock) callback)

@end
