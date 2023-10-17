# pythonw runs program in background - pythonw notification.py

from plyer import notification
import time

if __name__ == '__main__':
    while True:
        notification.notify(
            title = " *** Drink Water *** ",
            message= "Getting enough water every day is important for your health. Drinking water can prevent dehydration, a condition that can cause unclear thinking, result in mood change, cause your body to overheat, and lead to constipation and kidney stones.",
            # app_icon= "C:\Users\BHATTAD\OneDrive\Desktop\python projects\Desktop Notification\water.ico",
            timeout = 5)
        time.sleep(3600)