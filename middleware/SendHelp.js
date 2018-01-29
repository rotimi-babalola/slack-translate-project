class SendHelp {
  /**
   * Static method to check if the text payload exactly matches 'help'
   * if it does we send as a response help information
   * if not we move to the next thing in the route
   */
  static verifyHelpMessage(req, res, next) {
    // ensure string exactly matches 'help'
    if (req.body.text.toLowerCase().trim() === 'help') {
      return res.send('Welcome to help center!!!');
    }
    next();
  }
}

export default SendHelp;
