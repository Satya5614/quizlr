//
//  FamilyControlsModule.swift
//  quizlr
//
//  Created by Satya Prakash Goyal on 21/05/23.
//

import Foundation
import FamilyControls
import ManagedSettings
import SwiftUI
import UIKit

@available(iOS 16.0, *)
@objc(FamilyControlsModule)
class FamilyControlsModule: NSObject {
  let controller: UIViewController = (UIApplication.shared.windows.first?.rootViewController)!
  
  @objc static func requiresMainQueueSetup() -> Bool { return true }
  
  @objc public func requestAuthorization(_ resolve: @escaping RCTPromiseResolveBlock,
                                         rejecter reject: @escaping RCTPromiseRejectBlock) {
    Task {
      let status = await reqAuth();
      resolve(status)
    }
  }
  
  func reqAuth() async -> String {
    var status: String = ""
    do {
      try await AuthorizationCenter.shared.requestAuthorization(for: FamilyControlsMember.individual)
      switch AuthorizationCenter.shared.authorizationStatus {
      case .notDetermined:
          status = "not determined"
      case .denied:
          status = "denied"
      case .approved:
          status = "approved"
      @unknown default:
          break
      }
    } catch {
        status = "error"
    }
    return status
  }
  
  @objc
  func removeShield() {
    let store = ManagedSettingsStore()
    store.shield.applicationCategories = nil;
    store.shield.applications = nil;
  }
  
  @objc
  func selectAppsToShield() {
    Task {
      let vc = await UIHostingController(rootView: ContentView())
      await controller.present(vc, animated: true, completion: nil)
    }
  }
  
  @objc
  func setMonitorActivitySchedule(_ thresholdInSeconds: Int) {
    MySchedule.setSchedule(thresholdInSeconds: thresholdInSeconds)
  }
  
  @objc
  func isAppToShieldSelected(_ callback: RCTResponseSenderBlock) {
    if(MySchedule.isAppToShieldSelected()) {
      callback(["yes"])
    } else {
      callback(["no"])
    }
  }
  
  @objc
  func unsetActivitySchedule() {
    MySchedule.unsetSchedule()
  }
}
