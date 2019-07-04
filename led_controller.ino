#include <ESP8266WiFi.h>
#include <FirebaseArduino.h>

#define FIREBASE_HOST "ledcontroller-3fa45.firebaseio.com"
#define FIREBASE_AUTH "i6OZcOqGd6P66PX4vwrlRwqRwQM6u5SpPjtZ3M1X"
#define WIFI_SSID1 "Gooner21"
#define WIFI_PASSWORD1 "aaronramsey"
#define WIFI_SSID2 "Redmi"
#define WIFI_PASSWORD2 "goliath35"
void setup() {
  Serial.begin(9600);

  // connect to wifi.
  WiFi.begin(WIFI_SSID2, WIFI_PASSWORD2);
  Serial.print("connecting");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }
  Serial.println();
  Serial.print("connected: ");
  Serial.println(WiFi.localIP());
  
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);

  pinMode(LED_BUILTIN,OUTPUT);
  // put your setup code here, to run once:

}

void loop() {
  // put your main code here, to run repeatedly:
  String led1 = Firebase.getString("led_cntroller/leds/led1");
  //if (Firebase.failed()){
    //Serial.print("getting /led1 failed:");
    //Serial.println(Firebase.error());
    //return;
  //}else 
  if(Firebase.success()){
    Serial.println("Success.");
  }
  
  if(led1 == "ON"){
    digitalWrite(LED_BUILTIN,LOW);
    Serial.println("ON");
  }else if(led1 == "OFF"){
    digitalWrite(LED_BUILTIN,HIGH);
    Serial.println("OFF");
  }
  delay(2000);
}
