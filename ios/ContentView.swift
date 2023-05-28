import FamilyControls
import ManagedSettings
import SwiftUI
import DeviceActivity

@available(iOS 16.0, *)
struct ContentView: View {
    @AppStorage("shieldApps", store: UserDefaults(suiteName: "group.com.appeneure.quizlr")) var shieldApps = FamilyActivitySelection()
    @Environment(\.presentationMode) var presentationMode

    @ViewBuilder
    func contentView() -> some View {
      FamilyActivityPicker(selection: $shieldApps)
    }

    var body: some View {
        NavigationView {
            VStack {
                contentView()
            }
            .navigationBarTitle("Select Apps", displayMode: .inline)
            .navigationBarItems(
                leading: Button("Cancel") {
                    presentationMode.wrappedValue.dismiss()
                },
                trailing: Button("Done") {
                    presentationMode.wrappedValue.dismiss()
                }
            )
        }
    }
}

@available(iOS 15.0, *)
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

