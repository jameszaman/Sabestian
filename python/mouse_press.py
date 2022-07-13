import mouse
from time import time, sleep

is_clicked = False

def click_handler():
  global is_clicked
  if is_clicked:
    is_clicked = False
  else:
    mouse.hold()
    is_clicked = True


def main_event():
  mouse.on_right_click(exit)
  mouse.on_click(click_handler)
  sleep(36000)

main_event()