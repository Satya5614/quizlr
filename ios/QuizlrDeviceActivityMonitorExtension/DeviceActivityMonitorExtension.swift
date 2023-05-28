//
//  DeviceActivityMonitorExtension.swift
//  QuizlrDeviceActivityMonitorExtension
//
//  Created by Satya Prakash Goyal on 24/05/23.
//

import DeviceActivity
import ManagedSettings
import Foundation
import SwiftUI
import FamilyControls

class DeviceActivityMonitorExtension: DeviceActivityMonitor {
    override func intervalDidStart(for activity: DeviceActivityName) {
      super.intervalDidStart(for: activity)
    }
    
    override func eventDidReachThreshold(_ event: DeviceActivityEvent.Name, activity: DeviceActivityName) {
  
      let suiteName = "group.com.appeneure.quizlr"
      let shieldApps = UserDefaults(suiteName: suiteName)?.object(forKey: "shieldApps")
      let applications = FamilyActivitySelection(rawValue: shieldApps! as! String)
      let store = ManagedSettingsStore();
      
      store.shield.applications = applications!.applicationTokens.isEmpty ? nil : applications!.applicationTokens
      store.shield.applicationCategories = applications!.categoryTokens.isEmpty
      ? nil
      : ShieldSettings.ActivityCategoryPolicy.specific(applications!.categoryTokens)
      
      super.eventDidReachThreshold(event, activity: activity)
    }
}

extension FamilyActivitySelection: RawRepresentable {
    public init?(rawValue: String) {
        guard let data = rawValue.data(using: .utf8),
            let result = try? JSONDecoder().decode(FamilyActivitySelection.self, from: data)
        else {
            return nil
        }
        self = result
    }

    public var rawValue: String {
        guard let data = try? JSONEncoder().encode(self),
            let result = String(data: data, encoding: .utf8)
        else {
            return "[]"
        }
        return result
    }
}
