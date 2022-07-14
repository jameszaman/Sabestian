import mouse
from time import time, sleep

is_clicked = False
is_paused = False
run_program = True

def click_handler():
  global is_paused
  global is_clicked

  if is_paused:
    return

  if is_clicked:
    is_clicked = False
  else:
    mouse.hold()
    is_clicked = True

def right_click_handler():
  global run_program
  run_program = False

def middle_click_handler():
  global is_paused
  if is_paused:
    is_paused = False
  else:
    is_paused = True

def main_event():
  mouse.on_right_click(right_click_handler)
  mouse.on_click(click_handler)
  mouse.on_middle_click(middle_click_handler)
  while run_program:
    sleep(1)
  return

main_event()