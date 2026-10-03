# Build the APK from Android only

1. Create/sign in to a GitHub account and create a new **private** repository.
2. Upload the contents of this folder to the repository (the files `settings.gradle`, `build.gradle`, `app/`, and `.github/` should be at the repository root).
3. Open **Actions** → **Build APK** → **Run workflow**.
4. Wait for the green checkmark.
5. Open the completed workflow run → **Artifacts** → download `HachinanRecovery-debug-apk`.
6. Extract the downloaded ZIP and install `app-debug.apk` on Android. Android may ask you to allow installation from the browser/files app.

The workflow builds the debug APK in GitHub's cloud; Android Studio is not required.
