// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
      apiKey: "AIzaSyCpmK8SB9LwReI_a_VBeqrKyyMSLGuuS1Q",
      authDomain: "wiki-iet.firebaseapp.com",
      databaseURL: "https://wiki-iet.firebaseio.com",
      projectId: "wiki-iet",
      storageBucket: "wiki-iet.appspot.com",
      messagingSenderId: "729212350304",
      appId: "1:729212350304:web:2554492358d55301c1b805",
      measurementId: "G-L50VZ7K4GS"

  }
};
/*
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.6.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.6.1/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCpmK8SB9LwReI_a_VBeqrKyyMSLGuuS1Q",
    authDomain: "wiki-iet.firebaseapp.com",
    databaseURL: "https://wiki-iet.firebaseio.com",
    projectId: "wiki-iet",
    storageBucket: "wiki-iet.appspot.com",
    messagingSenderId: "729212350304",
    appId: "1:729212350304:web:2554492358d55301c1b805",
    measurementId: "G-L50VZ7K4GS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
