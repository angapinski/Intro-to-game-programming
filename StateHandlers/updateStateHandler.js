function updateStateHandler() {
    if (state == MENU_STATE) {
      stateHandler = menuStateHandler;
    } else if (state == LOAD_STATE) {
      stateHandler = loadStateHandler;
    } else if (state == PLAY_STATE) {
      stateHandler = playStateHandler;
    } else if (state == END_STATE) {
      stateHandler = endStateHandler;
    }

    stateHandler.start();
}