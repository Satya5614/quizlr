//
//  MyModel.swift
//  quizlr
//
//  Created by Satya Prakash Goyal on 21/05/23.
//

import SwiftUI
import Foundation
import FamilyControls
import ManagedSettings

@available(iOS 16.0, *)
private let _MyModel = MyModel()

@available(iOS 16.0, *)
class MyModel: ObservableObject {
    // Import ManagedSettings to get access to the application shield restriction
    let store = ManagedSettingsStore()
    //@EnvironmentObject var store: ManagedSettingsStore
    
    @Published var selectionToDiscourage: FamilyActivitySelection
    @Published var selectionToEncourage: FamilyActivitySelection
    
    init() {
        selectionToDiscourage = FamilyActivitySelection()
        selectionToEncourage = FamilyActivitySelection()
    }
    
    class var shared: MyModel {
        return _MyModel
    }
    
    func setShieldRestrictions() {
        print("setShieldRestrictions")
        let applications = MyModel.shared.selectionToDiscourage
        if applications.applicationTokens.isEmpty {
            print("empty applicationTokens")
        }
        if applications.categoryTokens.isEmpty {
            print("empty categoryTokens")
        }
        
        store.shield.applications = applications.applicationTokens.isEmpty ? nil : applications.applicationTokens
        store.shield.applicationCategories = applications.categoryTokens.isEmpty
        ? nil
        : ShieldSettings.ActivityCategoryPolicy.specific(applications.categoryTokens)
    }
}
