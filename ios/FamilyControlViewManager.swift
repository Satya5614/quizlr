//
//  ContentViewManager.swift
//  quizlr
//
//  Created by Satya Prakash Goyal on 22/05/23.
//

import DeviceActivity
import UIKit
import ManagedSettings
import SwiftUI

var globalMethodCall = ""

@available(iOS 16.0, *)
@objc(FamilyControlViewManager)
class FamilyControlViewManager: RCTViewManager {
  
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
  
  @StateObject var model = MyModel.shared
  @StateObject var store = ManagedSettingsStore()
  
  let controller: UIViewController = (UIApplication.shared.windows.first?.rootViewController)!
  
  @objc
  func selectAppsToDiscourage() {
    print("selectAppsToDiscourage")
    globalMethodCall = "selectAppsToDiscourage"
    let vc = UIHostingController(rootView: ContentView()
                        .environmentObject(model)
                        .environmentObject(store))

    controller.present(vc, animated: true, completion: nil)
  }
    
  override func view() -> UIView! {
    let b = UIButton.init(type: UIButton.ButtonType.system)
        b.titleLabel?.font = UIFont.systemFont(ofSize: 20)
        b.titleLabel?.text = "Show Apps to Discrage"
        b.autoresizingMask = [.flexibleWidth, .flexibleHeight]
        b.addTarget(
          self,
          action: #selector(selectAppsToDiscourage),
          for: .touchUpInside
        )
        return b
  }
}
