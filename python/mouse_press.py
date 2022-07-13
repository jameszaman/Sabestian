import mouse
from time import time, sleep

is_clicked = False
run_program = True

def click_handler():
  global is_clicked
  if is_clicked:
    is_clicked = False
  else:
    mouse.hold()
    is_clicked = True

def right_click_handler():
  global run_program
  run_program = False

def main_event():
  mouse.on_right_click(right_click_handler)
  mouse.on_click(click_handler)
  while run_program:
    sleep(1)
  return

main_event()