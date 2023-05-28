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
  
  @objc static func requiresMainQueueSetup() -> Bool { return true }
  
  @objc public func requestAuthorization() {
    Task {
      await reqAuth();
    }
  }
  
  public func reqAuth() async {
    print("try requestAuthorization")
    do {
      print("try requestAuthorization")
      try await AuthorizationCenter.shared.requestAuthorization(for: FamilyControlsMember.individual)
      print("requestAuthorization success")
      switch AuthorizationCenter.shared.authorizationStatus {
      case .notDetermined:
          print("not determined")
      case .denied:
          print("denied")
      case .approved:
          print("approved")
      @unknown default:
          break
      }
    } catch {
        print("Error requestAuthorization: ", error)
    }
  }
  
  @StateObject var model = MyModel.shared
  @StateObject var store = ManagedSettingsStore()
  
  let controller: UIViewController = (UIApplication.shared.windows.first?.rootViewController)!
  
  @objc
  func selectAppsToDiscourage() {
    print("selectAppsToDiscourage")
    globalMethodCall = "selectAppsToDiscourage"
    Task {
      let vc = UIHostingController(rootView: ContentView()
                          .environmentObject(model)
                          .environmentObject(store))

      controller.present(vc, animated: true, completion: nil)
    }
  }
  
  @objc
  func selectAppsToEncourage() {
    print("selectAppsToEncourage")
    globalMethodCall = "selectAppsToEncourage"
    Task {
      let vc = UIHostingController(rootView: ContentView()
                          .environmentObject(model)
                          .environmentObject(store))

      controller.present(vc, animated: true, completion: nil)
    }
  }
  
  @objc
  func setMonitorActivitySchedule(_ thresholdInSeconds: Int) {
    print("selectAppsToEncourage");
    MySchedule.setSchedule(thresholdInSeconds: thresholdInSeconds)
  }
}
