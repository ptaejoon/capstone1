void setup() {
  // put your setup code here, to run once:
  pinMode(23,OUTPUT);
  pinMode(12,OUTPUT);
  pinMode(21,OUTPUT);
  Serial.begin(115200);
}

int i = 0;
int y = 0;
int Z = 0;
void loop() {
  // put your main code here, to run repeatedly:
  int j = 0;
  digitalWrite(23,1);
  delay(100);
  digitalWrite(23,0);
  if( i % 10 == 0){
    y = y ^ 1;
    digitalWrite(21,1);
    delay(100);
    digitalWrite(21,0);
    digitalWrite(12,y);
  }
  delay(100);
  Serial.printf("i=%d, j=%d\n",i++,j++);
}
