//
//  MySchedule.swift
//  quizlr
//
//  Created by Satya Prakash Goyal on 21/05/23.
//
import Foundation
import DeviceActivity
import FamilyControls
import ManagedSettings
import UIKit

@available(iOS 16.0, *)
extension DeviceActivityName {
    static let daily = Self("daily")
}

@available(iOS 16.0, *)
extension DeviceActivityEvent.Name {
    static let encouraged = Self("encouraged")
}

let dateComponents = Calendar.current.dateComponents([.hour, .minute, .second],
                                                     from: Date())

@available(iOS 16.0, *)
let schedule = DeviceActivitySchedule(
    intervalStart: DateComponents(hour: dateComponents.hour,
                                  minute: dateComponents.minute,
                                  second: dateComponents.second),
    intervalEnd: DateComponents(hour: 23, minute: 59),
    repeats: true
)

@available(iOS 16.0, *)
class MySchedule {
    static public func unsetSchedule() {
        let center = DeviceActivityCenter()
        if center.activities.isEmpty {
            return
        }
        center.stopMonitoring(center.activities)
    }
  
    static public func isAppToShieldSelected() -> Bool {
        let suiteName = "group.com.appeneure.quizlr"
        let shieldApps = UserDefaults(suiteName: suiteName)?.object(forKey: "shieldApps")
        if(shieldApps != nil) {
          let applications = FamilyActivitySelection(rawValue: shieldApps! as! String)
          if (!applications!.applicationTokens.isEmpty || !applications!.categoryTokens.isEmpty) {
            return true;
          }
        }
        return false;
    }
    
    static public func setSchedule(thresholdInSeconds: Int = 10) {
        let suiteName = "group.com.appeneure.quizlr"
        let shieldApps = UserDefaults(suiteName: suiteName)?.object(forKey: "shieldApps")
        let applications = FamilyActivitySelection(rawValue: shieldApps! as! String)

        if (!applications!.applicationTokens.isEmpty || !applications!.categoryTokens.isEmpty) {
            let events: [DeviceActivityEvent.Name: DeviceActivityEvent] = [
                .encouraged: DeviceActivityEvent(
                    applications: applications!.applicationTokens,
                    categories: applications!.categoryTokens,
                    threshold: DateComponents(second: thresholdInSeconds)
                )
            ]

          let center = DeviceActivityCenter()
          
          do {
              try center.startMonitoring(.daily, during: schedule, events: events)
              print("Monitoring")
          } catch {
              print("Error monitoring schedule: ", error)
          }
        } else {
          print("Select app to shield before starting monitoring")
        }
    }
}
