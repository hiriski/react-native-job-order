package me.riski.jomobile;

import com.facebook.react.ReactActivity;
import android.os.Bundle;
import org.devio.rn.splashscreen.SplashScreen; // required for react-native-splash-screen >= 0.3.1

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "JobOrderApp";
  }

 @Override
  protected void onCreate(Bundle savedInstanceState) {
    // SplashScreen.show(this);
    // SplashScreen.show(this, R.style.SplashScreenTheme);
    super.onCreate(savedInstanceState);
  }
}
