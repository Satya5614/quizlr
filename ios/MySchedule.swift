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

// The Device Activity name is how I can reference the activity from within my extension
@available(iOS 16.0, *)
extension DeviceActivityName {
    // Set the name of the activity to "daily"
    static let daily = Self("daily")
}

// I want to remove the application shield restriction when the child accumulates enough usage for a set of guardian-selected encouraged apps
@available(iOS 16.0, *)
extension DeviceActivityEvent.Name {
    // Set the name of the event to "encouraged"
    static let encouraged = Self("encouraged")
}

let dateComponents = Calendar.current.dateComponents([.hour, .minute, .second],
                                                     from: Date())

@available(iOS 16.0, *)
let schedule = DeviceActivitySchedule(
    // I've set my schedule to start and end at midnight
    intervalStart: DateComponents(hour: dateComponents.hour,
                                  minute: dateComponents.minute,
                                  second: dateComponents.second),
    intervalEnd: DateComponents(hour: 23,
                                minute: 59),
    // I've also set the schedule to repeat
    repeats: true
)

@available(iOS 16.0, *)
class MySchedule {
    static public func unsetSchedule() {
        let center = DeviceActivityCenter()
        print("center.avtivities:\(center.activities)")
        if center.activities.isEmpty {
            return
        }
        center.stopMonitoring(center.activities)
        print("center.avtivities:\(center.activities)")
    }
    
    static public func setSchedule(thresholdInSeconds: Int = 10) {
      
      print("-------------thresholdInSeconds--------------------")
      print(thresholdInSeconds)
      print("---------------------------------")
      
      
      let suiteName = "group.com.appeneure.quizlr"
      let shieldApps = UserDefaults(suiteName: suiteName)?.object(forKey: "shieldApps")
      let applications = FamilyActivitySelection(rawValue: shieldApps! as! String)
      
//        let applications = MyModel.shared.selectionToEncourage
        if applications!.applicationTokens.isEmpty {
            print("empty applicationTokens")
        }
        if applications!.categoryTokens.isEmpty {
            print("empty categoryTokens")
        }
      
//        let store = ManagedSettingsStore();
//        store.shield.applicationCategories = ShieldSettings.ActivityCategoryPolicy.specific(applications!.categoryTokens)
        
        let events: [DeviceActivityEvent.Name: DeviceActivityEvent] = [
            .encouraged: DeviceActivityEvent(
                applications: applications!.applicationTokens,
                categories: applications!.categoryTokens,
                threshold: DateComponents(second: thresholdInSeconds)
            )
        ]
        
        let center = DeviceActivityCenter()
        do {
            // Call startMonitoring with the activity name, schedule, and events
            print("center.avtivities:\(center.activities)")
            print("Try to start monitoring...")
            try center.startMonitoring(.daily, during: schedule, events: events)
            print("monitoring...")
        } catch {
            print("Error monitoring schedule: ", error)
        }
    }
}
